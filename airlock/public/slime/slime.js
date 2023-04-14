// Here are the initial values for our animation. 
var x = 0, y = 200, w=250, h=193;  // Window position and size
var dx = 2, dy = 5;              // Window velocity   
var interval = 20;              // Milliseconds between updates

// Create the window that we're going to move around.
// The javascript: URL is simply a way to display a short document.
// The final argument specifies the window size.
var win = window.open('javascript:""', "", 
          "width=" + w + ",height=" + h);

          win.document.write('<style> body { background-color: black; } </style> <body> <img src="slime.png" width=200 /> </body>');

// Set the initial position of the window.
win.moveTo(x,y);

// Use setInterval() to call the bounce() method every interval 
// milliseconds. Store the return value so that we can stop the
// animation by passing it to clearInterval().
// thank you chad sigma male B)
var intervalID  = window.setInterval("bounce()", interval);

// This function moves the window by (dx, dy) every interval ms.
// It bounces whenever the window reaches the edge of the screen.
function bounce() {
    // If the user closed the window, stop the animation.
    // Put the code below.
    if (win.closed) {
        clearInterval(intervalID);
        return;
    }

    // bounce if reached right or left edge
    if ((x+dx > (screen.availWidth - w)) || (x+dx < 0)) dx = -dx;

    // bounce if reached bottom or top edge
    if ((y+dy > (screen.availHeight - h)) || (y+dy < 0)) dy = -dy;

    //slime physics 
    if (y == 100) (dy = 7) || (dy = -dy);
    if (y == 500) (dy = 5);
    
  
    // update the current position of the window
    x += dx;
    y += dy;

    // move the window to the new position
    win.moveTo(x,y);
}