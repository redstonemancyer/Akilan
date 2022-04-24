const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;
var basketballhoopimg
var basketballhoop
var hoop
var wall1
var gameState = "play";
var button2;

function preload() {
basketballhoopimg = loadImage("basketball-hoop-net-isolated-white-background-d-illustration-93596063.jpg",hoop)
}

function setup() {
  var canvas = createCanvas(550, 500);

  basketballhoop = createSprite(500,300)
  basketballhoop.addImage(basketballhoopimg)
  basketballhoop.scale = .09

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(50,250, 60, 60);
  blower = new Blower(30,450,150, 20);
  blowerMouth = new BlowerMouth(50,400, 100, 90);
  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");

 

  wall1 = Bodies.rectangle(450, 300, 2, 75, {isStatic:true});
  World.add(world, wall1);

  button.mousePressed(blow);
  rectMode(CENTER)
}

function draw() {
  background(59);
  Engine.update(engine);
if(gameState === "play"){


  

  blower.show();
  ball.show();
  blowerMouth.show();

  if(ball.body.position.x>480&&ball.body.position.y>250&&ball.body.position.x<550){
   gameState = "win"; 
  }

  drawSprites();
}
if(gameState === "win"){
  fill("red")
  stroke("yellow")
  strokeWeight(3)
  textSize(70)
  text("You Won",130,250)

  button2 = createButton("Restart");
  button2.position(width / 2-80, height - 200);
  button2.class("blowButton");
  button2.mousePressed(
    ()=>{
      location.reload();
    }
  )

  button.hide();

}
  //rect(wall1.position.x,wall1.position.y,2,75);
  //fill("white");
  //text("x = "+mouseX+"     ball.x= "+ball.body.position.x,100,100);
  //text("y = "+mouseY+"     ball.y= "+ball.body.position.y,100,120);
}
function blow() {
Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:.05, y:-.15});
}

