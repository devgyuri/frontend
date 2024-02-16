import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import JestUnitTestMockingPage from "../../pages/section33/33-05-jest-unit-test-mocking";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "cross-fetch";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

it("create board test", async () => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "http://mock.com/graphql",
      fetch,
    }),
    cache: new InMemoryCache(),
  });

  render(
    <ApolloProvider client={client}>
      <JestUnitTestMockingPage />
    </ApolloProvider>,
  );

  fireEvent.change(screen.getByRole("input-writer"), {
    target: { value: "kitty" },
  });
  fireEvent.change(screen.getByRole("input-title"), {
    target: { value: "Hello" },
  });
  fireEvent.change(screen.getByRole("input-contents"), {
    target: { value: "Nice to meet you:)" },
  });
  fireEvent.click(screen.getByRole("submit-button"));

  await waitFor(() => {
    expect(mockRouter.asPath).toEqual("/boards/qqq");
  });
});
