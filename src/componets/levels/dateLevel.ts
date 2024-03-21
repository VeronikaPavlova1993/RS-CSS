import { ILevel } from './interfaceLevels';

export const dateLevels: ILevel[] = [
  {
    task: 'Select the square',
    answer: 'square',
    htmlViewerLayout: `
    <pre class="html-table">&lt;div class="table"&gt;</pre>
      <pre id="square-lev1-1">  &lt;square /&gt;</pre>
      <pre id="square-lev1-2">  &lt;square /&gt;</pre>
      <pre>&lt;/div&gt;</pre>`,
    markup: `<h3 class="task">Select the square</h3>
    <div class="board">
    <div class="table-wrapper" style="opacity: 1; transform: rotateX(20deg); width: 260px">
    <div class="table-surface"></div>
    <div class="table">
      <div class="square-lev1-1" style="transform-origin: bottom; animation: strobeStart .5s ease-out, strobe 1s infinite; animation-delay: 0s, .5s; width: 80px; height: 80px; background: #b7c256fa"></div>
      <div class="square-lev1-2" style="transform-origin: bottom; animation: strobeStart .5s ease-out, strobe 1s infinite; animation-delay: 0s, .5s;  width: 80px; height: 80px; background: #b7c256fa"></div>
    </div>
  </div>
  <div class="table-egle" style="opacity: 1; width: 260px">
    <div class="table-leg"></div>
    <div class="table-leg"></div>
  </div>
  </div>`,
  },
  {
    task: 'Select the pink circle',
    answer: 'circle',
    htmlViewerLayout: `
    <pre>&lt;div class="table"&gt;</pre>
    <pre id="circle-lev2-1">  &lt;circle /&gt;</pre>
    <pre id="square-lev2-2">  &lt;square /&gt;</pre>
    <pre id="circle-lev2-3">  &lt;circle /&gt;</pre>
    <pre>&lt;/div&gt;</pre>`,
    markup: `<h3 class="task">Select the circle</h3>
    <div class="board">
    <div class="table-wrapper" style="opacity: 1; transform: rotateX(20deg); width: 360px">
    <div class="table-surface"></div>
    <div class="table">
      <div class="circle-lev2-1" style="transform-origin: bottom; animation: strobeStart .5s ease-out, strobe 1s infinite; animation-delay: 0s, .5s; width: 80px; height: 80px; border-radius: 60px; background: #e034a7"></div>
      <div class="square-lev2-2" style="width: 80px; height: 80px; background: #b7c256fa"></div>
      <div class="circle-lev2-3" style="transform-origin: bottom; animation: strobeStart .5s ease-out, strobe 1s infinite; animation-delay: 0s, .5s; width: 80px; height: 80px; border-radius: 60px; background: #e034a7"></div>
    </div>
  </div>
  <div class="table-egle" style="opacity: 1; width: 360px">
    <div class="table-leg"></div>
    <div class="table-leg"></div>
  </div>
  </div>`,
  },
  {
    task: 'Select the yellow circle',
    answer: '#yellow',
    htmlViewerLayout: `
    <pre>&lt;div class="table"&gt;</pre>
    <pre id="circle-lev3-1">  &lt;circle id="yellow" /&gt;</pre>
    <pre id="rectangle-lev3-2">  &lt;rectangle /&gt;</pre>
    <pre id="circle-lev3-3">  &lt;circle /&gt;</pre>
    <pre>&lt;/div&gt;</pre>`,
    markup: `<h3 class="task">Select the yellow circle</h3>
<div class="board">
<div class="table-wrapper" style="opacity: 1; transform: rotateX(20deg); width: 380px">
<div class="table-surface"></div>
<div class="table">
  <div class="circle-lev3-1" style="transform-origin: bottom; animation: strobeStart .5s ease-out, strobe 1s infinite; animation-delay: 0s, .5s; width: 80px; height: 80px; border-radius: 60px; background: #eef77d"></div>
  <div class="rectangle-lev3-2" style="width: 120px; height: 80px; background: #b7c256fa"></div>
  <div class="circle-lev3-3" style="width: 80px; height: 80px; border-radius: 60px; background: #e034a7"></div>
</div>
</div>
<div class="table-egle" style="opacity: 1; width: 380px">
<div class="table-leg"></div>
<div class="table-leg"></div>
</div>
</div>`,
  },
  {
    task: 'Select an element inside another element',
    answer: 'rectangle square',
    htmlViewerLayout: `
    <pre>&lt;div class="table"&gt;</pre>
    <pre id="circle-lev4-1">  &lt;circle /&gt;</pre>
    <pre id="rectangle-lev4-2">  &lt;rectangle&gt;</pre>
    <pre id="square-lev4-3">    &lt;square/&gt;</pre>
    <pre id="rectangle-lev4-2">  &lt;/rectangle&gt;</pre>
    <pre id="square-lev4-4">  &lt;square/&gt;</pre>
    <pre>&lt;/div&gt;</pre>`,
    markup: `<h3 class="task">Select an element inside another element</h3>
<div class="board">
<div class="table-wrapper" style="opacity: 1; transform: rotateX(20deg); width: 380px">
<div class="table-surface"></div>
<div class="table">
  <div class="circle-lev4-1" style="position: relative; width: 80px; height: 80px; border-radius: 60px; background: #eef77d"></div>
  <div class="rectangle-lev4-2" style="width: 120px; height: 80px; background: #b7c256fa; display: flex; justify-content: center;align-items: center;">
  <div class="square-lev4-3" style="transform-origin: bottom; animation: strobeStart .5s ease-out, strobe 1s infinite; animation-delay: 0s, .5s;  position: absolute; z-index: 300; width: 60px; height: 60px; background: #e034a7"></div>
  </div>
  <div class="square-lev4-4" style="width: 60px; height: 60px; background: #e034a7">
  </div>
</div>
</div>
<div class="table-egle" style="opacity: 1; width: 380px">
<div class="table-leg"></div>
<div class="table-leg"></div>
</div>
</div>`,
  },
  {
    task: 'Select elements by their class',
    answer: '.small',
    htmlViewerLayout: `
    <pre>&lt;div class="table"&gt;</pre>
    <pre id="circle-lev5-1">  &lt;circle /&gt;</pre>
    <pre id="rectangle-lev5-2">  &lt;rectangle&gt;</pre>
    <pre id="circle-lev5-3">       &lt;circle class="small" /&gt;</pre>
    <pre id="rectangle-lev5-2">  &lt;/rectangle&gt;</pre>
    <pre id="circle-lev5-4">     &lt;circle class="small" /&gt;</pre>
    <pre>&lt;/div&gt;</pre>`,
    markup: `<h3 class="task">Select elements by their class</h3>
<div class="board">
<div class="table-wrapper" style="opacity: 1; transform: rotateX(20deg); width: 380px">
<div class="table-surface"></div>
<div class="table">
  <div class="circle-lev5-1" style="width: 80px; height: 80px; border-radius: 60px; background: #eef77d"></div>
  <div class="rectangle-lev5-2" style="width: 120px; height: 80px; background: #b7c256fa; display: flex; justify-content: center;align-items: center;">
  <div class="circle-lev5-3" style="transform-origin: bottom; animation: strobeStart .5s ease-out, strobe 1s infinite; animation-delay: 0s, .5s; position: absolute; z-index: 300; width: 50px; height: 50px; border-radius: 60px; background: rgb(243, 56, 56)"></div>
  </div>
  <div class="circle-lev5-4" style="transform-origin: bottom; animation: strobeStart .5s ease-out, strobe 1s infinite; animation-delay: 0s, .5s;  width: 50px; height: 50px; border-radius: 60px; background: rgb(243, 56, 56)">
  </div>
</div>
</div>
<div class="table-egle" style="opacity: 1; width: 380px">
<div class="table-leg"></div>
<div class="table-leg"></div>
</div>
</div>`,
  },
  {
    task: 'You can do it...',
    answer: '.pink',
    htmlViewerLayout: `
    <pre>&lt;div class="table"&gt;</pre>
    <pre id="circle-lev6-1">  &lt;circle class="pink"/&gt;</pre>
    <pre id="square-lev6-2">  &lt;square /&gt;</pre>
    <pre id="circle-lev6-3">  &lt;circle /&gt;</pre>
    <pre id="circle-lev6-4">  &lt;circle class="red" /&gt;</pre>
    <pre>&lt;/div&gt;</pre>`,
    markup: `<h3 class="task">You can do it...</h3>
<div class="board">
<div class="table-wrapper" style="opacity: 1; transform: rotateX(20deg); width: 400px">
<div class="table-surface"></div>
<div class="table">
  <div class="circle-lev6-1" style="transform-origin: bottom; animation: strobeStart .5s ease-out, strobe 1s infinite; animation-delay: 0s, .5s; width: 50px; height: 50px; border-radius: 60px; background: #e034a7"></div>
  <div class="square-lev6-2" style="width: 80px; height: 80px; background: #eef77d;"></div>
  <div class="circle-lev6-3" style="width: 80px; height: 80px; border-radius: 60px; background: rgb(243, 56, 56);"></div>
  <div class="circle-lev6-4" style="width: 50px; height: 50px; border-radius: 60px; background: rgb(243, 56, 56);"></div>
</div>
</div>
<div class="table-egle" style="opacity: 1; width: 400px">
<div class="table-leg"></div>
<div class="table-leg"></div>
</div>
</div>`,
  },
  {
    task: 'Select all the things!',
    answer: '*',
    htmlViewerLayout: `
    <pre>&lt;div class="table"&gt;</pre>
    <pre id="egg-lev7-1">  &lt;egg/&gt;</pre>
    <pre id="circle-lev7-2">  &lt;circle /&gt;</pre>
    <pre id="square-lev7-3">  &lt;square /&gt;</pre>
    <pre id="circle-lev7-4">  &lt;circle class="big" /&gt;</pre>
    <pre>&lt;/div&gt;</pre>`,
    markup: `<h3 class="task">Select all the things!</h3>
<div class="board">
<div class="table-wrapper" style="opacity: 1; transform: rotateX(20deg); width: 410px">
<div class="table-surface"></div>
<div class="table">
  <div class="egg-lev7-1" style="transform-origin: bottom; animation: strobeStart .5s ease-out, strobe 1s infinite; animation-delay: 0s, .5s; width: 75px; height: 100px; background: #8734f7; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; display: block;"></div>
  <div class="circle-lev7-2" style=" transform-origin: bottom; animation: strobeStart .5s ease-out, strobe 1s infinite; animation-delay: 0s, .5s; width: 50px; height: 50px; border-radius: 60px; background: rgb(243, 56, 56);"></div>
  <div class="square-lev7-3" style="transform-origin: bottom; animation: strobeStart .5s ease-out, strobe 1s infinite; animation-delay: 0s, .5s; width: 80px; height: 80px; background: #eef77d;"></div>
  <div class="circle-lev7-4" style="transform-origin: bottom; animation: strobeStart .5s ease-out, strobe 1s infinite; animation-delay: 0s, .5s; width: 80px; height: 80px; border-radius: 60px; background:#11f3e0;"></div>
</div>
</div>
<div class="table-egle" style="opacity: 1; width: 410px">
<div class="table-leg"></div>
<div class="table-leg"></div>
</div>
</div>`,
  },
  {
    task: 'Select everything on a rectangle',
    answer: 'rectangle *',
    htmlViewerLayout: `
  <pre>&lt;div class="table"&gt;</pre>
  <pre id="rectangle-lev8-1">  &lt;rectangle&gt;</pre>
  <pre id="circle-lev8-2">    &lt;circle /&gt;</pre>
  <pre id="rectangle-lev8-1">  &lt;/rectangle&gt;</pre>
  <pre id="rectangle-lev8-3">  &lt;rectangle&gt;</pre>
  <pre id="egg-lev8-4">    &lt;egg/&gt;</pre>
  <pre id="rectangle-lev8-3">  &lt;/rectangle&gt;</pre>
  <pre id="egg-lev8-5">  &lt;egg/&gt;</pre>
  <pre id="rectangle-lev8-6">  &lt;rectangle&gt;</pre>
  <pre id="triangle-lev8-7">    &lt;triangle /&gt;</pre>
  <pre id="rectangle-lev8-6">  &lt;/rectangle&gt;</pre>
  <pre>&lt;/div&gt;</pre>`,
    markup: `<h3 class="task">Select everything on a rectangle</h3>
<div class="board">
<div class="table-wrapper" style="opacity: 1; transform: rotateX(20deg); width: 460px">
<div class="table-surface"></div>
<div class="table">
<div class="rectangle-lev8-1" style="width: 120px; height: 80px; background: #b7c256fa; display: flex; justify-content: center;align-items: center;">
<div class="circle-lev8-2" style="transform-origin: bottom; animation: strobeStart .5s ease-out, strobe 1s infinite; animation-delay: 0s, .5s; position: absolute; z-index: 300; width: 50px; height: 50px; border-radius: 60px; background: rgb(243, 56, 56);"></div>
</div>
<div class="rectangle-lev8-3" style="width: 120px; height: 80px; background: #b7c256fa; display: flex; justify-content: center;align-items: center;">
<div class="egg-lev8-4" style="transform-origin: bottom; animation: strobeStart .5s ease-out, strobe 1s infinite; animation-delay: 0s, .5s; position: absolute; z-index: 300; width: 50px; height: 75px; background: #8734f7; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; display: block;"></div>
</div>
<div class="egg-lev8-5" style="width: 50px; height: 75px; background: #8734f7; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; display: block;"></div>
<div class="rectangle-lev8-6" style="width: 120px; height: 80px; background: #11f3e0; display: flex; justify-content: center;align-items: center;">
<div class="triangle-lev8-7" style="transform-origin: bottom; animation: strobeStart .5s ease-out, strobe 1s infinite; animation-delay: 0s, .5s; position: absolute; z-index: 300; width: 0; height: 0; border-bottom: 70px solid #fcf921; border-left: 35px solid transparent; border-right: 35px solid transparent;"></div>
</div>
</div>
</div>
<div class="table-egle" style="opacity: 1; width: 460px">
<div class="table-leg"></div>
<div class="table-leg"></div>
</div>
</div>`,
  },
  {
    task: 'Select direct children of an element',
    answer: 'rectangle > circle',
    htmlViewerLayout: `
    <pre>&lt;div class="table"&gt;</pre>
    <pre id="rectangle-lev9-1">  &lt;rectangle&gt;</pre>
    <pre id="circle-lev9-2">    &lt;circle  class="small"/&gt;</pre>
    <pre id="rectangle-lev9-1">  &lt;/rectangle&gt;</pre>
    <pre id="rectangle-lev9-3">  &lt;rectangle&gt;</pre>
    <pre id="egg-lev9-4">    &lt;egg/&gt;</pre>
    <pre id="rectangle-lev9-3">  &lt;/rectangle&gt;</pre>
    <pre id="rectangle-lev9-5">  &lt;rectangle&gt;</pre>
    <pre id="circle-lev9-6">    &lt;circle  id="yellow"/&gt;</pre>
    <pre id="rectangle-lev9-5">  &lt;/rectangle&gt;</pre>
    <pre>&lt;/div&gt;</pre>`,
    markup: `<h3 class="task">Select direct children of an element</h3>
<div class="board">
<div class="table-wrapper" style="opacity: 1; transform: rotateX(20deg); width: 460px">
<div class="table-surface"></div>
<div class="table">
<div class="rectangle-lev9-1" style="width: 120px; height: 80px; background: #b7c256fa; display: flex; justify-content: center;align-items: center;">
<div class="circle-lev9-2" style="transform-origin: bottom; animation: strobeStart .5s ease-out, strobe 1s infinite; animation-delay: 0s, .5s; position: absolute; z-index: 300; width: 50px; height: 50px; border-radius: 60px; background: rgb(243, 56, 56);"></div>
</div>
<div class="rectangle-lev9-3" style="width: 120px; height: 80px; background: #b7c256fa; display: flex; justify-content: center;align-items: center;">
<div class="egg-lev9-4" style="position: absolute; z-index: 300; width: 50px; height: 75px; background: #8734f7; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; display: block;"></div>
</div>
<div class="rectangle-lev9-5" style="width: 120px; height: 80px; background: #11f3e0; display: flex; justify-content: center;align-items: center;">
<div class="circle-lev9-6" style="transform-origin: bottom; animation: strobeStart .5s ease-out, strobe 1s infinite; animation-delay: 0s, .5s; position: absolute; z-index: 300; width: 50px; height: 50px; border-radius: 60px; background: #fcf921;"></div>
</div>
</div>
</div>
<div class="table-egle" style="opacity: 1; width: 460px">
<div class="table-leg"></div>
<div class="table-leg"></div>
</div>
</div>`,
  },
  {
    task: 'Select the reed circle and next element',
    answer: '.red + egg',
    htmlViewerLayout: `
    <pre>&lt;div class="table"&gt;</pre>
    <pre id="circle-lev10-1">  &lt;circle class="red" /&gt;</pre>
    <pre id="egg-lev10-2">  &lt;egg /&gt;</pre>
    <pre id="rectangle-lev10-3">  &lt;rectangle&gt;</pre>
    <pre id="egg-lev10-4">    &lt;egg/&gt;</pre>
    <pre id="rectangle-lev10-3">  &lt;/rectangle&gt;</pre>
    <pre id="circle-lev10-5">  &lt;circle  id="yellow"/&gt;</pre>
    <pre>&lt;/div&gt;</pre>`,
    markup: `<h3 class="task">Select the reed circle and next element</h3>
<div class="board">
<div class="table-wrapper" style="opacity: 1; transform: rotateX(20deg); width: 410px">
<div class="table-surface"></div>
<div class="table">
  <div class="circle-lev10-1" style="transform-origin: bottom; animation: strobeStart .5s ease-out, strobe 1s infinite; animation-delay: 0s, .5s; width: 50px; height: 50px; border-radius: 60px; background: rgb(243, 56, 56);"></div>
  <div class="egg-lev10-2" style="transform-origin: bottom; animation: strobeStart .5s ease-out, strobe 1s infinite; animation-delay: 0s, .5s; width: 50px; height: 75px; background: #8734f7; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; display: block;"></div>
  <div class="rectangle-lev10-3" style="width: 120px; height: 80px; background: #b7c256fa; display: flex; justify-content: center;align-items: center;">
  <div class="egg-lev10-4" style="position: absolute; z-index: 300; width: 50px; height: 75px; background: #8734f7; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; display: block;"></div>
  </div>
  <div class="circle-lev10-5" style="width: 50px; height: 50px; border-radius: 60px; background: #fcf921;"></div>
</div>
<div class="table-egle" style="opacity: 1; width: 410px">
  <div class="table-leg"></div>
  <div class="table-leg"></div>
</div>
</div>`,
  },
];
