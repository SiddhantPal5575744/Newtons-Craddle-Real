class roof
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var rpos=this.body.position;		

			push()
			translate(rpos.x, rpos.y);
			rectMode(CENTER)
			
			fill('red');
			rect(0,0,this.w, this.h);
			pop()
			
	}

}