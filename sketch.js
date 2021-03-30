
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground();
    hammer = new Hammer(345,600,50,50);
    stone = new Stone(550,300,50,60);
	rubber = new Rubber(500,350,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine); 
  ground.display();
  hammer.display();
  stone.display();
 rubber.display();
  drawSprites();
 
}



