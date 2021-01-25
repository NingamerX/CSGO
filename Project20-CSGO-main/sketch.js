var car,wall; 
var speed,weight;  
function setup() { 
  createCanvas(800,400);
  car=createSprite(50,200,50,50);


  speed=random(55,90)
  weight=random(400,1500)

  wall=createSprite(750,200,60,height/2);
 

  car.velocityX=speed;


}  

console.log(speed);
console.log(weight);

function draw() {
  background(255,255,255);  
  drawSprites();

  if(wall.x-car.x < (car.width+wall.width)/2){

    console.log(speed);
    console.log(weight);

    var deformation = 0.5

    car.velocityX=0;

    deformation=0.5*weight*speed*speed/22509;
  
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
     
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }
  

} 