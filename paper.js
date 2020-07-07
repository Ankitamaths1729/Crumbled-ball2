
  class Paper {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':0.5
      }
      this.body = Bodies.circle(x, y, 20,options);
      this.radius = 20;
       this.image=loadImage("paper.png");
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      
     // ellipseMode(RADIUS);
     // ellipse(pos.x,pos.y,this.radius,this.radius);
      imageMode(CENTER)
     image(this.image,0,0,4,5);
    
    }
  };