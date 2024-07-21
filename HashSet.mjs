#!/usr/bin/env node
import LinkedListSet from "./LinkedListSet.mjs";

export default class HashSet {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.buckets = new Array(this.capacity).fill(null);
  }
  // Expand buckets and copy entries over to the new list
  grow = () => {
    this.capacity = this.capacity * 2;
    let prevList = this.keys();
    this.buckets = new Array(this.capacity).fill(null);

    prevList.forEach((key) => {
      this.set(key);
    });
  };
  // Check if the buckets need to grow to support more values
  checkCapacity = () => {
    if (this.length() > this.loadFactor * this.capacity) {
      this.grow();
    }
  };
  // Throw an error when accessing an out of bound index
  checkBounds = (index) => {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
  };
  // Convert key into a hash code
  hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      // modulo after each iteration because JavaScript is unable to
      // hold large numbers precisely and can cause issues
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  };
  // Adds a key to the hash map
  set = (key) => {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    this.checkBounds(index);
    // Make a new linked list if the bucket is empty, if the key already
    // exists return message, or append to the linked list that's already there
    if (bucket === null) {
      this.buckets[index] = new LinkedListSet(key);
    } else if (bucket.contains(key)) {
      return "Key already exists";
    } else {
      bucket.append(key);
    }
    this.checkCapacity();
  };
  // Returns true or false based on whether or not the key is in the hash map
  has = (key) => {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    this.checkBounds(index);
    // Check if bucket is populated first
    return bucket === null ? false : bucket.contains(key);
  };
  // Remove key and return true, or false if no key is found
  remove = (key) => {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    this.checkBounds(index);

    if (bucket === null || !bucket.contains(key)) {
      return false;
    }

    const itemIndex = bucket.find(key);

    if (itemIndex === bucket.size()) {
      this.buckets[index] = null;
    } else {
      bucket.removeAt(itemIndex);
    }
    return true;
  };
  // Return the number of stored keys in the hash map
  length = () => {
    let length = 0;
    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        length += bucket.size();
      }
    });
    return length;
  };
  // Remove all entries in the hash map
  clear = () => {
    this.buckets = new Array(this.capacity).fill(null);
  };
  // Return an array containing all the keys
  keys = () => {
    let arr = [];
    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        arr = arr.concat(bucket.getKeys());
      }
    });
    return arr;
  };
}
