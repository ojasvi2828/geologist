class Rubber{
  constructor(x,y,radius){
        var options = {restitution: 0.3,
         friction:5,
      density:10}
      this.body = Bodies.circle(x,y,radius/2,options);
        this.radius = radius;
        World.add(world,this.body);
}

display(){
  var pos =this.body.position;
  var angle = this.body.angle;
  
         push();
            translate(pos.x, pos.y);
          rotate(angle);
        fill("blue");
              circle(0, 0, this.radius/2);
             pop(); 
         
}
}
