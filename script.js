const canvas = document.getElementById('canvas');
const contextType = '2d';
const ctx = canvas.getContext(contextType);
let isDrawing = false;
let pos = { x: 0, y: 0 }
const resize = () => {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}
resize();

const setPosition = (e) => {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

const draw = (e) => {
  if (isDrawing) {
    ctx.beginPath();
    ctx.strokeStyle = `rgb(${pos.x}, ${pos.y}, 0)`;
    ctx.lineWidth = pos.x / 50;
    ctx.moveTo(pos.x, pos.y);
    setPosition(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    ctx.closePath();
  }
}

canvas.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    draw(e)
  }
})

canvas.addEventListener('mousedown', (e) => {
  setPosition(e);
  isDrawing = true;
  draw(e);
})

canvas.addEventListener('mouseup', (e) => {
  setPosition(e);
  draw(e);
  isDrawing = false;
})