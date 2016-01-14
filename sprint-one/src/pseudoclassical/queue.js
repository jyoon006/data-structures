var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.list = {};
  this.begin = 1;
  this.end = 1;
};

Queue.prototype.size = function () {
  return this.count;
}

Queue.prototype.enqueue = function (value) {
  this.count++;
  this.list[this.end] = value;
  this.end++;
}

Queue.prototype.dequeue = function () {
  var temp = this.list[this.begin];
  delete this.list[this.begin];
  this.begin++;
  if (this.count > 0) {
    this.count--;
  }
  return temp;g
}