/*class MangoClass{
   constructor(x,y,radius){
     var options = {
         isStatic :true,
         restitution : 0,
         friction : 1 
     }
     this.body = Bodies.circle(x,y,radius,options);
     this.radius = radius;
     this.image = loadImage("mango.png");
     World.add(world,this.body);
    }
    display(){
     var pos = this.body.position;
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,this.radius);
    }

}
class MangoClass{
   constructor(x,y,width,height){
    var options = {
     isStatic : true,
     restitution : 0,
     friction : 1
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image=loadImage("mango.png");
    World.add(world,this.body);
   }
   display(){
     var pos = this.body.position;
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,this.width,this.height);
    }
    
}*/
class MangoClass{
	constructor(x,y,radius)
	{
		var options={
			isStatic:true,
			restitution :0,
      friction :1,
     }
     this.x = x;
     this.y = y;
		this.radius =radius;
		this.image=loadImage("mango.png")
		this.body=Bodies.circle(this.x, this.y, this.radius, options);
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		rotate(this.body.angle);
		fill(255,0,255);
		imageMode(CENTER);
		image(this.image, 0,0,this.radius*2, this.radius*2)
		pop();
 }
}