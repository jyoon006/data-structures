var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  //var startingPoint = 0;
  var endingPoint = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    count++;
    endingPoint++;
    storage[endingPoint] = value;
  };

  someInstance.dequeue = function(){
    var x = storage[endingPoint - (count - 1)];
    delete storage[endingPoint - (count - 1)];
    if (count > 0) {
      count--;
    }
    return x;
  };

  someInstance.size = function(){
    return count;
  };
  
  return someInstance;
};

//{2:b, 3: c, 4: d}
// count: 3
// ending point: 4
// startingPoint = endingPoint - (count - 1);



