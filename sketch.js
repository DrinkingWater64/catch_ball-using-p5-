let balls = [];
let bads = [];
let hand;
let score = 0;
let health = 15;
let isOver = false;

function setup(){
    createCanvas( 400, 800);
    
    balls.push(new Ball(Math.random() * (width - 0) + 0));  
    bads.push(new Bad(Math.random() * (width - 0) + 0));
    hand = new Hand();  
}

function draw(){
    background(0);
    showScores();
    //for balls
    for( let i = balls.length-1; i>=0; i--){
    balls[i].show();
    balls[i].update();

    if(balls[i].hit(hand)){
        //console.log('hits');
        //console.log(balls[i].x);
        score++;
    }
    
    if(balls[i].outOfScreen()){
        //console.log('splicing');
        balls.splice(i, 1);
        }
    }
    if(frameCount % 60 == 0){
        balls.push(new Ball(Math.random() * (width - 0) + 0));
    }
    //for bad balls
    for( let i = bads.length-1; i>=0; i--){
    bads[i].show();
    bads[i].update();

    if(bads[i].hit(hand)){
        //console.log('hits');
        //console.log(balls[i].x);
        health--;
    }


    if(health <= 0){
        gameOver();
    }
    
    if(bads[i].outOfScreen()){
        //console.log('splicing');
        bads.splice(i, 1);
        }
    }
    if(frameCount % 120 == 0){
        bads.push(new Bad(Math.random() * (width - 0) + 0));
    }



    hand.show();
    hand.update();
    if(keyIsDown(LEFT_ARROW)){
        hand.goLeft();
    }
    if(keyIsDown(RIGHT_ARROW)){
        hand.goRight();
    }
    
}

function showScores() {
  textSize(32);
  textAlign(CENTER, TOP);
  text('score: ' + score, 0, 12, width);
}

function reset(){
  isOver = false;
  score = 0;
  health = 15;
  balls = [];
  bads = [];
  hand = new Hand();
  balls.push(new Ball(Math.random() * (width - 0) + 0));
  bads.push(new Bad(Math.random() * (width - 0) + 0));
  loop();
}

function gameOver(){
    textSize(64);
    textAlign(CENTER, CENTER);
    text('GAMEOVER', width/2, height/2);
    isOver = true;
    noLoop();
    
}

function keyPressed() {
  if (key === ' ') {
    if (isOver) reset(); 
  }
}