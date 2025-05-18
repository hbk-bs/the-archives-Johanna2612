// this is a comment
//. this is global scope

function setup() {
	// this is function scope
	// setup is executed once
	createCanvas(500, 500);
	strokeWeight(2);
	fill(250, 167, 0); //orange//
	background(250, 167, 0);

	const x = (n) => width * n;
	const y = (n) => height * n;
	const s = (n) => width * n;

	rect(x(0.3), y(0.5), s(0.4), s(0.4));

	strokeWeight(11);
	stroke(150, 71, 4); //brown//
	line(x(0.2), y(0.2), s(0.4), s(0.6));
	stroke(244, 0, 4); //red//
	line(x(0.22), y(0.19), s(0.42), s(0.6));

	noStroke();
	fill(151, 210, 236); //lightblue//
	rect(x(0.3), y(0.6), s(0.4), s(0.3));

	//hier weitermachen//

	strokeWeight(11);
	stroke(150, 71, 4); //brown//
	line(x(0.4), y(0.6), s(0.6), s(0.8));

	stroke(12);
	stroke(244, 0, 4); //red//
	line(x(0.42), y(0.6), s(0.62), s(0.8));

	noStroke();
	fill(222, 174, 106); //sandy//
	triangle(x(0.57), y(0.8), s(0.62), s(0.77), s(0.66), s(0.85));
}

// code zum exportieren von bilder
// gehört ausserhalb von setup oder draw ans Ende eures Programms

function keyPressed() {
	if (key === "s") {
		const name = prompt("refraction", `out-${Date.now()}.png`);
		save(name);
	}
}
