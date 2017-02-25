const fs = require('fs');

class Utility {

	static read(input) {
		return fs.readFileSync(input).toString().split('\n').map(line => {
			return line.split(' ').map(i => +i);
		});
	}

	static write(file, output) {
		fs.writeFileSync(file, output);
	}

	static arg(index) {
		return process.argv[2 + index];
	}

}

module.exports = Utility;