const myMap = new Map();
myMap.set("one", 1);
myMap.set("two", 2);
myMap.set("three", 3);

console.log(myMap.keys());

for (const key of myMap.keys()) {
  console.log(key);
}
for (const value of myMap.values()) {
  console.log(value);
}
for (const entries of myMap.entries()) {
  console.log(entries);
}

console.log(myMap.size); // map의 길이
console.log(myMap.has("two")); // key기반 검색
