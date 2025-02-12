const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
function setup() {
  
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var ground_options ={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,300,20,ground_options);
  World.add(world,ground);
  //console.log(object);
  //console.log(object.type);
  //console.log(object.position.x);
  //console.log(object.position.y);
  var ball_options ={
    restitution:1.0
  }
  ball=Bodies.circle(100, 100, 20, ball_options);
  World.add(world,ball);
}

function draw() {
  background(0, 0, 0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 50, 50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}