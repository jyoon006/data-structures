var HashTable = function(limit){
  this._limit = limit || 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);
  if (this._storage.get(i)) {  
    for(var j = 0; j < this._storage.get(i).length; j++) {
      if(this._storage.get(i)[j][0] === key) {
        this._storage.get(i)[j][1] = value;
        return true;
      } 
    }
    this._storage.get(i).push([key, value]); 
    this._count++;
      if(this._count >= this._limit * .75) {
        this._resize(this._limit * 2);
      }
    return true;   
  }
  this._storage.set(i, [[key, value]]);
  this._count++;
    if(this._count >= this._limit * .75) {
      this._resize(this._limit * 2);
    }
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
  var context = this;
  this._storage.each(function (item, index, array) {
    if(item) {
      for (var j = 0; j < item.length; j++) {
        if(item[j]) {
          if (item[j][0] === key) {
            context._count--;
            item.splice(j, 1);
            if(context._count < context._limit * .25) {
              context._resize(context._limit/2);
            }
            return true;
          }
        }
      }
    }
    return false;
  });
};

HashTable.prototype._resize = function(max){
  
  var tempStorage = new LimitedArray(this._limit);
  this._storage.each(function(item, index, array) {
    tempStorage.set(index, item);    
  });
  
  this._limit = max;
  this._count = 0;
  this._storage = new LimitedArray(this._limit);

  var context = this;
  tempStorage.each(function(item, index, array) {
    if (item) {
      for (var i = 0; i < item.length; i++){
        context.insert(item[i][0], item[i][1]);
      }
    }
  });

};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert()  : O(N)
 * retrieve(): O(N)
 * remove()  : O(N)
 *
 */
