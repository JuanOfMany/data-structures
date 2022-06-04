

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [];
  var tuples = [k, v];

  if (this._storage.get(index) === undefined) {
    bucket.push(tuples);
    this._storage.set(index, bucket)
  } else {
    bucket = this._storage.get(index);
    for (var i = 0; i < bucket.length; i++){
        if (bucket[i][0] === k){
          bucket[i][1] = v;
        } else {
          bucket.push(tuples);
        }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1)
    }
  }
  // console.log('buckets: ', bucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


