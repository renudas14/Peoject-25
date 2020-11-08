const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin, Paper,ground;	
var engine,world;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	dustbin=new Dustbin(1200,650);
	Paper=new paper(200,450,60);
	ground=new Ground(width/2,670,width,20);

	Engine.run(engine);
}

function draw() {
  background("red");
 
  dustbin.display();
  Paper.display();
  ground.display();
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85});
  	}
}