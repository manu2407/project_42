class Drop {
    constructor(x,y){
        var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.rain=Bodies.circle(this.x, this.y, 5, options)
		World.add(world, this.rain);
    }
    display()
	{       fill(0,0,255)
			ellipseMode(RADIUS)
			pop()
			
	}
}