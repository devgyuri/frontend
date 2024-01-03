// import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

export default function App({ Component }: AppProps): JSX.Element {
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <div>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
    </div>
  );
}
