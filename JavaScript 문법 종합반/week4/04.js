// 뮤순 제어권? 2번째
// 인자에 대한 제어권을 갖는다.
// map 함수입니다.

// index, currentValue 사람이 이해할 수 있는 변수명일 뿐
var newArr = [10, 20, 30].map(function (index, currentValue) {
  console.log(index, currentValue);
  return currentValue + 5;
});

// 결과는 뭐가 될까?
console.log(newArr);
