function setup(){
    canvas=createCanvas(550,500);
    canvas.position(730,120);
    video=createCapture(VIDEO);
    video.position(50,120)
    video.size(550,500)
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotposes);
}
function modelloaded(){
    console.log("model loaded");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
    }
}
function draw(){
    background("lightyellow");
}