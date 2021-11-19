class CStroke {
  constructor(x,y,r,g,b, weight){
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
    this.weight = weight;
  }
  
  tick() {
  for (var i = 0; i < speed; i++)
  {
    // randomly move line
    var randomValue = random();
    if(randomValue < 0.25){
      this.x--;
    }
    else if(randomValue < 0.5){
      this.x++;
    }
    else if(randomValue < 0.75){
      this.y--;
    }
    else{
      this.y++;
    }
    
    // wrap around left and right sides
    if(this.x < 0){
      this.x = width;
    }
    else if(this.x > width){
      this.x = 0;
    }
    
    // wrap around top and bottom sides
    if(this.y < 0){
      this.y = height;
    }
    else if(this.y > height){
      this.y = 0;
    }
    
    // randomly change color
    this.r += random(-1, 1);
    this.g += random(-1, 1);
    this.b += random(-1, 1);
    
    // don't let values go outside 0-255 range
    this.r = constrain(this.r, 0, 255);
    this.g = constrain(this.g, 0, 255);
    this.b = constrain(this.b, 0, 255);
    
    stroke(this.r, this.g, this.b, 255);
    strokeWeight(this.weight);
    
    point(this.x, this.y);
  }
  }
}

var speed;
var nStrokes;
let strokes = [null, null, null,null,null];

function setup() {
  createCanvas(300, 300);
  
  nStrokes = 5;
  
  for (var i = 0; i < nStrokes; ++i)
  {
    var x = random(0, width);
    var y = random(0, height);
    
    var r = random(0, 255);
    var g = random(0, 255);
    var b = random(0, 255);
    
    strokes[i] = new CStroke(x,y,r,g,b,(i+1)*4);
  }
  
  background(100);
  
  speed = 100;
  
  for (var i = 0; i < 500; ++i)
  {
  strokes.forEach(function(item, index, array) {
    item.tick();
  });
  }
    
}

function draw() {
  strokes.forEach(function(item, index, array) {
    item.tick();
  });
}
