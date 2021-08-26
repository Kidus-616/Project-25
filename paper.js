class Paper {
    constructor(x, y, w, h) {
      var paper_features = {
        isStatic: false,
        restitution: 0.8,
        friction: 2
  
      };
    this.paperImage=loadImage("paper.png")
      this.paper = Bodies.rectangle(x, y, w, h, paper_features);
      World.add(world, this.paper);
      this.w = w;
      this.h = h;
    }
    display() {
      push();
      translate(this.paper.position.x, this.paper.position.y);
      rotate(this.paper.angle);
      imageMode(CENTER);
      image(this.paperImage,0, 0, this.w, this.h);
      pop();
    }
  }
  