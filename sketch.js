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

  ball = new Ball(50,250, 80, 80);
  blower = new Blower(30,450,150, 20);
  blowerMouth = new BlowerMouth(50,400, 100, 90);
  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");

  button.mousePressed(blow);
}

function draw() {
  background(59);
  Engine.update(engine);

  blower.show();
  ball.show();
  blowerMouth.show();

  drawSprites()
}
function blow() {
Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:.1, y:-.1});
}

