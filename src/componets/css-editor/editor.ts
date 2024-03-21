import { dateLevels } from '../levels/dateLevel';
import gameMenu from '../game/nav';
import game from '../game/game';
import viewerHtml from '../html-viewer/html-viewer';

class EditorCss {
  public editor: HTMLFormElement;
  constructor() {
    this.editor = document.querySelector('.css-input') as HTMLFormElement;
  }

  public winMessage = (): void => {
    const titleWin: HTMLElement | null = document.querySelector('.task');
    titleWin?.setAttribute('id', 'win-message');
    (titleWin as HTMLElement).innerHTML = 'Congratulations! You did it!';
  };

  public nextLevel(levelActive: number): number {
    if (+levelActive < dateLevels.length - 1) levelActive = +levelActive + 1;
    return levelActive;
  }

  public checkAnswer(levelActive: number): number {
    let answer: string | null = this.editor.value;
    let correctAnswer = dateLevels[levelActive].answer;

    if (answer !== correctAnswer) {
      const code: HTMLDivElement | null = document.querySelector('.code');
      (code as HTMLDivElement).classList.add('twitch');
      this.editor.classList.add('twitch-editor');
      (code as HTMLDivElement).addEventListener('animationend', () => {
        (code as HTMLDivElement).classList.remove('twitch');
        this.editor.classList.remove('twitch-editor');
        this.editor.value = '';
      });
    } else {
      if (+levelActive === dateLevels.length - 1) {
        this.winMessage();
        return levelActive;
      }
      levelActive = this.nextLevel(levelActive);
      gameMenu.createLevelActive(levelActive);
      game.showContentTask(levelActive);
      viewerHtml.showHtmlMarkup(levelActive);
      viewerHtml.addListener();
      this.editor.value = '';
      this.editor.classList.add('right');
      this.editor.addEventListener('transitionend', () => {
        this.editor.classList.remove('right');
      });
      const icons = document.querySelectorAll('.icon-menu');
      const items = document.querySelectorAll('.item-content-menu');
      items[levelActive - 1].classList.add('done');
      icons[levelActive - 1].classList.add('done');
    }
    return levelActive;
  }

  public showAnswer(levelActive: number): void {
    const answer = dateLevels[levelActive].answer;
    let i = 0;
    let inputCode = '';
    const cssEditor = this.editor;
    cssEditor.classList.add('right');

    function writingAnswer(speed = 100) {
      if (i < answer.length) {
        inputCode += answer.charAt(i);
        cssEditor.value = inputCode;
        i += 1;
        setTimeout(writingAnswer, speed);
        cssEditor.classList.add('right');
        cssEditor.addEventListener('transitionend', () => {
          cssEditor.classList.remove('right');
        });
      }
    }
    writingAnswer(30);
  }

  public init(level: number) {
    gameMenu.createLevelActive(level);
    game.showContentTask(level);
    viewerHtml.showHtmlMarkup(level);
  }
}

const editorCss = new EditorCss();
export default editorCss;
