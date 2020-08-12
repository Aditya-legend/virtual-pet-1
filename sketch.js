//Create variables here
var dog,foodStock;
function preload(){
//load images here
dog=loadImage("dogImg.png");
dog1=loadImage("dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  foodStack=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  

  drawSprites();
  //add styles here

}
if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy)
}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}
