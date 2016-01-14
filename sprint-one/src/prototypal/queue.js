var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var x = Object.create(queueMethods);
  x.count = 0;
  x.end = 0;
  x.storage = {};
  return x;
};

var queueMethods = {
  size: function() {   
    return this.count;
  },
  enqueue: function(value) { 
    this.count++; 
    this.end++;
    this.storage[this.end] = value;
  },
  dequeue: function() {   
    var temp = this.storage[this.end - (this.count - 1)];
    delete this.storage[this.end - (this.count - 1)];
    if(this.count > 0) {
      this.count--;
    }
    return temp;
  }
};







