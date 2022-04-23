let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight ;

let c = canvas.getContext("2d");

// c.fillStyle = "#27ae60";
// c.fillRect(100,0,100,100);
// c.fillStyle = "#3498db";
// c.fillRect(300,100,100,100);
// c.fillStyle = "#520090";
// c.fillRect(500,0,100,100);
let r = 40
let x = rendomIntFromInterval(0+r,window.innerWidth-r);
let y = rendomIntFromInterval(0+r,window.innerHeight-r);
let vx = (Math.random() - 0.5) * 4;
let vy = (Math.random() - 0.5) * 4;
function animate(){
    c.clearRect(0,0,window.innerWidth,window.innerHeight);
    c.beginPath();
    c.arc(x,y,r,0,2*Math.PI);
    c.fillStyle="blue";
    c.fill();
    if (x+r >= window.innerWidth || x-r < 0) {
        vx=-vx;
    }
     x+=vx;

     if (y+r >= window.innerHeight || y-r < 0) {
        vy=-vy;
    }
     y+=vy;
    requestAnimationFrame(animate);
}

animate();

function rendomIntFromInterval(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}