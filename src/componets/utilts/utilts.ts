import editorCss from '../css-editor/editor';

export function getLevelNumber() {
  return localStorage.getItem('level') || 0;
}

export function setLevelNumber(value: number) {
  if (Number.isInteger(value)) localStorage.setItem('level', `${value}`);
}

(document.querySelector('.button-css-editor') as HTMLElement).addEventListener('click', () => {
  checkAnswer(+getLevelNumber());
});

function checkAnswer(levelActive: number) {
  setLevelNumber(editorCss.checkAnswer(levelActive));
}

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    checkAnswer(+getLevelNumber());
  }
});

(document.querySelector('.button-css-help') as HTMLElement).addEventListener('click', () => {
  editorCss.showAnswer(+getLevelNumber());
});

(document.querySelector('.reset-button') as HTMLElement).addEventListener('click', () => {
  const icons = document.querySelectorAll('.icon-menu');
  icons.forEach((icon) => {
    icon.classList.remove('done');
  });
  const items = document.querySelectorAll('.item-content-menu');
  items.forEach((item) => {
    item.classList.remove('done');
  });
});
