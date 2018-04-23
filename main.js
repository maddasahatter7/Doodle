var canvas = document.getElementById('canvas');
// canvas interaction comes from the context which is below
var context = canvas.msGetInputContext('2d');

// Making the canvas span from top to bottom of screen will change later
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var putPoint = function(e) {
    // context.arc method will create a circle
    context.arc();
}
canvas.addEventListener('mousedown', putPoint);
