//단축 속성명 : property shorthand
// const name = "mbc";
// const newAge = 30;

// key - value
// const obj = {name, age};
// const obj1 = {name: name, age : age};

// 전개 구문  = psread operator
// desructiong과 함꼐 가장 많이 사용되는 es6 문법 중 하나
let arr = [1, 2, 3];
let newArr = [...arr, 4];

// 객체
let user = {
  name: "bcx",
  age: 20,
};

let user2 = { ...user, tall: 30 };
console.log(user2);

// 나머지 매개변수 (rest parameter)
function examplefunc(a, b, c, ...args) {
  console.log(a, b, c);
  console.log(...args);
  console.log(args);
}
examplefunc(1, 2, 3, 4, 5, 6, 7, 8);

// 템플릿  리터럴(Template Literal)
const testVal = "Hello world";
console.log(`${testVal} ${3 + 3}`);
console.log(`
  Hello 
        My name is javascript

        nice to meet you
  `);
