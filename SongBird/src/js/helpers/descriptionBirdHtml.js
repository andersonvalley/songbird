export default function descriptionBirdHtml({
  name, species, audio, image, description,
}) {
  return `
    <div class="description__inner">
            <div class="audio__cover">
              <img class="audio__cover_img" 
                   width="300"
                   src="${image}"
                   alt="bird">
            </div>

            <div class="audio__track track">
              <p class="track__title">${name}</p>
              <p class="track__title_latin">${species}</p>

              <div class="track__controls">
                <audio id="track__description"
                       src="${audio}"></audio>

                <div class="track__inner">
                  <button class="btn-reset track__play">
                    <img src="img/play.svg" alt="play or stop button">
                  </button>

                  <div class="track__duration">
                    <input class="track__line" value="0" min="0" max="100" step="1" type="range">
                    <div class="track__line_back" style="width: 0"></div>
                    <div class="track__time">
                      <span class="track__time-current">00:00</span>
                      <span class="track__time-max">00:00</span>
                    </div>
                  </div>

                  <button class="track__volume btn-reset">
                    <img src="img/volume.svg" alt="volume">
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p class="description__text">
            ${description}
          </p>
  `;
}
