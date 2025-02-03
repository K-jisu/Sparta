// 상태를 배열로 관리하기 위함
let hooks = [],
  currentHook = 0; // hooks의 인덱스
let deps = [];

const MyReact = {
  render(Component) {
    const Comp = Component();
    Comp.render();
    // 렌더링 될 때마다 처음부터 훑음
    currentHook = 0;
    return Comp;
  },
};

export const useState = (initialValue) => {
  // 값 세팅
  hooks[currentHook] = hooks[currentHook] || initialValue;
  const hookIndex = currentHook; // 원시적 값 복사
  const setState = (newState) => {
    if (typeof newState === "function") {
      hooks[hookIndex] = newState(hooks[hookIndex]);
    } else {
      hooks[hookIndex] = newState;
    }
  };
  // 리턴 후 currentHook 1 증가
  return [hooks[currentHook++], setState];
};

export const useEffect = (callback, depArray) => {
  // 의존성 배열 있는지 없는지 체크
  const hasNoDeps = !depArray;
  // 훅이 실행된 적 있으면 그 값 prevDeps에 넣고 없으면 undefined
  const prevDeps = hooks[currentHook] ? hooks[currentHook].deps : undefined;

  // 이전에 실행된 적 있으면 그 클린업 함수를 prevCleanup에 넣어준다.
  const prevCleanup = hooks[currentHook]
    ? hooks[currentHook].cleanup
    : undefined;

  // prevDeps랑 depArray랑 비교해서 바뀐 부분이 있는지 확인 
  const hasChangedDeps = prevDeps
    ? !depArray.every((el, i) => el === prevDeps[i])
    : true;

  // dep가 없거나 바뀐 부분이 있으면 
  if (hasNoDeps || hasChangedDeps) {
    // 클린업 함수가 있으면 클린업 함수 실행
    if (prevCleanup) prevCleanup();
    const cleanup = callback();
    hooks[currentHook] = { deps: depArray, cleanup };
  }
  currentHook++;
};

export default MyReact;
