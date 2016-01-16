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

// binarySearchTree.insert(2);
//     console.log(binarySearchTree);
//     binarySearchTree.insert(3);
//     binarySearchTree.insert(7);
//     binarySearchTree.insert(6);
//     expect(binarySearchTree.left.right.value).to.equal(3);
//     expect(binarySearchTree.right.left.value).to.equal(6);

BinarySearchTree.prototype.contains = function(value){
  return true;
}

BinarySearchTree.prototype.depthFirstLog = function(cb){
  
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
 