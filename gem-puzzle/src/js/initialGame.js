// function createElement(tag, className) {
//   return window.document.createElement(tag).classList.add(className);
// }

const html = `
  <div class="container">
  <div class="puzzle">
    <div class="puzzle__controls">
      <button class="puzzle__btn" id="start">Shuffle and start</button>
      <button class="puzzle__btn" id="stop">Stop</button>
      <button class="puzzle__btn" id="save">Save</button>
      <button class="puzzle__btn" id="Results">Results</button>
    </div>

    <div class="puzzle__info">
      <div>Moves: <span class="puzzle__moves">0</span></div>
      <div class="puzzle__group"><span>Time:</span> <span class="puzzle__min">0</span>:<span class="puzzle__sec">0</span></div>
    </div>

    <div class="game">
      <ul class="game__list game__list-4x4"></ul>
    </div>

    <div class="game__frame">Frame size: <span class="game__frame-text">4x4</span></div>

    <div class="game__size">
      Other sizes:
      <ul class="game__size-list">
        <li class="game__size-item" data-size="9">3x3</li>
        <li class="game__size-item" data-size="16">4x4</li>
        <li class="game__size-item" data-size="25">5x5</li>
        <li class="game__size-item" data-size="36">6x6</li>
        <li class="game__size-item" data-size="49">7x7</li>
        <li class="game__size-item" data-size="64">8x8</li>
      </ul>
    </div>
  </div>
</div>
`;

export default function initialGame() {
  window.document.body.insertAdjacentHTML('beforeend', html);
}
