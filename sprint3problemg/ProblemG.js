let u = require("./Utility");
let input = u.read(u.arg(0));

let n = input[0][0];
let k = input[0][1];
let t = input[0][2] % (Math.pow(10,9) + 7);

let people = new Array(n + 2);

for(let i = 0; i < people.length; i++){
	for(let j = 0; j < k; j++){
		if(input[1][j] == i) {
			people[i] = true;
		}
	}
	if(! people[i]) {
		people[i] = false;
	}
}

let x = 0;
for(let y = 0; y < people.length; y++) {
	if(people[y]) {
		x += y;
	}
}
let diff = x - t;

if(x > 0) {

} else {
	
}

console.log(x);
console.log(t);
console.log(people);