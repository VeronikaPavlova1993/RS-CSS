import { dateLevels } from '../levels/dateLevel';
import { Game } from '../game/game';

class ViewerHtml {
  markup: HTMLElement | null = document.querySelector('.htmlViewerLayout');
  
  public showHtmlMarkup(level: number): void {
    const levelActive = dateLevels[level];
    const htmlViewer: HTMLElement | null = document.querySelector('.htmlViewerLayout');
    (htmlViewer as HTMLElement).innerHTML = levelActive.htmlViewerLayout;
  }

  public addListener(): void {
    [...(this.markup as HTMLElement).children].forEach((element) => {
      element.addEventListener('mouseenter', (e) => {
        Game.highlightElement((e.target as HTMLElement).getAttribute('id'));
        let elementGame = document.querySelector(`.${(e.target as HTMLElement).getAttribute('id')}`);
        elementGame?.setAttribute('id', 'highlight');
      });

      element.addEventListener('mouseleave', (e) => {
        Game.offHighlightElement((e.target as HTMLElement).getAttribute('id'));
        let elementGame = document.querySelector(`.${(e.target as HTMLElement).getAttribute('id')}`);
        elementGame?.setAttribute('id', 'off-highlight');
      });
    });
  }
}

const viewerHtml = new ViewerHtml();
export default viewerHtml;
