
//  Canvas setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//  Control points
// Fixed endpoints
const P0 = {x:100, y:canvas.height/2};
const P3 = {x:canvas.width-100, y:canvas.height/2};

// Dynamic points with velocity for spring physics
const P1 = {x:200, y:100, vx:0, vy:0};
const P2 = {x:canvas.width-200, y:100, vx:0, vy:0};

// Physics constants
const k = 0.1;       // stiffness
const c = 0.2; // damping factor
const dt = 1;        // delta time per frame

// Target positions (updated by mouse)
let target1 = {x:P1.x, y:P1.y};
let target2 = {x:P2.x, y:P2.y};


//  Mouse input
canvas.addEventListener("mousemove", (e)=>{
    target1.x = e.offsetX;
    target1.y = e.offsetY;

    // Mirror for P2
    target2.x = canvas.width - e.offsetX;
    target2.y = canvas.height - e.offsetY;
});


// Tangent derivative
function cubicBezierTangent(t,p0,p1,p2,p3){
    const u = 1-t;
    const x = 3*u*u*(p1.x-p0.x) + 6*u*t*(p2.x-p1.x) + 3*t*t*(p3.x-p2.x);
    const y = 3*u*u*(p1.y-p0.y) + 6*u*t*(p2.y-p1.y) + 3*t*t*(p3.y-p2.y);
    return {x,y};
}


//  Physics Update
function Physics(){
    //const c = 0.1;   // damping coefficient

    // for p1
    let ax = -k * (P1.x - target1.x) - c * P1.vx;
    let ay = -k * (P1.y - target1.y) - c * P1.vy;

    P1.vx += ax * dt;
    P1.vy += ay * dt;

    P1.x += P1.vx * dt;
    P1.y += P1.vy * dt;

    // for p2
    ax = -k * (P2.x - target2.x) - c * P2.vx;
    ay = -k * (P2.y - target2.y) - c * P2.vy;

    P2.vx += ax * dt;
    P2.vy += ay * dt;

    P2.x += P2.vx * dt;
    P2.y += P2.vy * dt;
}

//drawing curve
function drawCurveManual(){
    ctx.beginPath();
    let start = cubicBezier(0,P0,P1,P2,P3);
    ctx.moveTo(start.x,start.y);

    for(let t=0; t<=1; t+=0.01){
        const p = cubicBezier(t,P0,P1,P2,P3);
        ctx.lineTo(p.x,p.y);
    }
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.stroke();
}

// Control points
function drawControlPoints(){
    [P0,P1,P2,P3].forEach(p=>{
        ctx.beginPath();
        ctx.arc(p.x,p.y,10,0,Math.PI*2);
        ctx.fillStyle = (p===P0 || p===P3) ? "orange" : "green";
        ctx.fill();
    });
}

// Tangent vectors
function drawTangents(){
    for(let t=0; t<=1; t+=0.05){
        const p = cubicBezier(t,P0,P1,P2,P3);
        const tan = cubicBezierTangent(t,P0,P1,P2,P3);
        const len = Math.sqrt(tan.x*tan.x + tan.y*tan.y);
        const scale = 30;
        const tx = (tan.x/len)*scale;
        const ty = (tan.y/len)*scale;

        ctx.beginPath();
        ctx.moveTo(p.x,p.y);
        ctx.lineTo(p.x+tx,p.y+ty);
        ctx.strokeStyle = "red";
        ctx.lineWidth = 1;
        ctx.stroke();
    }
}


//  Animation Loop
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    Physics();
    drawCurveManual();
    drawControlPoints();
    drawTangents();
    requestAnimationFrame(animate);
}

// Start animation
animate();
