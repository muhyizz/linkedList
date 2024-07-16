#!/usr/bin/node

export class Node {
  constructor(value) {
    this.value = value || null;
    this.nextNode = null;
  }
}
