//I: any value
//O:
//C:
//E:

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {

  var newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.tail = newNode;
  };
  // var currentNode = this.head.value;


  list.removeHead = function() {
    var deletedHead = this.head.value;
    this.head = this.head.next;
    return deletedHead;
  };

  list.contains = function(target) {

    var temp = this.head;
    while ( temp.value === target || temp.next !== null) {
      if ( temp.value === target) {
        return true
      }
        temp = temp.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
