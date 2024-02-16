import JestUnitTestEventPage from "../../pages/section33/33-04-jest-unit-test-event";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("button click event test", () => {
  render(<JestUnitTestEventPage />);

  fireEvent.click(screen.getByRole("count-button"));
  expect(screen.getByRole("count")).toHaveTextContent("1");
});
