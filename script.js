let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight ;

let c = canvas.getContext("2d");


class Ball{
    constructor(){
        this.r = rendomIntFromInterval(5,30);
        this.x = rendomIntFromInterval(0+this.r,window.innerWidth-this.r);
        this.y = rendomIntFromInterval(0+this.r,window.innerHeight-this.r);
        this.vx = (Math.random() - 0.5) * 10;
        this.vy = (Math.random() - 0.5) * 10;
        this.color = "#" + `${rendomIntFromInterval(100000,999999)}`;
        this.drow();
    }
    drow(){
        c.beginPath();
        c.arc(this.x,this.y,this.r,0,2*Math.PI);
        c.fillStyle=this.color;
        c.fill();
    }
    update(){
        if (this.x+this.r >= window.innerWidth || this.x-this.r < 0) {
            this.vx=-this.vx;
        }
        this.x+=this.vx;
    
         if (this.y+this.r >= window.innerHeight || this.y-this.r < 0) {
            this.vy=-this.vy;
        }
        this.y+=this.vy;
        this.drow();
    }
}

let balls = [];
for (let i = 0; i < 100; i++) {
    balls.push(new Ball)
}

function animate(){
    c.clearRect(0,0,window.innerWidth,window.innerHeight);
    balls.forEach(ball => {
      ball.update();  
    });
    
    requestAnimationFrame(animate);
}

animate();

function rendomIntFromInterval(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

