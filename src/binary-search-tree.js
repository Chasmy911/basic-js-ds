const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.start = null;
  }
  
  root() {
    return this.start;
  }
 
  add(value) {
    this.start = addWithin(this.start, value);

    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.value === value) {
        return node;
      }

      if (value < node.value) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }

      return node;
    }
  }


  has(value) {
    const node = this.find(value);
    if (node === null) {
      return false;
    }
    return node.value === value?true:false;
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min(node = this.root) {
    if (!this.root) {
      return;
    }

    while (node.left) {
      node = node.left;
    }

    return node.value;
  }

  max(node = this.root) {
    if (!this.root) {
      return;
    }

    while (node.right) {
      node = node.right;
    }

    return node.value;
  }
}

module.exports = {
  BinarySearchTree
};