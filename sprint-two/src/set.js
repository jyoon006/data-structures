var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = new HashTable();
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if (!(typeof item === "object" && Object.keys(item).length < 1)) {
    this._storage.insert(JSON.stringify(item), item);
  }
};

setPrototype.contains = function(item){
  return (!!this._storage.retrieve(JSON.stringify(item)) || (this._storage.retrieve(JSON.stringify(item)) === 0));
};

setPrototype.remove = function(item){
  delete this._storage.remove(JSON.stringify(item));
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * add()     : O(1)
 * contain() : O(1)
 * remove()  : O(1)
 *
 */
