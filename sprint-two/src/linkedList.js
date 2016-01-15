var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // runs if no tail is defined
    if (list.tail === null){
      // creates new node at tail with passed in value
      list.tail = new Node(value);
      // points head at said new tail
      list.head = list.tail;
      // runs if there is an existing tail
    } else {
      // creates new node at the current tails next property
      list.tail.next = new Node(value);
      // sets the tail to said new node
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    // runs if there is a head
    if (list.head !== null) {
      // creates a temp variable to hold the value of the head
      var temp = list.head.value;
      // sets the new head to point to the current head's next
      list.head = list.head.next;
    }
    // returns undefined if there was no head the the previous
    // heads value if there was
    return temp;
  };
  
  list.contains = function(target, node){
    // sets node for testing to head if one was not provided
    node = node || list.head;
    // returns true if the value equals the target
    if (node.value === target) {
      return true;
    // runs contains on the next node if there is a next node
    } else if (node.next) {
      return list.contains(target, node.next);
    // if the current nodes value doesn't equal the target
    // and doesn't have a next node then returns false;
    } else {
      return false;
    }
  }
  
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 
 addToTail: O(1)
 removeHead: O(1)
 contains: O(n)
 
 */
