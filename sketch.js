
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var ground1, tree1, stone1;
var boy, boyImage;
var Joint;

function preload()
{
	boyImage = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(400,690,800,10);
	tree1 = new tree(700,675,50,50);
	//tree1.scale = 1;
	boy = createSprite(200,645,50,50);
	boy.addImage(boyImage);
	boy.scale = 0.1;

	Joint = new joint(stone1.body,{x:400,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground1.display();
  tree1.display();
  boy.display();
  drawSprites();
  Joint.display();
 
}

/*function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    stone1.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.body.setPosition();
		Joint.attach(stone1);
	}
}

function detectcollision(){
	
}*/

