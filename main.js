
diferencia = 0;
manoR = 0;
manoL = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("modelo cargado!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        manoR = results[0].pose.rightWrist.x;
        manoL = results[0].pose.leftWrist.x;
        diferencia = floor(manoL - manoR);
        console.log("mano Izq : " + manoL + "mano der : " + manoR + " distancia: " + diferencia);
    }
}

function draw(){
    background("#969A97");
    document.getElementById("font_size").innerHTML = "el tamaño de la fuente es:" + diferencia;
textSize(diferencia);
    fill('#F90093');
text("SUSCRIBETE A ALBERT20",50,350)
}



