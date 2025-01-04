// 런타임
// 코드가 돌아가는 그 환경
// 1. 노드
// 2. 브라우저
// 전역 ㅗ항경에서 this => 노드(global 객체), 브라우저(window 객체)

var obj1 = {
  outer: function () {
    console.log("obj1.outer() = ", this); // (1) => outer
    var innerFunc = function () {
      console.log("innerFunc() = ", this); // (2), (3) => global
    };
    innerFunc();
    var obj2 = {
      innerMethod: innerFunc,
    };
    obj2.innerMethod();
  },
};
obj1.outer();
