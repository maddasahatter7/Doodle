var canvas = document.getElementById('canvas');
// canvas interaction comes from the context which is below
var context = canvas.getContext('2d');

var radius = 10;
// Making the canvas span from top to bottom of screen will change later
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var putPoint = function(e) {
    // context.arc method will create a circle. It's about to get mathmatical(geometry homies)
    // context.arc uses x, y, radius, start and end angles, and anticlockwise(optional).
    // first parameter is for finding the center of the arc(x, y)
    // then radius and then radian. Find the radius from the center of the circle and go around 
    // the edge of the circle that same distance so that the angle created is equal to 1 radian.
    // 2PIr is the equation for finding circumference of the cirle which equals 360 degrees. PI radians
    // is equal to 180, PI/2 radians equals 90 degrees and so on. 
    // I'll be leaving out the anticlockwise parameter because I want the default clockwise setting.
    
    context.beginPath();
   
    // e.offset gives us the x and y coordinate of event. Radius is preset to 10 in the variable above, start angle 
    // is 0, and in order to go all the way around the circle we need to use 2PI which is 'Math.PI*2' in JS.
    context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2);
    
    // context.fill will fill the circle.
    context.fill();
}
canvas.addEventListener('mousedown', putPoint);
