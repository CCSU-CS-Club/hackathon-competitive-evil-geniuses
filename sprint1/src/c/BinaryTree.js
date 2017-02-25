let Node = require('./Node');

class BinaryTree {

	constructor() {
		this.root = null;
	}

	push(value) {
		let root = this.root;

		if (! root) {
			this.root = new Node(value);

			return;
		}

		let current = root;
		let node = new Node(value); 

		while(current) {
			if(value < current.value) {
				if(! current.left) {
					current.left = node;
					break;
				} else {
					current = current.left;
				}
			} else {
				if(! current.right) {
					current.right = node;
					break;
				} else {
					current = current.right;
				}
			}
		}
}

}

module.exports = BinaryTree;