//I am still out of town and having lots of internet issues. I get back Sunday evening. I will try to catch up as fast as I can. 

let x = 0;
let CanvasHeight = 1000;
let CanvasWidth = 1000;

function setup() {
  createCanvas(CanvasWidth, CanvasHeight);
}

function draw() {
  background(100);
  if (x == CanvasWidth) {
    x = 0;
  }
  rect(frameCount*.2,100,200,300,);
  rect(200,x++,200,300,);
}
