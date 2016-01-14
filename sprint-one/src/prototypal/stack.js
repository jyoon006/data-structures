var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var x = Object.create(stackMethods);
  x.counter = 0;
  x.list = {};
  return x;
};


//object.create(stackMethods)

var stackMethods = {
    push: function(value) {
      this.counter++;
      this.list[this.counter] = value;
    },
    pop: function() {
      var temp = this.list[this.counter];
      delete this.list[this.counter];
      if (this.counter > 0) {
        this.counter--;
      }
      return temp;
    },
    size: function() {
      return this.counter;
    }      
  

};



