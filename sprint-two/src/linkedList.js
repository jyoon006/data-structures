var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.tail !== null) {
      list.tail.next = new Node(value);
      list.tail = list.tail.next;
    } else {
      list.tail = new Node(value);
      list.head = list.tail;
    }
    
  
  };

  list.removeHead = function(){
    var temp;
    if (list.head !== null) {
      temp = list.head.value;
      list.head = list.head.next;
    }
    return temp;
  };

  list.contains = function(target){
  };

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
 */

//{head: value, tail: 4}

/*

linkedList1
head -> node2
tail -> node4

linkedList1.addToTail(12)
new Node(12)
node2.value = 12
node2.next = node3

linkedList1.addToTail(25)
new Node(25)
node3.value = 25
node3.next = node4

linkedList1.addToTail(42)
new Node(42)
node4.value = 42
node4.next = null

5

found = false
check(sValue)
if this value = sValue
found = true
else if this.next !=== null
  found = check(this.next)
return found


*/