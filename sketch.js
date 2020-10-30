const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object1, ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var object_options = {
    isStatic: true
  }
var ball_options = {
  restitution: 1,
  density: 2,
  friction: 1,
  motion: 2

}
  object1 = Bodies.rectangle(400,390,800,20,object_options);
  World.add(world,object1);
  ball = Bodies.circle(100,100,50,ball_options)
  World.add(world,ball);
  console.log(ball)
  console.log(object1);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER)
  rect(object1.position.x, object1.position.y, 800,20);
  ellipseMode(CENTER)
  ellipse(ball.position.x, ball.position.y, 50, 50)
  drawSprites();
}