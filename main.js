function preload(){

}

function setup(){
    canvas = createCanvas(640, 600);
    canvas.position(410, 240);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 640, 600);
}

function take_snapshot(){
    save('pic_ture.png');
}