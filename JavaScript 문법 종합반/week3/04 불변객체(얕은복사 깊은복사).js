// 이런 패턴은 어떨까요?
var copyObject = function (target) {
  var result = {};
  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

// user 객체 생성
var user = {
  name: "wonjang",
  gender: "male",
};

// user 객체를 복사
var user2 = copyObject(user);
user2.name = "twojang";

// user와 user2가 다른 객체인지 확인
if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name, user2.name); // wonjang twojang
console.log(user === user2); // false
