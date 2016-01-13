var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var stack = {storage: {}, size: 0};
  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods =  {
  size: function() {  
  return 0;
  }
};

//Stack.size()
