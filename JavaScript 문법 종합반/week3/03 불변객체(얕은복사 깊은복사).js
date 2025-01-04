// 이런 패턴은 어떨까요?
var copyObject = function (target) {
  var result = {};

  // for~ in 구문을 이요하여, 객체의 모든 프로퍼티에 접근할 수 있습니다.
  // 하드코딩을 하지 않아도 괜찮습니다.
  // 이 copyObject를 복사한 다음, 복사를 완료한 객체의 프로퍼티를 변경하면 됩니다.

  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};
