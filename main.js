var mouse_event=""
var canvas= document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
var color="";
var width_of="";
var radius="";
var current_position_X, current_position_Y;

canvas.addEventListener("mousedown", my_touchdown);
function my_touchdown(e){

    color=document.getElementById("color_").value;
    width_of=document.getElementById("width_").value;
    radius=document.getElementById("radius_").value;
    console.log(color);
    console.log(radius);
    console.log(width_of);
    mouse_event="mousedown"
}
canvas.addEventListener("mouseup", my_touchup);
function my_touchup(e){
    mouse_event="mouseup"
}
canvas.addEventListener("mouseleave", my_touchleave);
function my_touchleave(e){
    mouse_event="mouseleave"
}
canvas.addEventListener("mousemove", my_touchmove);
function my_touchmove(e){
    current_position_X=e.clientX-canvas.offsetLeft;
    current_position_Y=e.clientY-canvas.offsetTop;
    if (mouse_event=="mousedown"){
        console.log("current position of=");
        console.log("X="+current_position_X+"Y="+current_position_Y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.width=width_of;
        ctx.arc(current_position_X,current_position_Y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}
function clear_space() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }