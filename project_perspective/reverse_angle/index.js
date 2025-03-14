// this is a comment
//. this is global scope


function setup() {
	// this is function scope
	// setup is executed once
	createCanvas(500, 500);
	//orange//
	background(250, 167, 0);
	strokeWeight(2);

	const x = (n) => width * n;
	const y = (n) => height * n;
	const s = (n) => width * n;

	fill(151, 210, 236); //lightblue//
	ellipse(x(0.3), y(0.5), s(0.4), s(0.5));
	circle(x(0.3), y(0.15), s(0.15));

	fill(102, 157, 232); //cornflowerblue//
	ellipse(x(0.65), y(0.5), s(0.4), s(0.5));
	circle(x(0.65), y(0.15), s(0.15));

	fill(250, 167, 0);
	stroke(250, 167, 0);
	rect(x(0), y(0.5), s(1), s(0.5));

	stroke(2, 0, 0);
	fill(102, 157, 232); //cornflowerblue//
	ellipse(x(0.3), y(1), s(0.4), s(0.5));
	circle(x(0.3), y(0.65), s(0.15));

	fill(151, 210, 236); //lightblue//
	ellipse(x(0.65), y(1), s(0.4), s(0.5));
	circle(x(0.65), y(0.65), s(0.15));

	line(x(0), y(0.5), s(1), s(0.5));
}

function draw() {
	// this is function scope
	// draw is executed all the time
	//background("black");
}

// code zum exportieren von bilder
// gehört ausserhalb von setup oder draw ans Ende eures Programms

function keyPressed() {
	if (key === "s") {
		const name = prompt("reverse_angle", `out-${Date.now()}.png`);
		save(name);
	}
}
