img = "";
status = "";

function preload(){
    img = loadImage('basket.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting objects"
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("basket", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 550, 500);
}

function modelLoaded(){
    console.log("cocossd is initialized");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
}