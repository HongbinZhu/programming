var diam1=0;

function setup() {
  createCanvas(500, 500);
  background("#003380");
}

function draw() {
  
  fill("#add8e6")
  stroke("#ffff00");
  strokeWeight(5);
  ellipse(50,100,diam1,diam1);
  ellipse(150,50,diam1,diam1);
  fill("#ff0000");
  ellipse(200,200,20,20);
  line(random(width),random(height),20,20)
  textSize(20);
  textFont("Georgia");
  textStyle(ITALIC);
  textAlign(CENTER);
  text("HongBin",50,40);
  console.log(diam1);
}

function mousePressed(){
  if(diam1>50){
    diam1=0;
  }else{
  diam1=diam1+5;
}
}