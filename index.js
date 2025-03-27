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
  img.style.border = `.4rem solid ${color}`;
  images.push(img);
}

function spin() {
  aud.pause();
  aud.currentTime = 0;

  const randIndex = (startIndex + Math.floor(Math.random() * n))%n;
  let i = startIndex;
  const intervalId = setInterval(function() {

    if (i%n === randIndex) {
      clearInterval(intervalId);
      aud.play();
    }

    const entry = slotMachine.querySelector("img");
    entry.replaceWith(images[i % n]);
    i++;

  }, 100);
}

function init() {
  startIndex = Math.floor(Math.random() * n);
  const image = images[startIndex];
  slotMachine.append(image);
}

init();
