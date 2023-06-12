import LinkedList from '/linkedList';

const myList = new LinkedList();

// tests
myList.append(3);
myList.append(5);
myList.append(7);
console.log(myList.toString()); // (3) -> (5) -> (7) -> null
myList.prepend(1);
console.log(myList.toString()); // (1) -> (3) -> (5) -> (7) -> null
console.log(myList.size()); // 4
console.log(myList.getHead()); // returns head
console.log(myList.tail()); // Node { value: 7, next: null }
console.log(myList.at(3)); // Node { value: 7, next: null }
console.log(myList.at(5)); // Index is out of bounds
myList.pop();
console.log(myList.toString()); // (1) -> (3) -> (5) -> null
console.log(myList.contains(5)); // true
console.log(myList.contains(2)); // false
console.log(myList.find(3)); // 1
console.log(myList.find(2)); // null
myList.insertAt(7, 2);
console.log(myList.toString()); // (1) -> (3) -> (7) -> (5) -> null
myList.removeAt(1);
console.log(myList.toString()); // (1) -> (5) -> null
myList.pop();
myList.pop();
console.log(myList.toString()); // List is empty
