import { add } from "../../pages/section33/33-01-jest";

it("add function test!", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

// describe("my test group", () => {
//   if("add test", () => {

//   })
//   if("subtract test", () => {

//   })
//   if("multiply test", () => {

//   })
// })
