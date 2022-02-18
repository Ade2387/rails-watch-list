import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("hello from card_controller!")
  }
  hoverDelete() {
    this.element.classList.toggle("hover")
  }
}
