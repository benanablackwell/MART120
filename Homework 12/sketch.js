// JavaScript source code
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;
var shapeX2 = 80;
var shapeY2 = 120;
var shapeXSpeed;
var shapeYSpeed;
var shapeX2Speed;
var shapeY2Speed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeX2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeY2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
    background(105,60,78);
    stroke(0);
    fill(0);
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-50);

    // exit message
    textSize(16);
    text("EXIT", width-50,height-50)

    //character
    fill(23,40,123);
    circle(characterX,characterY,25);

    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }

    // potential enemy
    {
       // draw the shape
        circle(shapeX, shapeY, 10);
        fill(13, 145, 14);
    }
    {
        circle(shapeX2, shapeY2, 20);
        fill(35, 67, 65);
    } 

    

    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    shapeX2 += shapeX2Speed;
    shapeY2 += shapeY2Speed; 

    // check to see if the shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    // check to see if the character has left the exit
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    // create the shape based on the mouse click
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
function keyPressed() 
{
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    }
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }
}



function setup()
{
    createCanvas(500, 600);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeX2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeY2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
	background(100,150,20);

    // call createBorders function
    createBorders();

    // call createCharacter function
    createCharacter();

    // call movePlayer function
    movePlayer();

    // call drawMouseclick function
    drawMouseclick();

    // call createEnemy function
    createEnemy();

    // call createRandoMmovment function
    createRandomMovement();

    // call createWin function
    createWin();

    // exit message
    textSize(25);
    text("Exit", width-470,height-25)

   
    // enemy shapes
    {circle(shapeY2, shapeY, 10);
        fill(50,25,10)
    }
    {circle(shapeX2, shapeY2, 20);
        fill(40,50,20)
    }

    // shape 1 out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    // shape 2 out of bounds
    if(shapeX2 > width)
    {
        shapeX2=0
    }
    if(shapeX2<0)
    {
        shapeX2 = width; 
    }
    if(shapeY2=height)
    {
        shapeY2=
    }
    if(shapeY2<0)
    {
        shapeY2=height; 
    }

}

function createEnemy()
{
    {circle(shapeX, shapeY, 10);
        fill(50,25,10)
    }
    {circle(shapeX2, shapeY2, 20);
        fill(40,50,20)
    }
}

function createRandomMovement()
{
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    shapeX2+= shapeX2Speed;
    shapeY2+= shapeY2Speed;
} 

function createWin()
{
    if(characterY > width && characterX < width-500)
    {
        stroke(5);
        fill(0);
        textSize(50);
        text("You Win!", width/2-20, height/2-25);
    }
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function createCharacter()
{
    fill(60,30,90);
    circle(characterX,characterY,25);
}

function createBorders()
{
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height-50);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height); 
}

function drawMouseclick()
{
    fill(100,100,100);
    circle(mouseShapeX, mouseShapeY, 30);
}

function movePlayer()
{
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }

}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
	}
}