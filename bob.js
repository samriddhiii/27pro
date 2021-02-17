class bob1 {
//     constructor(xpos,ypos, radius)
//     {
//         var box_options= {
//             restitution:1,
//             friction:0,
//             isStatic:false,
//             density:0.8
//             }
//     this.r=radius;
//     this.y=ypos;
//     this.x=xpos;
    
//     this.body = Bodies.circle(this.x,this.y,this.r/2,box_options);
//     World.add(world,this.body);
    
//    }
constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1.1,
			friction:0,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}

//    display()
//    {
//     var position= this.body.position;

//     push();
//     translate(position.x,position.y)
//     ellipseMode(CENTER)
//     fill("pink")
//     ellipse(0,0,this.r,this.r)
//     pop();
//    }

   display()
   {
           
           var paperpos=this.body.position;
           push()
           translate(paperpos.x, paperpos.y);
           ellipseMode(CENTER)
           //strokeWeight(4);
           fill(255,0,255)
           //imageMode(CENTER);
           //image(this.image, 0,0,this.r, this.r)
           ellipse(0,0,this.r);
           pop()
           
   }





}
