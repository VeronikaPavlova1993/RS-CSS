import game from '../game/game';
import viewerHtml from '../html-viewer/html-viewer';
import gameMenu from '../game/nav';
import { getLevelNumber } from '../utilts/utilts';

class App {
  init() {
    gameMenu.createListLevel();
    gameMenu.createLevelActive(+getLevelNumber());
    game.showContentTask(+getLevelNumber());
    viewerHtml.showHtmlMarkup(+getLevelNumber());
    viewerHtml.addListener();
    gameMenu.addListenerMenu();
  }
}

const app = new App();
export default app;
