var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mousedown";
}
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    current_position_of_touch_x = e.clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.clientY - canvas.offsetTop;
    if (touchEvent == "touchDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
    }
    ctx.lineWidth = width_of_line;
    
    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);
    
    console.log("Current position of x and y coordinates = ");
    console.log("x = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
    
}
canvas.addEventListener("touchend", my_touchend);
function my_touchend(e)
{
    touchEvent = "touchEND";
}
canvas.addEventListener("touchleave", my_touchend);
function my_touchend(e)
{
    touchEvent = "touchleave";
}
function clearArea()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
