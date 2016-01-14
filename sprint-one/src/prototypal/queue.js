var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var x = Object.create(queueMethods);
  x.count = 0;
  return x;
};

var queueMethods = {
  size: function() {   
    return this.count;
  },
  enqueue: function() { 
    this.count++; 
  },
  dequeue: function() {
    this.count--;
  }
};







