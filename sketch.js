let inputText;
let button;
let bgColor = '#001f3f';

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('canvasWrapper');

  inputText = select('#textInput');
  button = select('#myButton');
  button.mousePressed(randomBlue);
}

function draw() {
  background(bgColor);

  textAlign(CENTER, CENTER);
  fill(255);
  textSize(32);
  text(inputText.value(), width / 2, height / 2);
}

function randomBlue() {
  bgColor = color(random(100, 255), random(100, 255), 255);

  let n = 5;
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);

  for (let i = 0; i < n; i++) {
    let x = random(width);
    let y = random(height);
    text(inputText.value(), x, y);
  }
}
