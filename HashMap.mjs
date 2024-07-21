#!/usr/bin/env node
import LinkedList from "./LinkedList.mjs";

export default class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.buckets = new Array(this.capacity).fill(null);
  }
  // Expand buckets and copy entries over to the new list
  grow = () => {
    this.capacity = this.capacity * 2;
    let prevList = this.entries();
    this.buckets = new Array(this.capacity).fill(null);

    prevList.forEach((entry) => {
      this.set(entry[0], entry[1]);
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
  // Adds a key, value pair to the hash map
  set = (key, value) => {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    this.checkBounds(index);
    // If the key exists overwrite its value, otherwise make a new linked list if
    // the bucket is empty, or append to the linked list that's already there
    if (bucket === null) {
      this.buckets[index] = new LinkedList(key, value);
    } else if (bucket.contains(key)) {
      bucket.replaceValue(key, value);
    } else {
      bucket.append(key, value);
    }
    this.checkCapacity();
  };
  // Returns the value for the given key, if no key is found return null
  get = (key) => {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    this.checkBounds(index);
    // Check if bucket is populated first
    return bucket === null ? null : bucket.getValue(key);
  };
  // Returns true or false based on whether or not the key is in the hash map
  has = (key) => {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    this.checkBounds(index);
    // Check if bucket is populated first
    return bucket === null ? false : bucket.contains(key);
  };
  // Remove key, value entry and return true, or false if no key is found
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
  // Return an array containing all the values
  values = () => {
    let arr = [];
    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        arr = arr.concat(bucket.getValues());
      }
    });
    return arr;
  };
  // Return an array that contains each key, value pair
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
