function Breaks(x,y,z) {
 
  this.x = x;
  this.y = y;
  this.lifeLength = 10;
  
  this.length = z;
  
  this.height = 30;
  
  this.createBreaks = function () {
  	fill(0,0, 25.5*this.lifeLength);
	rect(this.x,this.y,this.length,this.height);
	fill(255);
	text(''+ this.lifeLength, this.x - 5,this.y + this.height/4);


  }
} 