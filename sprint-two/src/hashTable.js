var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);
  this._storage.set(i, value);
  console.log(this._storage);
};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  return this._storage.get(i);
};

HashTable.prototype.remove = function(key){

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
