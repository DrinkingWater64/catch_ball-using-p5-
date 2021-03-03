class Hand{
    constructor(){
        this.x = width/2;
        this.y = height-15;
        this.speed = 0;
        this.hitted = false;
        this.hittedbadly = false;

    }
    show(){
        if(this.hitted){
        fill(225, 225, 0);
        }
        else if(this.hittedbadly){
        fill(225, 0, 0);    
        }else{
        fill(225);
        }
        this.hitted = false;
        this.hittedbadly = false;
        rect(this.x, this.y, 75, 15);
        //console.log('hand');
    }
    update(){
        this.x += this.speed;

        if(this.x >= width-75){
            this.x = width-75;
            this.speed = 0;
        }
        if(this.x <= 0){
            this.x = 0;
            this.speed = 0;
        }
    }
    goLeft(){
        this.x -= 2;
    }
    goRight(){
        this.x += 2;
    }
}