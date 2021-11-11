function preload(){
}

function setup(){
    canvas=createCanvas(600,480);
    canvas.position(110,250);
    background("#fcdb03");
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,150,140,300,200);

    stroke("#4b2563");
    fill("#4b2563");
    circle(50,430,70);
    circle(550,430,70);
    circle(50,50,70);
    circle(550,50,70);

    stroke("#ff009d")
    fill("#ff009d")
    rect(85,415,430,30);
    rect(85,35,430,30);
    rect(35,80,30,320);
    rect(535,80,30,320);
}

function takeSnapshot(){
    save("FirstP5Project.png");
}