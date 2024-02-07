// 1. hof - 일반 함수
function first<T>(arg1: T) {
  return function second<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}
const result8 = first("kitty")(7);
console.log(result8);

// 2. hof - 화살표 함수
// prettier-ignore
const first2 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
    return [arg1, arg2];
  };
const result9 = first2("kitty")(7);
console.log(result9);

// 3. loginCheck
// prettier-ignore
// eslint-disable-next-line
const loginCheck = <C>(Component: C) => <P>(props: P): [C, P] => {
  return [Component, props];
};
