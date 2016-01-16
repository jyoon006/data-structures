var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);
  this._storage.set(i, [key, value]);
};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  // return this._storage.get(i)[1];
  if(this._storage.get(i)) {   
    return this._storage.get(i)[1];
  }
  else {
    return null;
  }
};

HashTable.prototype.remove = function(key){
  var value = this.retrieve(key);
  this._storage.each(function (item, index, array) {
    if(item) {
      console.log(item[1], array[index]);
      if(item[1] == value ) {
        array[index] = null;
      }
    }  
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
