const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, box1, box2, box3, box4, box5, box6, box7, box8, box9, slingshot,polygon;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,400,300,30);
	box1 = new Box(380,390);
	box2 = new Box(440,380);
	box3 = new Box(500,380);
	box4 = new Box(560,380);
	box5 = new Box(620,380);
	box6 = new Box(440,320);
	box7 = new Box(500,320);
	box8 = new Box(560,320);
	box9 = new Box(500,260);
	polygon = new Polygon(100,100,20)
	slingshot = new SlingShot(polygon.body,{x:100,y:200});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  polygon.display();
  slingshot.display();
 
}


function mouseDragged(){

	Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY});
	
}
	
	
function mouseReleased(){
	slingshot.fly();
	
}

function keyPressed(){
	if(keyCode === 32){
		slingshot.attatch(polygon.body);
	}
}