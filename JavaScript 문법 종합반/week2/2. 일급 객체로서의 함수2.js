// 일급 객체로써의 함수(2)
const person = {
  name: "john",
  age: 31,
  ismarried: true,
  // 화살표 함수로 하면 this가 바인딩이 안됨 그래서 undefined 나옴
  // sayHello: () => {
  //   console.log(`hello, My name is ${this.name}`);
  // },
  sayHello: function () {
    console.log(`hello, My name is ${this.name}`);
  },
};

person.sayHello();
