var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var result = {
    count: 0,
    enqueueCount: 1,
    dequeueCount: 1,
    storage: {}
  }; 
  _.extend(result, queueMethods);
  
  return result;
};

var queueMethods = {
  size: function () {
    return this.count;
  },
  
  enqueue: function (value) {
    this.count++;
    this.storage[this.enqueueCount] = value;
    this.enqueueCount++;
  },
  
  dequeue: function () {
    
  }
};


