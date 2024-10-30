class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(value) {
      const node = new Node(value);
      if (this.head === null) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
    }
  
    prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      if (this.tail === null) {
        this.tail = newNode;
      }
    }
  
    size() {
      let current = this.head;
      let count = 0;
      while (current !== null) {
        count++;
        current = current.next;
      }
      return count;
    }
  
    Head() {
      return `The first node is ${this.head === null ? null : this.head.data}`;
    }
  
    Fail() {
      if (this.head === null) return 'The list is empty';
      return `The last node is ${this.tail.data}`;
    }
  
    at(index) {
      if (index < 0 || index >= this.size()) return 'Invalid index';
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return `The chosen data is ${current.data}`;
    }
  
    pop() {
      if (this.head === null) return 'The list is empty';
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        let current = this.head;
        while (current.next.next !== null) {
          current = current.next;
        }
        current.next = null;
        this.tail = current;
      }
    }
  
    contains(value) {
      let current = this.head;
      while (current !== null) {
        if (current.data === value) return true;
        current = current.next;
      }
      return false;
    }
  
    find(value) {
      let current = this.head;
      let index = 0;
      while (current !== null) {
        if (current.data === value) return index;
        current = current.next;
        index++;
      }
      return null;
    }
  
    toString() {
      let current = this.head;
      let result = '';
      while (current !== null) {
        result += `${current.data} -> `;
        current = current.next;
      }
      result += `null`;
      return result
    }
  
    insertAt(value, index) {
      if (index < 0 || index > this.size()) return 'Invalid index';
      if (index === 0) {
        this.prepend(value);
        return;
      }
      const newNode = new Node(value);
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
      if (index === this.size() - 1) {
        this.tail = newNode;
      }
    }
  
    removeAt(index) {
      if (index < 0 || index >= this.size()) return 'Invalid index';
      if (index === 0) {
        this.head = this.head.next;
        if (this.head === null) this.tail = null;
        return;
      }
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      current.next = current.next.next;
      if (index === this.size() - 1) {
        this.tail = current;
      }
    }
  }
  
  class Node {
    constructor(value) {
      this.data = value;
      this.next = null;
    }
  }
  

  // example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString()); // dog -> cat -> parrot -> hamster -> snake -> turtle ->
