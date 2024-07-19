#!/usr/bin/env node

// index needed to access a bucket
// to limit bucket length:

class HashMap {
  constructor() {}

  hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
    }

    return hashCode;
  };

  // set = (key, value) => {
  // every bucket when receving a value needs to create a linked list
  // and first item in is linked list's head;
  // if the key already exists overwrite(update) old value
  // if a bucket is already populated by one value and another value
  // is assigned to the same bucket, then the collision is resolved
  // creating a linked list
  // }

  // index = hash(key);
  // if (index < 0 || index >= buckets.length) {
  //   throw new Error("Trying to access index out of bound");
  // }
}

const test = new HashMap();
console.log(test.hash("apple"));
console.log(test.hash("banana"));
console.log(test.hash("carrot"));
console.log(test.hash("dog"));
console.log(test.hash("elephant"));
console.log(test.hash("frog"));
console.log(test.hash("grape"));
console.log(test.hash("hat"));
console.log(test.hash("ice cream"));
console.log(test.hash("jacket"));
console.log(test.hash("kite"));
console.log(test.hash("lion"));
