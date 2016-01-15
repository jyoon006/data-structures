

// ###Graph Solution

// Instantiate a new graph
var Graph = function(value) {
  this.value = value;
  this.nodes = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  if (!this.contains(node)){ 
    this.nodes[JSON.stringify(node)] = new Graph(node);
  }
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if(this.nodes[JSON.stringify(node)]) {
    return true;
  }
  else {
    return false;
  }
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  delete this.nodes[JSON.stringify(node)];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  if(this.nodes[JSON.stringify(fromNode)].nodes[JSON.stringify(toNode)]) {
    return true;
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[JSON.stringify(fromNode)].addNode(toNode);
  this.nodes[JSON.stringify(toNode)].addNode(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[JSON.stringify(fromNode)].nodes[JSON.stringify(toNode)];
  delete this.nodes[JSON.stringify(toNode)].nodes[JSON.stringify(fromNode)];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
