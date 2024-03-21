import { dateLevels } from '../levels/dateLevel';

const componentGame = {
  GameComponents : document.querySelector('.task'),
  markup: document.querySelector('.content-task'),
};

export class Game {
  public componentGame;

  constructor() {
    this.componentGame = componentGame;
  }
  public showContentTask(level: number): void {
    const levelActive = dateLevels[level];
    const gameboard = document.querySelector('.gameboard');
    (gameboard as HTMLElement).innerHTML = levelActive.markup;
  }

  static highlightElement(elementId: string | null): void {
    if (!elementId) {
      return;
    } else {
      document.getElementById(elementId)?.classList.add('highlight');
    }
  }

  static offHighlightElement(elementId: string | null): void {
    if (!elementId) return;
    document.getElementById(elementId)?.classList.remove('highlight');
  }

}

const game = new Game();
export default game;
