import Board from "./board";
import Goblins from "./goblin";
import Game from "./game";

document.addEventListener("DOMContentLoaded", () => {
  const boarg = new Board(16);

  boarg.createHTMLElement(".game-container");
  const goblin = new Goblins();
  const id = setInterval(goblin.createGoblin, 1000);
  const game = new Game(".game-container", id);
  game.removeGoblin();
});
