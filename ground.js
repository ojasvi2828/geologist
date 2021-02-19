class Ground{
    constructor(){ 
      var options = { isStatic: true }
       this.body = Bodies.rectangle(800,10,850,10);
       this.width=850;
       this.height=10;
       World.add(world,this.body)
      }
      display(){
          var pos =this.body.position; 
          rectMode(CENTER); 
          fill("brown");
           rect(pos.x, pos.y, this.width, this.height);
      
      }
      }