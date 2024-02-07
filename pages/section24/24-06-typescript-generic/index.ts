// 1. primitive type
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};
const result1 = getPrimitive("kitty", 3, true);
console.log(result1);

// 2. any type (=javascript)
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};
const result2 = getAny("kitty", 3, true);
console.log(result2);

// 3. unknown type
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") {
    console.log(arg1 * 1000);
  }
  return [arg3, arg2, arg1];
};
const result3 = getUnknown("kitty", 3, true);
console.log(result3);

// 4. generic type
function getGeneric<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}
const result4 = getGeneric("kitty", 3, true);
console.log(result4);

const result5 = getGeneric<string, string, number>("kitty", "hello", 3);
console.log(result5);

// 5. generic type 2
function getGeneric2<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}
const result6 = getGeneric2<string, string, number>("kitty", "hello", 3);
console.log(result6);

// 6. generic type 3
const getGeneric3 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};
const result7 = getGeneric3<string, string, number>("kitty", "hello", 3);
console.log(result7);
