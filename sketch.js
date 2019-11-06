var socket;

function setup() {
	createCanvas(600,400);
	background("black")

	socket = io.connect();
	socket.on('msg', function(getal){
		console.log(getal)
	})
	socket.on('mouse', newDrawing);
}

function newDrawing(data) {
	noStroke();
	fill("red");
	ellipse(data.x, data.y, 30, 30);
}

function mouseDragged() {
	console.log('sending:' + mouseX + ',' + mouseY);
	var data = {
		x: mouseX,
		y: mouseY
	}
	socket.emit('mouse', data);

	noStroke();
	fill("white");
	ellipse(mouseX, mouseY, 30, 30);
}
