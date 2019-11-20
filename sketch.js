let socket = io();
let xSize = 1280;
let ySize = 720;
let Player1;
let Player2;
let Ball;

let initGame = true;
let startGame = false;


function setup() {
	createCanvas(xSize, ySize);
	socket = io.connect();

}

function draw() {
	background(1, 100, );

	if(initGame == true) {
		Player1 = new player1();
		Ball = new ball();

		initGame = false;
		startGame = true;
	} 
	else if (startGame == true) {
	
		Player1.display();
		Player1.move();

		Ball.display();
		Ball.move();

		let p1yData = {
			y: Player1.yPos
		}
		socket.emit('p1yPos', p1yData)

		socket.on('p1yPos', function(p1yData){
			noStroke();
			fill("white");
			rect(xSize-120, p1yData.y, 20, 140);
		});

	}
}


class player1 {
	constructor() {
		this.xPos = 100;
		this.yPos = ySize/2 - 76;
		this.width = 20;
		this.height = 140;
		this.speed = 10;
	}

	display() {
		noStroke();
		fill("white");
		rect(this.xPos, this.yPos, this.width, this.height);
	}

	move() {
		if(keyIsDown(87) && this.yPos > 0) {
			this.yPos -= this.speed;
		}

		if(keyIsDown(83) && this.yPos < ySize - this.height) {
			this.yPos += this.speed;
		}
	}

}


class ball {
	constructor() {
		this.xPos = xSize/2;
		this.yPos = ySize/2;
		this.radius = 20;
		this.xSpeed = 10;
		this.ySpeed = 10;
	}

	display() {
		noStroke();
		fill("white");
		ellipse(this.xPos, this.yPos, this.radius, this.radius);
	}

	move() {
   		if (this.xPos > width - this.radius || this.xPos < this.radius) {
      		this.xSpeed = -this.xSpeed;
    	}

    	if (this.yPos > height - this.radius || this.yPos < this.radius) {
      		this.ySpeed = -this.ySpeed;
    	}

   		 this.xPos += this.xSpeed;
    	 this.yPos += this.ySpeed;
  	}
}



