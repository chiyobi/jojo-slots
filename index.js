const slotMachine = document.getElementById("slot-machine");
const aud = document.querySelector("audio");

const yellow = '#f2bf30';
const blue = '#3d64d9';
const red = '#eb4473';
const colors = [yellow, red, blue];
let entry;
let colorIndex = 0;
let color;
let img;
const images = [];
const n = 48;
let startIndex = 0;
for (let i = 0; i < n; i++) {
  img = new Image();
  img.src = `./public/images/${i % n}.png`;
  img.alt = `Jojo pose ${i % n}`;
  color = colors[colorIndex];
  
  colorIndex = (colorIndex + 1) % colors.length;
  img.style.border = `.4em solid ${color}`;
  images.push(img);
}

const zoomEl = document.querySelector('#zoom');
const zoomImgContainerEl = document.querySelector('#zoom .img-container');
const closeZoom = () => {
  zoomEl.style.height = '0px';
  zoomImgContainerEl.innerHTML = null;
}
const zoom = (el) => {
  zoomImgContainerEl.append(el);
  zoomEl.style.height = '100vh';
}

const recentContainer = document.querySelector('#recent-images');
recentContainer.addEventListener('click', function(e) {
  const el = e.target;
  zoom(el.cloneNode());
})

const seen = new Set();
function spin() {
  aud.pause();
  aud.currentTime = 0;

  const randIndex = (startIndex + Math.floor(Math.random() * n))%n;
  let i = startIndex;
  let selectedImage = null;
  
  const intervalId = setInterval(function() {
    let currentIndex = i%n;

    if (currentIndex === randIndex) {
      aud.play();
      
      selectedImage = images[currentIndex].cloneNode();
      if (!seen.has(currentIndex)) {
        seen.add(currentIndex);
        recentContainer.append(selectedImage);
      }
      
      clearInterval(intervalId);
    }

    const entry = slotMachine.querySelector("img");
    entry.replaceWith(images[currentIndex]);
    i++;
    
  }, 100);

}

function init() {
  startIndex = Math.floor(Math.random() * n);
  const image = images[startIndex];
  slotMachine.append(image);
}

init();
