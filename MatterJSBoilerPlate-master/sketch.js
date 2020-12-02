var side1,side2, side3;
var ball;
var ballImage, dustbinImage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	ballImage = loadImage("paper.png");
	dustbinImage = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground=Bodies.rectangle(800,650,1600,20,{isStatic:true});
	World.add(world,ground);
	side1=Bodies.rectangle(1250,600,20,100,{isStatic:true});
	World.add(world,side1);
	side2=Bodies.rectangle(1350,600,20,100,{isStatic:true});
	World.add(world,side2);
	side3=Bodies.rectangle(1300,550,200,20,{isStatic:true});
	World.add(world,side3);
	var option = {
		isStatic : false,
		restitution: 0.3,
		friction: 0.5,
		density:1.2
	}
	ball=Bodies.circle(200,600, 40, option);
	World.add(world,ball);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  fill("brown");
  rect(ground.position.x,ground.position.y,1600,20);
  rect(side1.position.x,side1.position.y,20,100);
  rect(side2.position.x,side2.position.y,20,100);
  rect(side3.position.x,side3.position.y,200,20)
  
  imageMode(CENTER);
  image(ballImage, ball.position.x,ball.position.y,60,60);
  image(dustbinImage, side3.position.x,side3.position.y,200,200);
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball, ball.position,{x:85, y:-85})
	}
}



