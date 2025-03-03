// this is a comment
//. this is global scope

function setup() {
	// this is function scope
	// setup is executed once
	createCanvas(400, 400);
	background(250, 167, 0); //orange//
	const x = (n) => width * n;
	const y = (n) => height * n;
	const s = (n) => width * n;

	fill(86, 154, 0); //green//
	noStroke();

	rect(x(0.4), y(0.3), s(0.3), s(0.6));
	rect(x(0.7), y(0.5), s(0.1), s(0.1));
	rect(x(0.75), y(0.4), s(0.1), s(0.2));
	rect(x(0.3), y(0.7), s(0.2), s(0.1));
	rect(x(0.25), y(0.6), s(0.1), s(0.2));

	fill(226, 117, 146); //pink//
	stroke(226, 117, 146);
	rect(x(0.35), y(0.25), s(0.1), s(0.1));
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
		const name = prompt("frontview", `out-${Date.now()}.png`);
		save(name);
	}
}
