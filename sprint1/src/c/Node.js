class Node {

	constructor(value) {
		this._left = null;
		this._right = null;
		this._value = value;
	}

	get left() {
		return this._left;
	}

	set left(node) {
		this._left = node;
	}

	get right() {
		return this._right;
	}

	set right(node) {
		this._right = node;
	}

	get value() {
		return this._value;
	}

	set  value(node) {
		this._value = node;
	}

	hasLeft() {
		return this._left != null;
	}

	hasRight() {
		return this._right != null;
	}
}

module.exports = Node;