let socket;
let xSize = 1280;
let ySize = 720;


function setup() {
	createCanvas(xSize, ySize);	
	socket = io.connect();
}


function draw() {
	background(50);
}

class player1 {
	constructor() {
		this.xPos = x;
		this.yPos = y;
		this.width = wdth;
		this.height = hght;
		this.speed = speed;
	}

	display() {
		noStroke();
		fill("red");
		rect(this.xPos, this.yPos, this.width, this.height);
	}

	move() {
		if(keyIsDown(38)) {
			this.yPos -= this.speed;
		}

		if(keyIsDown(40)) {
			this.yPos += this.speed;
		}
	}
}
