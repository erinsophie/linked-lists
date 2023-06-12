import Node from 'node.js';

class LinkedList {
  constructor() {
    this.head = null;
  }

  // add node at end of list
  append(value) {
    if (this.head === null) this.head = new Node(value);
    else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(value);
    }
  }

  // add node at start of list
  prepend(value) {
    this.head = new Node(value, this.head);
  }

  // return total number of nodes
  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  // return first node in list
  getHead() {
    return this.head;
  }

  // return last node in list
  tail() {
    let currentNode = this.head;
    while (currentNode && currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // return node at given index
  at(index) {
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode) {
      if (currentIndex === index) return currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }
    return 'Index is out of bounds';
  }

  // remove last item from list
  pop() {
    // if there is only 1 item in list
    if (this.head.next === null) this.head = null;
    else {
      let curr = this.head;
      let prev = null;
      while (curr.next) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = null;
    }
  }

  // return true if list contains given value
  contains(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  // returns the index of the node containing the given value
  find(value) {
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode) {
      if (currentNode.value === value) return currentIndex;
      currentIndex++;
      currentNode = currentNode.next;
    }
    return null;
  }

  // prints the values in a single string format
  toString() {
    if (this.head === null) return 'List is empty';

    let currentNode = this.head;
    let string = '';
    while (currentNode) {
      string += `(${currentNode.value}) -> `;
      currentNode = currentNode.next;
    }
    return `${string}null`;
  }

  // inserts a new node with the provided value at the given index.
  insertAt(value, index) {
    if (index === 0) this.prepend(value);
    else {
      let currentNode = this.head;
      let prev;
      let currentIndex = 0;

      // while we havent reached end of list yet
      // and the index has not been found, keep looping
      while (currentNode && currentIndex !== index) {
        prev = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      // if we reach end of list and no index found, return error message
      if (currentIndex !== index) {
        return 'Index is out of bounds';
      }

      const newNode = new Node(value);
      prev.next = newNode;
      newNode.next = currentNode;
    }
  }

  // remove node at given index
  removeAt(index) {
    if (this.head === null) return 'List is empty';
    // If index is 0, point head to the next node
    if (index === 0) this.head = this.head.next;
    else {
      let currentNode = this.head;
      let prev;
      let currentIndex = 0;

      while (currentNode && currentIndex !== index) {
        prev = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      prev.next = currentNode.next;
    }
  }
}

export default LinkedList;
