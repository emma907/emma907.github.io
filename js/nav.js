window.onresize = function(){ location.reload(); }


//Bring in text
$(document).ready(function() {


  $('#clicker').hide().delay(2000).fadeIn(1000);

  $('#inspo').hide().delay(3000).fadeIn(1000);
  

  //console.log("This is working")


});


const squares = document.querySelectorAll('.box');
let xBrowserRatio;
let yBrowserRatio;

function scaleRatio() {
  let browserWidth = window.innerWidth;
  let browserHeight = window.innerHeight;

  xBrowserRatio = browserWidth / 160; 
  yBrowserRatio = browserHeight / 160; 
}

function magnetize() {
function mousePosition(event) {
  let xPos = event.clientX; 
  let yPos = event.clientY; 

  updateRotation(xPos, yPos);
}

function updateRotation(xPos, yPos) {
  // map horizontal rotation to X position relative to browser width
  let xRotation = 60 - Math.ceil(yPos / yBrowserRatio); // half the scaled rotation value
  console.log('X rotation: ' + xRotation); // 0 deg rotation at page center

  // map vertical rotation to Y position relative to browser height
  let yRotation = -60 + Math.ceil(xPos / xBrowserRatio); // half the scaled rotation value
  console.log('Y rotation: ' + yRotation); // 0 deg rotation at page center

  // set perspective of shapes
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.transform = 'rotateX(' + xRotation + 'deg)' + ' ' + 'rotateY(' + yRotation + 'deg)';
  } 
}



// detect mouse movements
window.addEventListener('mousemove', mousePosition);

}

document.getElementById("clicker").addEventListener('click', magnetize); 

// update scale when the page loads
window.addEventListener('load', scaleRatio);

// update scale when the window is resized
window.addEventListener('resize', scaleRatio);
