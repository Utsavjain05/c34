var ball;
var database;
var position;

function setup(){
    database=firebase.database();
createCanvas(400,400);
ball=createSprite(200,200,20,20);
ball.shapeColor="red";
var ballPosition=database.ref('ball/position');
ballPosition.on("value",readposition,showerrors);


}
function draw(){
background (255);
if (keyDown(UP_ARROW)){
    writePosition(0,-1);

}
if( keyDown(DOWN_ARROW)){
    writePosition(0,1);   
}
if(keyDown(LEFT_ARROW)){
    writePosition(-1,0);

}
if(keyDown(RIGHT_ARROW)){
    writePosition(1,0);
}




drawSprites();
}
function writePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y,
    })
//ball.x=ball.x+x;
//ball.y=ball.y+y;


}
function readposition(data){
position=data.val();
console.log(position.x);
ball.x=position.x;
ball.y=position.y;

}
function showerrors(){
    console.log("error in writing to the database");
}