const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');


ctx.beginPath();
ctx.arc(100,100,40,0,Math.PI*2);
ctx.stroke();