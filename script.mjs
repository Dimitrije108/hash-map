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
    // Throw an error when accessing an out of bound index
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
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

  get = (key) => {
    const index = this.hash(key);
    // Throw an error when accessing an out of bound index
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    if (this.buckets[index].contains(key)) {
      return this.buckets[index].getValue(key);
    } else {
      return null;
    }
  };

  has = (key) => {
    const index = this.hash(key);
    // Throw an error when accessing an out of bound index
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    return this.buckets[index].contains(key);
  };

  remove = (key) => {
    const index = this.hash(key);
    // Throw an error when accessing an out of bound index
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    if (this.buckets[index].contains(key)) {
      const itemIndex = this.buckets[index].find(key);
      this.buckets[index].removeAt(itemIndex);
      return true;
    } else {
      return false;
    }
  };

  length = () => {
    let sum = 0;
    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        sum += bucket.size();
      }
    });
    return sum;
  };

  clear = () => {
    this.buckets = new Array(16).fill(null);
  };

  keys = () => {
    let arr = [];
    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        arr = arr.concat(bucket.getKeys());
      }
    });
    return arr;
  };

  values = () => {
    let arr = [];
    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        arr = arr.concat(bucket.getValues());
      }
    });
    return arr;
  };

  entries = () => {
    let arr = [];
    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        // transfer all returned subarrays from buckets into the main array
        bucket.getEntries().forEach((subArr) => {
          arr.push(subArr);
        });
      }
    });
    return arr;
  };
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
console.log(test.get("elephant"));
console.log(test.has("jimmer"));
console.log(test.remove("dog"));
console.log(test.length());
// console.log(test.clear());
console.log(test.buckets);
console.log(test.keys());
console.log(test.values());
console.log(test.entries());

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
