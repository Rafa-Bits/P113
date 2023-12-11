function preload(){}
function canvas(){
video = createCapture(VIDEO);
video.hide();
tint_color="";}
function draw() {image(video, 0, 0,640, 480);
tint(tint_color);}
function takeSnapshot(){save("aluno.png");}
function filtertint(){tint_color=document.getElementById("text").value;}