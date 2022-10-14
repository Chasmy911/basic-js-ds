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
 
  add(data) {
    this.start = addWithin(this.start, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }


  has(data) {
    const node = this.find(data);
    if (node === null) {
      return false;
    }
    return node.data === data?true:false;
  }

  find(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
 
  }

  min(node = this.start) {
    if (!this.start) {
      return;
    }

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max(node = this.start) {
    if (!this.start) {
      return;
    }

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};