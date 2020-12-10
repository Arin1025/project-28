class Stone{
    constructor(x,y, diametre){
        var options={
            isStatic:false,
            resttution:0.5,
            friction:0,
            density:1.2
        }
        this.body=Bodies.circle(x,y,diametre,options);
        this.diamtere=diametre;
        this.image=loadImage("stone.png");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.diametre);
        pop();
    }
}