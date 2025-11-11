import icon from "../img/goblin.png";

export default class Goblins {
  createGoblin() {
    const circles = document.querySelectorAll(".circle");

    let newindex = circles[Math.floor(Math.random() * circles.length)];
    const goblin = new Image();
    goblin.src = icon;
    newindex.appendChild(goblin);

    let index = null;
    do {
      for (let element of circles) {
        const child_element = element.querySelector("img");
        if (child_element) {
          element.removeChild(child_element);
        }
      }
      let newindex = circles[Math.floor(Math.random() * circles.length)];
      const goblin = new Image();
      goblin.src = icon;
      newindex.appendChild(goblin);
      index = newindex;
    } while (index !== newindex);
  }
}
