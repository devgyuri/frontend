import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client"
import { useRecoilState } from "recoil";
import { accessTokenState } from "../stores";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken] = useRecoilState(accessTokenState);

  const uploadLink: ApolloLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
    connectToDevTools: true,
  });

  // prettier-ignore
  return (
      <ApolloProvider client={client}>
        {props.children}
      </ApolloProvider>
  );
}
