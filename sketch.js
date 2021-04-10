
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
    stone = new Stone(550,300,80,65);
	rubber = new Rubber(500,350,100);
  s = new Sand(300,500,25);
  a = new Sand(350,500,25);
  n = new Sand(200,500,25);
  d = new Sand(150,500,25);
  j = new Sand(320,500,25);
 iron = new Iron(400,400,70,70);
	Engine.run(engine);
  
}


function draw() {
  background(255);
  Engine.update(engine); 
  ground.display();
  hammer.display();
  stone.display();
 rubber.display();
 s.display();
 a.display();
 n.display();
 d.display();
 j.display();
 iron.display();
  drawSprites();
 
}



