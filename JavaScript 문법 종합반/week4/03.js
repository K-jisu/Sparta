// 뮤순 제어권? 2번째
// 인자에 대한 제어권을 갖는다.
// map 함수입니다.
var newArr = [10, 20, 30].map(function (currentValue, index) {
  console.log(currentValue, index);
  return currentValue + 5;
});

// 결과는 뭐가 될까?
console.log(newArr);
