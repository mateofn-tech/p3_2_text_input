let textInput;
let liveText = "";

function setup() {
  createCanvas(400, 400);
  
  // Campo de texto único
  textInput = createInput("");
  textInput.attribute("placeholder", "escribe aquí");
  textInput.input(updateText);
}

function draw() {
  background(220);
  
  textSize(20);
  fill(0);
  textAlign(CENTER, CENTER);
  text(liveText, width / 2, height / 2);
}

// Se ejecuta mientras escribes
function updateText() {
  liveText = textInput.value();
}
