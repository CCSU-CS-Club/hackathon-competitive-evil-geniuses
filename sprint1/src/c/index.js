const u = require('../Utility');
const _ = require('lodash');
let BinaryTree = require('./BinaryTree');

let input = u.read(u.arg(0));
let output = u.arg(1);


let collection = new Array(input[0][0]);
let size = input[0][1];

for (let i = 0; i < collection.length; i++) {
	collection[i] = new BinaryTree();

	for (let j = 0; j < size; j++) {
		collection[i].push(input[i + 1][j]);
	}
}

function compare(a, b) {

	if (a == null && b == null) {
		return true;
	}

	if (a != null && b != null)
    {
        return compare(a.left, b.left) && compare(a.right, b.right);
    }

    return false;
};

let count = 0;

for (let i = 0; i < collection.length - 1; i++) {
	let flag = false;
	for (let j = i; j < collection.length; j++) {
		if (compare(collection[i].root, collection[j].root)) {
			flag = true;
			break;
		}
	}

	if (flag) {
		count++;
	} else {
		count--;
	}
}

u.write(output, count);