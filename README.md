# Hash Map

Data structure storing collection of key, value pairs. Helps with mapping keys to values for highly efficient operations like the lookup, insertion and deletion operations.

Hash classes with methods:

- hash(key) - converts a key into hash code (hashes the key);
- checkCapacity() - checks if hash map/set capacity is exceeded;
- grow() - grow the hash map/set once capacity is exceeded;
- checkBounds() - throw an error when accessing an out of bound index;

A HashMap class containing methods:

- set(key, value) - adds a key, value pair to the hash map;
- get(key) - returns the value for the given key, or null;
- has(key) - returns true or false based on whether or not the key is in a hash map;
- remove(key) - removes key, value entry and returns true, or false if no key is found;
- length() - returns the number of stored keys in a hash map;
- clear() - removes all entries in a hash map;
- keys() - returns an array containing all the keys;
- values() - returns an array containing all the values;
- entries() - returns an array containing each key, value pair;

# Hash Set

Data structure storing collection of items where every item is unique;

Methods:

- set(key) - adds a key to the hash set;
- has(key) - returns true or false based on whether or not the key is in a hash set;
- remove(key) - removes key and returns true, or false if no key is found;
- length - returns the number of stored keys in a hash set;
- clear - removes all entries in a hash set;
- keys - returns an array containing all the keys;
