const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const p0={x:100,y:300};
const p1={x:200,y:100};
const p2={x:400,y:100};
const p3={x:500,y:300};

function drawControlLines(){
    ctx.beginPath();
    ctx.moveTo(p0.x,p0.y);
    ctx.lineTo(p1.x,p1.y);
    ctx.lineTo(p2.x,p2.y);
    ctx.lineTo(p3.x,p3.y);
    ctx.strokeStyle="#aaa";
    ctx.stroke();
}

function drawPoint(p){
    ctx.beginPath();
    ctx.arc(p.x,p.y,5,0,Math.PI*2);
    ctx.fillStyle="red";
    ctx.fill();
}

function drawBezier(){
    ctx.beginPath();

    const start=cubicBezier(0,p0,p1,p2,p3);
    ctx.moveTo(start.x,start.y);

    for(let t=0;t<=1;t+=0.01){
        const point=cubicBezier(t,p0,p1,p2,p3);
        ctx.lineTo(point.x,point.y);}

        ctx.strokeStyle="black";
        ctx.stroke();}
        
    
        function draw(){
            ctx.clearRect(0,0,canvas.width,canvas.height);
            drawControlLines();
            drawBezier();

            drawPoint(p0);
            drawPoint(p1);
            drawPoint(p2);
            drawPoint(p3);

        }
        draw();
