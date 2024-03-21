import { dateLevels } from '../levels/dateLevel';
const css = require('../../style/styles.css');
import { setLevelNumber } from '../utilts/utilts';
import game from './game';
import viewerHtml from '../html-viewer/html-viewer';

class GameMenu {
  public createListLevel = (): void => {
    const contentMenu: HTMLElement | null = document.querySelector('.content-menu');
    (contentMenu as HTMLElement).innerHTML = '';
    for (let i = 0; i < dateLevels.length; i++) {
      let itemContentMenu: HTMLLIElement = document.createElement('li');
      itemContentMenu.classList.add('item-content-menu');
      itemContentMenu.innerHTML = `<i class="icon-menu">&#10004;</i>${i + 1}`;
      (contentMenu as HTMLElement).appendChild(itemContentMenu);
    }
  };
  public createLevelActive(level: number): void {
    const items = document.querySelectorAll('.item-content-menu');
    items.forEach((item) => {
      item.classList.remove('active-item');
    });

    items[level].classList.add('active-item');
    const icons = document.querySelectorAll('.icon-menu');
    icons.forEach((icon) => {
      icon.classList.remove('active-icon');
    });
    icons[level].classList.add('active-icon');
  }
public  addListenerMenu(){
    const items = document.querySelectorAll('.item-content-menu');
items.forEach((item, index) => {
  item.addEventListener('click', () => {
setLevelNumber(index);
gameMenu.createLevelActive(index);
game.showContentTask(index);
viewerHtml.showHtmlMarkup(index);
viewerHtml.addListener();
});
}); 
  }

  }


const gameMenu = new GameMenu();
export default gameMenu;
