class Star {
  reset() {
    this.x = int(random(10,width) - halfWidth);
    this.y = int(random(10,height) - halfHeight);
    this.z = random(0.1,1.5);
    this.ox = this.x * this.z;
    this.oy = this.y * this.z;
    this.h = random(0,255);
    this.s = random(4,40);
    this.b = (this.z / 1.4 + 0.1) * 255;
  }
  
  constructor() {
    this.reset();
  }
}

function CopyStar(star) {
  var newStar = new Star();
  newStar.x = star.x;
  newStar.y = star.y;
  newStar.z = star.z;
  newStar.h = star.h;
  newStar.s = star.s;
  newStar.b = star.b;
  
  return newStar;
}

var nStars = 130;
var stars = [];
var halfWidth;
var halfHeight;

function setup() {
  createCanvas(500,300);
  halfWidth = width/2;
  halfHeight = height/2;
  for (let i = 0; i < nStars; ++i)
  {
    stars.push(new Star());
  }
  
  colorMode(HSB, 100);
}

function draw() {
  colorMode(HSB, 100);
  let h = random(0,255);
  let s = random(10,20);
  let b = random(0,25);
  background(h,s,b);
  translate(halfWidth + random(-3,3), halfHeight + random(-3,3));
  for (let i = 0; i < nStars; ++i)
  {
    stars[i].z *= 1 + stars[i].z/27;
    let sx = stars[i].x * stars[i].z;
    let sy = stars[i].y * stars[i].z;
    stroke(stars[i].h, stars[i].s, stars[i].b);
    strokeWeight(1);
    line(stars[i].ox, stars[i].oy, sx, sy);
    strokeWeight(min(stars[i].z * 2.5, 45));
    this.b = min((stars[i].z + 1) * this.b, 255);
    point(sx,sy);
    if (sx < -halfWidth || sx > halfWidth || sy < -halfHeight || sy > halfHeight)
    {
      stars[i].reset();
    }
  }
}
