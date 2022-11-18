class Ball{

  constructor(x, y, d, stepX, p1, p2){
    this.x = x;
    this.y = y;
    this.d = d;
    this.c = "white";
    this.stepX = stepX;
    this.stepY = 0;
    this.p1 = p1;
    this.p2 = p2;
  }

  display(){
    push();
    fill(this.c);
    ellipse(this.x, this.y, this.d);
    this.moveY();
    this.marginTop();
    this.reset();
    pop();
  }

  moveY(){
    this.x -= this.stepX;
    this.y += this.stepY;
  }

  hasCollision(x, y, w, h, direction, c){
    if(x < this.x+this.d/2 && x+w >= this.x-this.d/2 && y < this.y && y+h >= this.y)
    {
    	if(Math.abs(this.stepX) <= 150)
    		this.stepX = (this.stepX<0?this.stepX-.2:this.stepX+.2);
      	this.stepX *= -1;
      	this.stepY = (direction?Math.abs(this.stepX):Math.abs(this.stepX)*-1);
      	this.changeColor(c);
      	console.log(this.stepX);
    }
  }

  marginTop(){
    if(this.y - this.d/2 <= 0)
      this.stepY = Math.abs(this.stepX);
    else if(this.y + this.d/2 >= height)
      this.stepY = Math.abs(this.stepX)*-1;
  }

  reset(){
    if(this.x - this.d/2 <= 0 || this.x + this.d/2 >= width)
    {	
    	if(this.x - this.d/2 <= 0)
    	{
    		p2.score+=1;
    		this.stepX = 7;
    	}
    	else
    	{
    		p1.score+=1;
    		this.stepX = -7;
    	}
    	this.x = width/2;
    	this.y = height/2;
    	this.stepY = 0;
    	
    	this.p1.x = 20;
    	this.p1.y = height/2-50;
    	this.p2.x = width-30;
    	this.p2.y = height/2-50;
    }
  }

  changeColor(color){
  	this.c = color;
  }
}
