const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;


function setup() {
  createCanvas(1200,600);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(600,550,1200,15);
  ball=new Ball(100,300,50);
  
  stand1= new Ground(400,300,300,15);
  b1=new Block(300,250,50,50);
  b2=new Block(350,250,50,50);
  b3=new Block(400,250,50,50);
  b4=new Block(450,250,50,50);
  b5=new Block(500,250,50,50);
  b6=new Block(320,200,50,50);
  b7=new Block(370,200,50,50);
  b8=new Block(420,200,50,50);
  b9=new Block(470,200,50,50);
  b10=new Block(390,150,50,50);

    stand2=new Ground(700,400,300,15)
    b11=new Block(600,350,50,50);
    b12=new Block(650,350,50,50);
    b13=new Block(700,350,50,50);
    b14=new Block(750,350,50,50);
    b15=new Block(800,350,50,50);
    b16=new Block(620,300,50,50);
    b17=new Block(670,300,50,50);
    b18=new Block(720,300,50,50);
    b19=new Block(770,300,50,50);
    b20=new Block(650,250,50,50);
    b21=new Block(700,250,50,50);
    b22=new Block(750,250,50,50);
    b23=new Block(700,200,50,50);
    //rope = new Rope(ball.body,{x:200,y:300});
}

function draw() {
  background("pink");
  Engine.update(engine) ;

  textSize(20);
  text("Use UP ARROW to move up,DOWN ARROW to move down,LEFT ARROW to move left and RIGHT ARROW to move right",50,20);
  text("Get those blocks down using the ball",200,50)
  ground.display();
  ball.display();
  stand1.display();
  stand2.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();  
  b23.display(); 
}

 


function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:-120})
  }
  if(keyCode===DOWN_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:120})
  }
  if(keyCode===LEFT_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:-120,y:120})
  }
  if(keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:120,y:-120})
  }
}


