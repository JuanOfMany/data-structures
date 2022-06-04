var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
var test = false;

  this.children.forEach(function(child){
    if (child.value === target) {
    test = true;
    }
    if (child.children.length > 0) {
      child.children.forEach(function(innerChild) {
        if (innerChild.value === target) {
          test = true;
        }
      })
    }
  })

  return test;
};



/*
 * Complexity: What is the time complexity of the above functions?
go eat dinner! watch the office or something!

 */

