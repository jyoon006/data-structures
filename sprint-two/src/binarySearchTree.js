var BinarySearchTree = function(value) {
  this.value = value;
  this.left, this.right;
};

BinarySearchTree.prototype.insert = function(value, tree){
  tree = tree || this;
  if(value < tree.value) {
    if(tree.left) {
      tree.insert(value, tree.left);
    } else {
      tree.left = new BinarySearchTree(value);
    }
  } else {
    if(tree.right) {
      tree.insert(value, tree.right);
    } else {
      tree.right = new BinarySearchTree(value);
    }
  }
}

BinarySearchTree.prototype.contains = function(value, tree){
  tree = tree || this;
  if (tree.value === value) {
    return true;
  }
  if (value < tree.value) {
    if(tree.left) {
      return tree.contains(value, tree.left);
    }
    return false;  
  }
  if (tree.right) {
    return tree.contains(value, tree.right);
  }
  return false;
}

BinarySearchTree.prototype.depthFirstLog = function(cb){
  
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
 