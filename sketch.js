
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, tree, boy, stones, mango1, mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var treeImg,boyImg;

function preload(){
	treeImg=loadImage("tree.png");
	boyImg=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground();
	mango1=new Mango(600,290,34);
	mango2=new Mango(855,325,35);
	mango3=new Mango(670,260,35);
	mango4=new Mango(730,200,35);
	mango5=new Mango(710,320,36);
	mango6=new Mango(780,250,35);
	mango7=new Mango(825,170,33);
	mango8=new Mango(880,260,35);
	mango9=new Mango(940,220,35);
	mango10=new Mango(980,305,35);

	attach=new Throw(stones.bpdy,{x:100,y:465});

	tree=createSprite(775,368);
	tree.addImage(treeImg);
	tree.scale=0.42;

	boy=createSprite(160,550);
	boy.addImage(boyImg);
	boy.scale=0.125;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  fill(0);
  textSize(18);

  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  detectCollision(stones,mango8);
  detectCollision(stones,mango9);
  detectCollision(stones,mango10);

  drawSprites();
 
  stones.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
}

function mouseDragged(){
	Matter.body.setPosition(stones.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(lstones,lmango){
	if(lstones.body.position.x- lmango.body.position.x<lmango.diametre+lstones.diametre 
		&& lmango.body.position.x-lstones.body.position.x<lmango.diametre +lstones.diametre
		&& lstones.body.postion.y-lmango.body.position.y<lmango.diametre +lstones.diametre
		&& lmango.body.position.y-lstones.body.position.y<lmango.diametre+lstones.diametre){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attach.Launch(stones.body);
		
	}
}