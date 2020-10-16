const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world;
var ground1;
var treearea;
var stone1;
var BOY;
var mango1,mango2,mango3,mango4,mango5;
var connect;
var launchingForce = 100;

function setup() {

	  createCanvas(1200, 600);

	  engine = Engine.create();
    world = engine.world;
  
    ground1 = new Ground(600,580,1200,240);
    treearea = new Tree(980,500,400,550);
    stone1 = new STONE(150,350,60,40); 
    BOY =new BoyClass(200,450,150,400);

    mango1 = new MangoClass(950,200,50,70);
    mango2 = new MangoClass(1100,170,50,70);
    mango3 = new MangoClass(1040,190,50,70);
    mango4 = new MangoClass(1080,80,50,70);
    mango5 = new MangoClass(960,100,50,70);
    connect = new Connector(stone1.body,{x:150,y:350});

  	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);

  ground1.display();
  treearea.display();
  BOY.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  connect.display();

  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  connect.fly(); 
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, {x:235, y:420}) 
	  connect.attach(stone1.body);
	}
  }

  function detectollision(stone1,mango1){

  mangoBodyPosition=mango1.body.position;
  stoneBodyPosition=stone1.body.position;
  
  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

  	if(distance <= mango1.radius + stone1.radius)
    {
  	  Matter.Body.setStatic(mango1.body,false);
    }

  }

