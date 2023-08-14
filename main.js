imgMario = ""
marioX = 325
marioY = 325
noseX = 0
noseY = 0
function preload() {
	world_start = loadSound("world_start.wav");
	mario_gameover = loadSound("gameover.wav")
	mario_jump = loadSound("jump.wav")
	mario_coin = loadSound("coin.wav")
	mario_die = loadSound("mariodie.wav")
	mario_kick = loadSound("kick.wav")
	setSprites();
	MarioAnimation();
	imgMario = loadImage("imgs/mario/mario05.png")
    
}

function setup() {
	canvas = createCanvas(1120,400);
	canvas.center()
	instializeInSetup(mario);
	webcan = createCapture(VIDEO)
	webcan.size(765,510)
	poseNet = ml5.poseNet(webcan, modelLoaded)
	poseNet.on("pose", gotPoses)
	webcan.parent("gameConsole")
}

function draw() {
	background("#d3d3d3")
    image(imgMario, marioX, marioY, 40, 70)
	if(noseX < 300){
		marioX += 1
	}
	if(noseX > 300){
		marioX -= 1
	}
	if(noseY < 150){
		marioY -= 1
	}
	if(noseY > 150){
		marioY += 1 
	}
	game()

}
function modelLoaded(){
	console.log("modelo inicializado")
}
function gotPoses(results){
    if(results.length > 0){
       noseX = results[0].pose.nose.x
	   noseY = results[0].pose.nose.y
	}
}






