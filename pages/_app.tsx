// import '../styles/globals.css'
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <div>
      <RecoilRoot>
        <ApolloSetting>
          <>
            <Global styles={globalStyles} />
            <Layout>
              <Component />
            </Layout>
          </>
        </ApolloSetting>
      </RecoilRoot>
    </div>
  );
}
