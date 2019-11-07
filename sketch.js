let socket;
let xSize = 1280;
let ySize = 720;

let Player1;

function setup() {
	createCanvas(xSize, ySize);	
//	socket = io.connect();
    socket.on('player2Data', player2);
}

function player2(player2Data) {
  noStroke();
  fill("blue");
  rect(1230, player2Data.y, 20, 60);

}

function draw() {
  background("black");
  
  Player1 = new player1();
  Player1.display();
  Player1.move();
  
}

class player1 {
	constructor() {
		this.xPos = 50;
		this.yPos = 100;
		this.width = 20;
		this.height = 60;
		this.speed = 10;
	}

	display() {
		noStroke();
		fill("red");
		rect(this.xPos, this.yPos, this.width, this.height);
	}

	move() {
		if(keyIsDown(38) && this.yPos > 0) {
			this.yPos -= this.speed;
		}

		if(keyIsDown(40) && this.yPos < ySize) {
			this.yPos += this.speed;
		}
	}
}

let player2Data = {
  y: player1.yPos
}
socket.emit('player2Data', player2Data);






