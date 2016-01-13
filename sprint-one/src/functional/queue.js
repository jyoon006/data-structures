var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    count++;
    storage[count] = value;
  };

  someInstance.dequeue = function(){
    var x = storage[count];
    delete storage[count];
    if (count > 0) {
      count--;
    }
    return x;
  };

  someInstance.size = function(){
    return count;
  };
  //testing
  return someInstance;
};




