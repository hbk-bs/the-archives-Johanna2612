
// this is a comment
//. this is global scope

const mytext = "Hello World";

function setup() {
	// this is function scope
	// setup is executed once
	createCanvas(500, 500);
	background(226, 189, 146); //cream//
	fill(193, 89, 63); //red//

	const x = (n) => width * n;
	const y = (n) => height * n;
	const s = (n) => width * n;

	circle(x(0.4), y(0.3), s(0.15));

	stroke(193, 124, 6); //peru//
	fill(193, 124, 6);
	ellipse(x(0.1), y(0.5), s(0.5), s(0.1)),
		ellipse(x(0.05), y(0.45), s(0.2), s(0.05)),
		ellipse(x(0.8), y(0.5), s(0.6), s(0.1)),
		fill(207, 153, 86);
	rect(x(0), y(0.5), s(1), s(0.5));

	fill(164, 124, 104); //rosybrown//
	ellipse(x(1.1), y(0.57), s(0.8), s(0.04));
	ellipse(x(0), y(0.71), s(0.6), s(0.09));
	ellipse(x(0.85), y(0.5), s(0.65), s(0.03));
	ellipse(x(0.1), y(0.5), s(0.5), s(0.04));

	fill(193, 124, 6);
	ellipse(x(0.9), y(0.55), s(0.5), s(0.03));
	ellipse(x(0.1), y(0.7), s(0.4), s(0.06));
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
		const name = prompt("extreme_long_shot", `out-${Date.now()}.png`);
		save(name);
	}
}
