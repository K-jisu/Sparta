// bind 매서드
// -> this를 바인딩 하는 매서드
// call, apply와는 좀 달라요! 즉시 호출하지는 않아요.

// [ 목적 ]
// 1. 함수에 This를 '미리' 적용해요.
// 2. 부분 적용 함수!

var func = function (a, b, c, d) {
  console.log(this, a, b, c, d);
};
func(1, 2, 3, 4); // global 객체
// 함수에 this 미리 적용
var bindFunc1 = func.bind({ x: 1 }); // 바로 호출되지는 않아요! 그 외에는 같아요.
bindFunc1(5, 6, 7, 8); // { x: 1 } 5 6 7 8
// 부분 적용 함수 구현
var bindFunc2 = func.bind({ x: 1 }, 4, 5); // 4와 5를 미리 적용
bindFunc2(6, 7); // { x: 1 } 4 5 6 7
bindFunc2(8, 9); // { x: 1 } 4 5 8 9

console.log(func.name);
console.log(bindFunc1.name);
console.log(bindFunc2.name);

// name 프로퍼티!!
// bind = 'bound' 라는 접두어!
