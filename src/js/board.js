export default class Board {
  constructor(boardSize) {
    this.boardSize = boardSize;
  }

  createHTMLElement(selector) {
    const contener = document.querySelector(selector);
    for (let i = 1; i <= this.boardSize; i++) {
      let circle = document.createElement("div");
      circle.classList = "circle";

      contener.appendChild(circle);
    }
  }
}
