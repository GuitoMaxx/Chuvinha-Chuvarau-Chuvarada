class Chuvinha{
    constructor(x,y){
        var options = {
            friction: 0.1
            
        }
        this.image = loadImage("");
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 50;
        World.add(world, this.drop)
    }

    update(){
        if(this.rain.position.y > height){

            Matter.body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }

}