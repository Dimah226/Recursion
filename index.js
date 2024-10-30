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
          while (current.next.next!== null) {
            current = current.next;
          }
          current.next = null;
          this.tail = current;
        }
  
    }
    contains(value){
        let current = this.head;
        while (current!== null) {
          if (current.data === value) return true;
          current = current.next;
        }
        return false;
  
    }

    find(value){
        let current = this.head;
        let index=0
        while (current!== null) {
          if (current.data === value) return index;
          current = current.next;
          index++;
        }
        return null;
    }

    toString(){
        let current = this.head;
        let result = '';
        while (current!== null) {
          result += `${current.data} -> `;
          current = current.next;
        }
        return result.slice(0, -3);  // Supprime le dernier " -> "
  
    }

  }
  
  class Node {
    constructor(value) {
      this.data = value;
      this.next = null;
    }
  }
  
  // Exemples de test
  const test = new LinkedList();
  test.append(5);
  test.append(3);
  test.append("dimah");
  test.prepend(7);
  test.pop
  console.log(test.Fail());          // The last node is dimah
  console.log(test.size());           // 4
  console.log(test.at(1));            // The chosen data is 5
  console.log(test.toString());                  // Affiche la liste chaînée complète
  