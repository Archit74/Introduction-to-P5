function preload(){

}

function setup(){
canvas=createCanvas(500,400);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();

tint_color="";
}

function draw(){
image(video,0,0,500,400);
tint(tint_color);
}
function tint_Filter(){
tint_color=document.getElementById("filter_input").value;
}

function take_snapshot(){
    save('image.png');
}