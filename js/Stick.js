class Stick{

  constructor(c, x, y){
    this.c = c;
    this.w = 10;
    this.h = 100;
    this.x = x;
    this.y = y;
    this.score = 0;
    this.direction = true;
  }

  display(){
    push();
    fill(this.c);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }

  move(y){
    if(y < 0 && this.y > 0)
    {
      this.y += y;
      this.changeDirection(y>0?true:false);
    }
    if(y > 0 && this.y+this.h < height)
    {
      this.y += y;
      this.changeDirection(y>0?true:false);
    }
  }

  bot(y){
    this.y = y;
  }

  changeDirection(direction){
    this.direction = direction;
  }
}