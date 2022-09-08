
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane, plane_options,block1,block1_options,block2,block2_options,rotator1,rotator1_options,rotator2,rotator2_options,rotator3,rotator3_options,particle1,particle2,particle3,particle4,particle5,particle1_options,particle2_options,particle3_options,particle4_options,particle5_options, angle1, angle2, angle3;
var world;
function setup() {
 createCanvas(800, 700);
 rectMode(CENTER);
 angle1=60;
 angle2=120
 angle3=180

 engine = Engine.create();
 world = engine.world;

	
 var plane_options={
	isStatic: true
 }
 
 var block1_options={
	isStatic: true
 }
 
 var block2_options={
	isStatic: true
 }
 
 var rotator1_options={
	isStatic: true
 }
 
 var rotator2_options={
	isStatic: true
 }
 
 var rotator3_options={
	isStatic: true
 }
 
 
 var particle1_options={
	restitution:0.4,
	friction:0.02
 }
 
 var particle2_options={
	restitution:0.4,
	friction:0.02
 }
 
 var particle3_options={
	restitution:0.4,
	friction:0.02
 }


 plane= Bodies.rectangle(400,690,800,20,plane_options);
 World.add(world,plane);
 
 
 block1= Bodies.rectangle(150,350,150,20,block1_options);
 World.add(world,block1);	
 
 block2= Bodies.rectangle(650,350,150,20,block2_options);
 World.add(world,block2);
 
 
 rotator1= Bodies.rectangle(400,80,300,20,rotator1_options);
 World.add(world,rotator1);
 
 rotator2= Bodies.rectangle(400,80,300,20,rotator2_options);
 World.add(world,rotator2);
 
 rotator3= Bodies.rectangle(400,80,300,20,rotator3_options);
 World.add(world,rotator3);
 
 
 particle1= Bodies.circle(400,10,10,particle1_options); 
 World.add(world,particle1);

 particle2= Bodies.circle(400,10,10,particle2_options); 
 World.add(world,particle2);
 
 particle3= Bodies.circle(400,10,10,particle3_options); 
 World.add(world,particle3);
 
 particle4= Bodies.circle(400,10,10,particle4_options); 
 World.add(world,particle4);
 
 particle5= Bodies.circle(400,10,10,particle5_options); 
 World.add(world,particle5);
 
 
 
 Engine.run(engine);
  
}


function draw() {
  background(221, 204, 255);
  Engine.update(engine); 
 
 //plane
  fill(170, 128, 255)
 rect(plane.position.x,plane.position.y,800,20)

 //blocks
 fill(170, 128, 255)
 rect(block1.position.x,block1.position.y,150,20)
 
 fill(170, 128, 255)
 rect(block2.position.x,block2.position.y,150,20)
 
 
 
 
 
 
 fill(38, 0, 77)
 ellipse(particle1.position.x,particle1.position.y,10)
 
 fill(38, 0, 77)
 ellipse(particle2.position.x,particle2.position.y,10)
 
 fill(38, 0, 77)
 ellipse(particle3.position.x,particle3.position.y,10)
 
 fill(38, 0, 77)
 ellipse(particle4.position.x,particle4.position.y,10)
 
 fill(38, 0, 77)
 ellipse(particle5.position.x,particle5.position.y,10)
 
 Matter.Body.rotate(rotator1,angle1)
 push(); 
 translate(rotator1.position.x,rotator1.position.y);
 rotate(angle1);
 fill(136, 77, 255)
 rect(0,0,150,20);
 pop();
 angle1 +=0.9;

 Matter.Body.rotate(rotator2,angle2)
 push(); 
 translate(rotator2.position.x,rotator2.position.y);
 rotate(angle2);
 fill(140, 26, 255)
 rect(0,0,150,20);
 pop();
 angle2 +=0.5;

 Matter.Body.rotate(rotator3,angle3)
 push(); 
 translate(rotator3.position.x,rotator3.position.y);
 rotate(angle3);
 fill(89, 0, 179)
 rect(0,0,150,20);
 pop();
 angle3 +=1.0;



 drawSprites();
 
}



