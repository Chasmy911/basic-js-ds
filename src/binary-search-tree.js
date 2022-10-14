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
    return node.data === data ? true : false;
  }

  find(data, node = this.start) {
    if(node === null) {
        return null;
    } else if(data < node.data) {
        return this.find(data, node.left);
    } else if(data > node.data) {
        return this.find(data, node.right);
    } else {
        return node;
    }
  }


  remove(data) {
    this.start = this.removeNode(data, this.start);
}

removeNode(data, node = this.start) {
    if(node === null) {
        return null;
    } else if(data < node.data) {
        node.left = this.removeNode(data, node.left);
        return node;
   
    } else if(data > node.data) {
        node.right = this.removeNode(data, node.right);
        return node;
 
    } else {
       
        if(node.left === null && node.right === null) {
            node = null;
            return node;
        }

        if(node.left === null) {
            node = node.right;
            return node;
        } else if(node.right === null) {
            node = node.left;
            return node;
        }

        let newNode = this.minNode(node.right);
        node.data = newNode.data;
        node.right = this.removeNode(newNode.data, node.right);
        return node;
    }
}

minNode(node = this.start) {
  let tempNode = node;
  while (tempNode.left != null) {
    tempNode = tempNode.left;
  }
  return tempNode;
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