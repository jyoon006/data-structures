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
  } else if (this.children.length > 0) {  
    for(var i = 0; i < this.children.length; i++) {
      if(this.children[i].contains(target)) {
        return true;
      }
    }
  } else { 
     
    return false;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
 
