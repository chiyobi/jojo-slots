const slotMachine = document.getElementById("slot-machine");
const lim = 10
let entry;
const yellow = '#fcba03';
const blue = '#0040ff';
const red = '#ff0048';
const colors = [yellow, red, blue];
let colorIndex = 0;
for (let i = 1; i <= lim; i++) {
  const img = new Image();
  img.src = `./public/images/${i}.png`;
  img.alt = `Jojo pose ${i}`;
  entry = document.createElement("li");
  entry.classList.add("entry");

  const color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;

  entry.style.border = `.5rem solid ${color}`;
  entry.append(img);
  slotMachine.append(entry);
}

function spin() {
  slotMachine.style.transform = `translateX(-100px)`; 
}