var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(new Tree(value));
};

treeMethods.contains = function(target){
  if(this.value === target) { 
    return true;
  }
  for(var i = 0; i < this.children.length; i++) {
    if(this.children[i].contains(target)) {
      return true;
    }
  } 
  return false;
};

treeMethods.traverse = function(cb, tree) {
  tree = tree || this;
  if(tree.value) {
    cb(tree.value);
  }

  for (var i = 0; i < tree.children.length; i++) {
    tree.traverse(cb, tree.children[i]);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addChild(): O(1)
 * contains(): O(N)
 *
 */
 
