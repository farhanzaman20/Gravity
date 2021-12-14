// Canvas Setup
var cnv = document.querySelector('canvas');
var ctx = cnv.getContext('2d');
cnv.height = 810;
cnv.width = 1080;

// Checkboxes
var initHeightToggle = false;
var checkbox = document.querySelector('#initHeight');
checkbox.addEventListener('change', () => {
  if (initHeightToggle == false) {
    initHeightToggle = true;
  } else if (initHeightToggle == true) {
    initHeightToggle = false;
  }
})

// Numerical Input
var inputVelX;

// Speed Input
var fps = 60;
var speedInput = document.querySelector('#speed');
speedInput.value = 60;
speedInput.addEventListener('change', () => {
  fps = Number(speedInput.value);
})

// Create Circles
var mouseDown;
cnv.addEventListener('mousedown', (event) => {
  circles.push(new Circle(event.clientX - cnv.offsetLeft, event.clientY - cnv.offsetTop, inputVelX));
  if (event.button == 2) {mouseDown = true}
})
cnv.addEventListener('mousemove', (event) => {
  if (mouseDown == true) {
    circles.push(new Circle(event.clientX - cnv.offsetLeft, event.clientY - cnv.offsetTop, inputVelX));
  }
})
document.addEventListener('mouseup', () => {mouseDown = false});
cnv.addEventListener('contextmenu', (event) => {event.preventDefault()})

cnv.addEventListener('wheel', () => {
  circles.push(new Circle(randomInt(0, cnv.width), randomInt(0, cnv.height), randomInt(-5, 5)));
})

// Animation Frame
requestAnimationFrame(aniLoop);
function aniLoop() {
  // Refresh Background
  background('black');

  // Draw Circles
  for (let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].draw();
    if (circles[i].velocityY < 0.1 && circles[i].velocityY > -0.1 && circles[i].y + circles[i].r >= cnv.height && circles[i].velocityX < 0.4 && circles[i].velocityX > -0.4) {
      
      circles.splice(i, 1);
    }
  }

  // Refresh Horizontal Velocity
  inputVelX = Number(document.querySelector('#horizontalVelocity').value)

  // Call Animation Frame Again
  if (fps == 60) {
    requestAnimationFrame(aniLoop);
  } else if (typeof(fps) == 'number') {
    setTimeout(aniLoop, 1000 / fps);
  } 
}