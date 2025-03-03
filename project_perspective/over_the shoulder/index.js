// this is a comment
//. this is global scope

function setup() {
	// this is function scope
	// setup is executed once
	createCanvas(300, 300);
	background(250, 167, 0);
	strokeWeight(2);

	const x = (n) => width * n;
	const y = (n) => height * n;
	const s = (n) => width * n;

	fill(151, 210, 236); //lightblue//
	ellipse(x(0.3), y(0.9), s(0.5), s(0.6));
	circle(x(0.3), y(0.5), s(0.25));

	fill(102, 157, 232); //cornflowerblue//
	ellipse(x(0.8), y(0.9), s(0.6), s(0.8));
	circle(x(0.8), y(0.4), s(0.3));
}

// code zum exportieren von bilder
// gehört ausserhalb von setup oder draw ans Ende eures Programms

function keyPressed() {
	if (key === "s") {
		const name = prompt("over_the_shoulder", `out-${Date.now()}.png`);
		save(name);
	}
}
