var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  var indexOf = this._storage.indexOf(item);
  this._storage.splice(indexOf, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
