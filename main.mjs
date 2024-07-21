import HashMap from "./HashMap.mjs";
import HashSet from "./HashSet.mjs";

const test = new HashMap();
const testSet = new HashSet();

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

test.set("jacket", "meow");
test.set("kite", "awaw");

test.set("moon", "silver");

test.set("dog", "perro");
test.set("hat", "sombrero");

// console.log(test.get("tested"));
// console.log(test.has("elephant"));
// console.log(test.remove("apple"));
// console.log(test.length());
// console.log(test.clear());
// console.log(test.keys());
// console.log(test.values());
// console.log(test.entries());
// console.log(test.buckets);

testSet.set("apple");
testSet.set("banana");
testSet.set("carrot");
testSet.set("dog");
testSet.set("elephant");
testSet.set("frog");
testSet.set("grape");
testSet.set("hat");
testSet.set("ice cream");
testSet.set("jacket");
testSet.set("kite");
testSet.set("lion");

testSet.set("jacket");
testSet.set("jimmer");

// console.log(testSet.has("chaqueta"));
// console.log(testSet.remove("jacket"));
// console.log(testSet.length());
// console.log(testSet.clear());
// console.log(testSet.keys());
// console.log(testSet.buckets);
