// 구조분해 할당 : destructuring
// 배열이나, 객체의 속성

// (1) 배열의 경우
let [val1, val2] = [1, "new"];
console.log("1", val1);
console.log("2", val2);

let arr = ["val1", "val2", "val3", "val4"];
let [a, b, c, d = 4] = arr;
console.log(a, b, c, d);

// (2) 객체인 경우
let user = {
  name: "mbc",
  age: 30,
};
// 이것도 구조분해 할당
// let { name, age } = user;
// console.log(name); //string
// console.log(age); //number

// 새로운 이름으로 할당

let { name: newName, age: newAge } = user;
console.log(newName, newAge);

let { name, age, birthday = "today" } = user;
console.log(name, age, birthday);
