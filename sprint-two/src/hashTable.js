var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);
  console.log(this.retrieve(i));
  if (this._storage.get(i)) {  
    for(var j = 0; j < this._storage.get(i).length; j++) {
      if(this._storage.get(i)[j][0] === key) {
        this._storage.get(i)[j][1] = value;
        return true;
      } 
    }
    this._storage.get(i).push([key, value]); 
    return true;   
  }
  this._storage.set(i, [[key, value]]);
  return true;
};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  if(this._storage.get(i)) {  
    for(var j = 0; j < this._storage.get(i).length; j++) {
      if(this._storage.get(i)[j][0] === key) {
        return this._storage.get(i)[j][1];
        
      } 
    }
    return null;
  }
  return null;
};

HashTable.prototype.remove = function(key){
  var value = this.retrieve(key);
  this._storage.each(function (item, index, array) {
    if(item) {
      // console.log(item[1], array[index]);
      if(item[1] == value ) {
        array[index] = null;
      }
    }  
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
