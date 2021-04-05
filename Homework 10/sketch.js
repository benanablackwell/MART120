var headx = 150;
var heady = 100;
var headDirection = 3;

var bodyX =100;
var bodyY =90;
var bodyDirection = 3;

var lefteyeX = 75; 
var lefteyeY = 30;
var lefteyeZ = 60;
var lefteyeDirection = 3;

var righteyeX = 30;
var righteyeY = 75;
var righteyeZ = 60;
var righteyeDirection = 3;


var size = 32;
var count = 0;
var sizeDirection = 2;
function setup()
            {
                createCanvas(500,600);
                movement = Math.floor(Math.random() * 10) + 1;
            }

            function draw()
            {
                background(200,80,60);
                textSize(22);
                circle(headx,heady,100);
             
                headx+=headDirection;
                heady+=headDirection;
                if(headx >=418 || headx <= 82)
                {
                    headDirection *= -1;
                }
                if(heady >=418 || heady <= 82)
                {
                    headDirection *= -1;
                }

                //body
                rect(bodyX,bodyY,70,100);
      
                bodyX+=bodyDirection;
                if(bodyX >=410 || bodyX <= 82)
                {
                    bodyDirection *= -1;
                }

                //legs
                line(150, 100, 100, 100);
                line(180, 150, 170, 100);

                // left eye
                triangle(120, lefteyeY, 150, lefteyeX, 100, lefteyeZ);
                lefteyeY += lefteyeDirection;
                if(lefteyeY <= 0 || lefteyeY >= 450 )
                {
                    lefteyeDirection *= -1;
                }
                lefteyeZ += lefteyeDirection;
                if(lefteyeZ <= 0 || lefteyeZ >= 450 )
                {
                    lefteyeDirection *= -1;
                }
                lefteyeX += lefteyeDirection;
                if(lefteyeX <= 0 || lefteyeX >= 450 )
                {
                    lefteyeDirection *= -1;
                }

                // right eye
                triangle(140, righteyeX, 170, righteyeY, 120, righteyeZ);
                righteyeY += lefteyeDirection;
                if(righteyeY <= 0 || righteyeY >= 450 )
                {
                    righteyeDirection *= -1;
                }
                righteyeZ += righteyeDirection;
                if(righteyeZ <= 0 || righteyeZ >= 450 )
                {
                    righteyeDirection *= -1;
                }
                righteyeX += righteyeDirection;
                if(lefteyeX <= 0 || lefteyeX >= 450 )
                {
                    righteyeDirection *= -1;
                }

                

           
                point(80, 80);

                //arms
                 rect(100, 150, 30, 100);
                rect(145, 150, 30, 100);


                //text
                fill(120);
                textSize(size);
                size+= sizeDirection;
                count++;
                if(count > 5)
                {
                    sizeDirection *=-1;
                    count = 0;
                }
    text("Portrait of a Simple Man",70,50 );
    
                
            }