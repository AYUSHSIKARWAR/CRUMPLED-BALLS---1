
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;




function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new Paper(100,500,10)

ground = new Ground(400,600,800,20)

leftSide = new Bin(550,560,20,100)
bottom = new Bin(610,600,100,20)
rightSide = new Bin(670,560,20,100)


	Engine.run(engine);
  
}


function draw() {
rectMode(CENTER)

background("black")

Engine.update(engine)

paper.display()
ground.display()
leftSide.display()
bottom.display()
rightSide.display()

drawSprites()
}

function keyPressed (){
if (keyCode===UP_ARROW) {
  Matter.Body.applyForce(paper.body,paper.body.position,{x:15 , y:-15})
}


}