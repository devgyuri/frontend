import JestUnitTestPage from "../../pages/section33/33-02-jest-unit-test";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("UI test", () => {
  render(<JestUnitTestPage />);

  const myText = screen.getByText("kitty is 3 years old.");
  expect(myText).toBeInTheDocument();

  const myText2 = screen.getByText("hobby:");
  expect(myText2).toBeInTheDocument();

  const myText3 = screen.getByText("play with kitty");
  expect(myText3).toBeInTheDocument();
});
