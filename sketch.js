var canvasWidth = 1525;
var canvasHeight = 690;
var count = 0;
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectMode(CENTER);
}

function draw() {
  background(1, 186, 240);
  var x = canvasWidth / 2 + count;
  var y = canvasHeight / 2;
  fill(237, 34, 93);
  noStroke();
  ellipse(x, y, 200, 200);

  fill(255);
  rect(x, y, 150, 30);
  count = count +3;
}
