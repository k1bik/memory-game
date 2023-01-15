import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["cardsList"]
  static values  = {
    inverted:  { type: Object, default: { id: "null", src: "null" } },
    opened:    { type: Array,  default: [] },
    tries:     { type: Number, default: 0  },
    cardsSize: Number
  }

  show(e) {
    const currentCard = e.currentTarget.firstElementChild

    currentCard.classList.remove("hidden")
    e.currentTarget.classList.add("pointer-events-none")  

    if (this.invertedValue.src === "null"){
      this.invertedValue.src = currentCard.src
      this.invertedValue.id  = currentCard.id
    } else {
      Array.from(this.cardsListTarget.children).forEach(element => {
        element.classList.add("pointer-events-none")
      })
      if (currentCard.src === this.invertedValue.src){
        this.openedValue.push(currentCard.id)
        this.openedValue.push(this.invertedValue.id)

        if (this.cardsSizeValue == this.openedValue.length){
          this.triesValue++
          alert(`Your tries: ${this.triesValue}`)
          window.location.reload()
        } else {
          this.removePointerClass()
        }
      } else {
        setTimeout(()=>{
          document.getElementById(this.invertedValue.id).classList.add("hidden")
          currentCard.classList.add("hidden")

          this.removePointerClass()
        }, 500)
      }
      this.invertedValue.src   = "null"
      this.invertedValue.value = "null"
      this.triesValue++
    }
  }

  removePointerClass() {
    Array.from(this.cardsListTarget.children).forEach(element => {
      if (!this.openedValue.includes(`${element.firstElementChild.id}`))
        element.classList.remove("pointer-events-none")
    })
  }
}
