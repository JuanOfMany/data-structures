// Instantiate a new graph
var Graph = function() {
  this.nodes = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Object.keys(this.nodes).includes(String(node));
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var temp = this;
  this.nodes[node].forEach(function(connectedNode){
    temp.removeEdge.apply(temp, [node, connectedNode])
  })
  delete (this.nodes[node])
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode].includes(toNode)) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  var index = this.nodes[fromNode].indexOf(toNode)
  this.nodes[fromNode].splice(index, 1);
  index = this.nodes[toNode].indexOf(toNode);
  this.nodes[toNode].splice(index, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var stringKeys = Object.keys(this.nodes);
  var numKeys = []
  stringKeys.forEach(function(string) {
    numKeys.push(Number(string));
  })
  numKeys.forEach(cb);
};

// var newTree = new Graph();
/*
 * Complexity: What is the time complexity of the above functions?
 */

