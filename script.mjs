#!/usr/bin/env node
import LinkedList from "./LinkedList.mjs";

class HashMap {
  constructor() {
    this.buckets = new Array(16).fill(null);
  }

  hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
    }

    return hashCode;
  };

  set = (key, value) => {
    // NEED TO ADD GROWTH LATER
    const index = this.hash(key);
    // If the key exists, overwrite the value, otherwise make a new linked
    // list if bucket is empty, or append to the linked list thats already there
    if (this.buckets[index] === null) {
      this.buckets[index] = new LinkedList(key, value);
    } else if (this.buckets[index].contains(key)) {
      this.buckets[index].replaceValue(key, value);
    } else {
      this.buckets[index].append(key, value);
    }
  };
  //  throw an error when accessing an out of bound index
  // if (index < 0 || index >= buckets.length) {
  //   throw new Error("Trying to access index out of bound");
  // }
}

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
console.log(test.buckets);

// console.log(test.hash("apple"));
// console.log(test.hash("banana"));
// console.log(test.hash("carrot"));
// console.log(test.hash("dog"));
// console.log(test.hash("elephant"));
// console.log(test.hash("frog"));
// console.log(test.hash("grape"));
// console.log(test.hash("hat"));
// console.log(test.hash("ice cream"));
// console.log(test.hash("jacket"));
// console.log(test.hash("kite"));
// console.log(test.hash("lion"));
