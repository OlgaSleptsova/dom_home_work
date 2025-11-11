export default class Game {
  constructor(select, interval) {
    this.select = select;
    this.interval = interval;
  }

  removeGoblin() {
    const selector = document.querySelector(this.select);
    let dead = document.getElementById("dead");
    let lost = document.getElementById("lost");

    selector.addEventListener("click", (event) => {
      if (lost.textContent == 5) {
        clearInterval(this.interval);
        alert("Конец игры");
      }
      if (event.target.tagName == "IMG") {
        dead.textContent = Number(dead.textContent) + 1;
      } else {
        lost.textContent = Number(lost.textContent) + 1;
      }
    });
  }
}
