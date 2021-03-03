class Bad{
    constructor(x){
        this.x=x;
        this.y = 0;
        this.gravity = .8;
        this.velocity = 0;
        //this.ranx = 0;
    }
    show(){
        fill(225, 0, 0);
        ellipse(this.x, this.y, 20, 20);
    }
    update(){
        this.velocity += this.gravity;
        this.velocity *= .8;
        this.y += this.velocity;
        //console.log('moving');
    }
    outOfScreen(){
        if(this.y >= height){
            return true;
        }else{
            return false;
        }

    }
    hit(Hand){
        if(this.y >= height-15){
            if( this.x < Hand.x+75 && this.x > Hand.x ){
                Hand.hittedbadly = true;
                return true;
            }else{
                return false;
            }
        }
    }
    
}