#!/usr/bin/node

import { Node } from "./node.js";

class linkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head === null) this.head = new node(value);
    else {
      let newNode = new Node(value);
      let current = this.head;
      while (current.nextNode != null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let newNode = new Node(value);
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }

  size() {
    let current = this.head;
    let size = 0;
    while (current != null) {
      size += 1;
      current = current.nextNode;
    }

    return size;
  }

  getHead() {
    return this.head ? this.head.value : null;
  }

  getTail() {
    let current = this.head;
    if (current === null) {
      return null;
    }
    while (current.nextNode != null) {
      current = current.nextNode;
    }

    return current.value;
  }

  getIndex(value) {
    let current = this.head;
    let counter = 0;
    while (current != null) {
      if (current.value === value) {
        return counter;
      }
      current = current.nextNode;
      counter += 1;
    }

    return -1;
  }

  popValue() {
    if (this.head === null) {
      return null;
    }
    if (this.head.nextNode === null) {
      this.head = null;
    }
    let current = this.head;
    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }

  contains(value) {
    if (this.head === null) {
      return null;
    }

    if (this.head.value === value) {
      return true;
    }

    let current = this.head;
    while (current !== null) {
      let check = current.value;
      if (check === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  insertAt(value, index) {
    if (index > this.size()) {
      return "index too big";
    }

    let newNode = new Node(value);

    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let counter = 0;

    while (counter < index - 1) {
      current = current.nextNode;
      counter += 1;
    }

    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
  }

  display() {
    let current = this.head;
    while (current !== null) {
      process.stdout.write(`${current.value} -> `);
      current = current.nextNode;
    }
    console.log("null");
  }
}

const ll = new linkedList();
ll.prepend(10);
ll.prepend(20);
ll.prepend(30);
ll.append(15);
ll.display();
process.stdout.write(`Size of linked list: ${ll.size()}\n`);
process.stdout.write(`Head of linked list: ${ll.getHead()}\n`);
process.stdout.write(`Tail of linked list: ${ll.getTail()}\n`);
process.stdout.write(`index of linked list: ${ll.getIndex(15)}\n`);
ll.popValue();
ll.popValue();
ll.display();
process.stdout.write(`index of linked list: ${ll.contains(15)}\n`);
process.stdout.write(`index of linked list: ${ll.contains(21)}\n`);
ll.insertAt(5, 10);
ll.insertAt(2, 0);
ll.insertAt(3, 2);
ll.display();
