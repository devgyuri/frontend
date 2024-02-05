import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client"
import { useRecoilState } from "recoil";
import { accessTokenState } from "../stores";
import { useEffect } from "react";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // if (process.browser) {
  // if (typeof window !== "undefined") {
  //   const result = localStorage.getItem("accessToken");
  //   setAccessToken(result ?? "");
  // }
  
  useEffect(() => {
      const result = localStorage.getItem("accessToken");
      setAccessToken(result ?? "");
  }, [])

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
