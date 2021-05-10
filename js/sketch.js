var p1;
var p2;
var ball;
var speed = 13;
var intro = true;

function setup(){
	createCanvas(windowWidth, windowHeight);
	p1 = new Stick("red", 20, height/2-50);
	p2 = new Stick("blue", width-30, height/2-50);
	ball = new Ball(width/2, height/2, 20, 7, p1, p2);
}

function draw(){
	background("black");
	if(intro){
		push();
			rectMode(CENTER);
			rect(width/2, height/2, 200, 50);
			textSize(40);
			textAlign(CENTER, CENTER);
			fill("green");
			text("Press intro", width/2, height/2);
		pop();
	}
	else{
		push();
			textSize(40);
			textAlign(CENTER, TOP);
			fill("green");
			stroke("green");
			text(`${p1.score}  ${p2.score}`, width/2, 0);
			line(width/2, 0, width/2, height);
		pop();
		p1.display();
		p2.display();
		//p1.bot(ball.y-p2.h/2);
		p2.bot(ball.y-p2.h/2);
		ball.display();
		ball.hasCollision(p1.x, p1.y, p1.w, p1.h, p1.direction, p1.c);
		ball.hasCollision(p2.x, p2.y, p2.w, p2.h, p2.direction, p2.c);
		move();
	}
}

function keyPressed(){
	if(keyCode == ENTER){
		intro = !intro;
	}
}

function move(){
	if(keyIsDown(87))
		p1.move(-speed);
	else if(keyIsDown(83))
		p1.move(speed);

	/*if(keyIsDown(UP_ARROW))
		p2.move(-speed);
	else if(keyIsDown(DOWN_ARROW))
		p2.move(speed);*/
}