
let places = ["Accra", "Cape Coast", "Kumasi", "Tamale"];

let experiences = [
  "the ocean whispers",
  "the sun shines brightly",
  "the wind carries stories",
  "the drums echo softly"
];

let memories = [
  "memories of home",
  "stories of our ancestors",
  "the beauty of Ghana",
  "a feeling of belonging"
];

let sentence = "";

function setup() {
  let canvas = createCanvas(700, 400);
  canvas.parent("sketch-container");

  textAlign(CENTER, CENTER);
  generateMemory();
}

function draw() {
  background(18, 59, 42);

  // Gently pulsing golden sun
  let sunSize = 42 + sin(frameCount * 0.025) * 5;

  noStroke();
  fill(217, 164, 65, 65);
  circle(350, 65, sunSize + 20);

  fill(217, 164, 65);
  circle(350, 65, sunSize);


  // Golden decorative border
  noFill();
  stroke(217, 164, 65);
  strokeWeight(3);
  rect(20, 20, 660, 360);


  // Ghanaian-inspired diamond patterns
  for (let x = 70; x < 700; x += 80) {
    drawDiamond(x, 65, 12);
    drawDiamond(x, 335, 12);
  }


  // Artwork title
  fill(217, 164, 65);
  textSize(32);
  textStyle(BOLD);
  text("Memories of Ghana", 350, 125);

  // Generated poetic sentence
  fill(247, 240, 220);
  textSize(23);
  textStyle(NORMAL);
  text(sentence, 90, 170, 520, 100);

  // Instruction
  fill(217, 164, 65);
  textSize(15);
  text("Click to discover another memory", 350, 305);
}

function mousePressed() {
  if (
    mouseX >= 0 && mouseX <= width &&
    mouseY >= 0 && mouseY <= height
  ) {
    generateMemory();
  }
}

function generateMemory() {
  let place = random(places);
  let experience = random(experiences);
  let memory = random(memories);

  sentence = "In " + place + ", " +
             experience + ", bringing " +
             memory + ".";
}

function drawDiamond(x, y, size) {
  noFill();
  stroke(217, 164, 65);
  strokeWeight(2);

  beginShape();
  vertex(x, y - size);
  vertex(x + size, y);
  vertex(x, y + size);
  vertex(x - size, y);
  endShape(CLOSE);
}
