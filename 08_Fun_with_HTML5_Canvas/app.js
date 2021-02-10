// CanvasRenderingContext2D
const canvas = document.querySelector('#draw');
// You don't draw directly on the canvas but on something that is called a 'context'.
// The Document.getElementById() method gets a reference to the HTML <canvas> element. Next, the HTMLCanvasElement.getContext() method gets that element's context—the thing onto which the drawing will be rendered.
const ctx = canvas.getContext('2d');

// Size up our canvas to be the exact width of the window
// by default, is width="800" height="800", as in index.html, but we want it resizable if we want to do any king of a drawing
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Base settings with lineCap and lineJoin
ctx.strokeStyle = '#450065';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;
ctx.globalCompositeOperation = 'multipy';

// Create sort of like a flag, set it to false; when mousedown set it to true, when mouseup set it to false
// What you need to draw a straight line? A starting XandY, and an ending XandY
// so lastX and lastY it's going to be whwre you're going to start your drawing
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;


// function that it's going to be called whenever we move our mouse on top of the canvas
function draw(e) {
  if (!isDrawing) return; // stop the function when not mouse down
  console.log(e);

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  // when we're done the draw function, we want to update the lastX and lastY variable to be wherever they were

  // Destructuring an Array [lastX, lastY] = [e.offsetX, e.offsetY], same thing as lastX = e.offsetX; and lastY = e.offsetY;
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

}

// So as soon as we click the mousedown to start it, before we do the mousemove, then we update the lastX and lastY, and this is going to put us where we want to go rather than start at 0 and 0
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
// but we want this eventListener to fire up only when we click down
// on this mouse event we see offsetX, offsetY, movementX, movementY, all this info about where was the mouse
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);