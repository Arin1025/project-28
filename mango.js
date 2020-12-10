class Mango{
    constructor(x,y, diametre){
        var options={
            isStatic:true,
            'resttution':0.5,
            'friction':1
        }
        this.body=Bodies.circle(x,y,diametre,options);
        this.diamtere=diametre;
        this.image=loadImage("mango.png");
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