var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var stack = {storage: {}, count: 0};
  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods =  {
  size: function() {   
    return this.count;
  },
  push: function(value) {   
    this.count++;
    this.storage[this.count] = value;
  },
  pop: function() {
    var temp = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return temp;
  }
};

//Stack.size()


// it('reports a size of zero for a new stack', function() {
//         expect(stack.size()).to.equal(0);
//       });