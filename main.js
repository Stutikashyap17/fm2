
function setup() {
    video = createCapture(VIDEO);
    video.size(650, 600);
    canvas = createCanvas(650, 600);
    canvas.position(560, 150);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotpose);
}

function gotpose(results) {
    if (results.length > 0) {
        console.log(results);


    }
}

function modelLoaded() {
    console.log('posenet is loaded');

}

