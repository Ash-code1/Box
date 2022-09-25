var box;



function setup() {
  createCanvas(600, 400);

  box = createSprite(300, 200, 50, 50);
}

function draw() {
  background("yellow");


  if(keyDown(UP_ARROW)){
    box.y = box.y - 5;
  }



  drawSprites();
}