let u = require("./Utility");
let input = u.read(u.arg(0));
let numCities = input[0][0];
let distance = 0;

for(let i = 1; i < numCities; i++) {
	for(let j = i + 1; j <= numCities; j++) {
		distance += Math.abs(input[i][0] - input[j][0]) + Math.abs(input[i][1] - input[j][1]);
	}
}

let factor = Math.pow(10, 9) + 7;

distance = distance % factor;

u.write(u.arg(1), distance);