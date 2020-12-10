const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dust1,dust2,dust3;

function preload()
{
	
}

function setup() {
	createCanvas(800,800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
 
  dust1 = createSprite(700,400,20,80);
  dust1.shapeColor = color("white");

  dust2 = createSprite(500,400,20,80);
  dust2.shapeColor = color("white");

  dust3 = createSprite(600,430,180,20);
  dust3.shapeColor = color("white");

  ground = createSprite(400,440,800,8);
  ground.shapeColor = color("yellow");

   circle(56,410,60);

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(circle.body,circle.body.position,{x:85,y:-85});
  }
}