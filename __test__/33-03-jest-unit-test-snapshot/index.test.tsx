import JestUnitTestSnapshotPage from "../../pages/section33/33-03-jest-unit-test-snapshot";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

it("UI test", () => {
  const result = render(<JestUnitTestSnapshotPage />);

  expect(result.container).toMatchSnapshot();
});
