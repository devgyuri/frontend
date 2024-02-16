import { gql } from "@apollo/client";
import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import type {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      images
    }
  }
`;

export default function OpengraphProviderPage(props: any): JSX.Element {
  console.log("my props: ", props);

  return (
    <>
      <Head>
        <meta property="og:title" content={props?.qqq.name} />
        <meta property="og:description" content={props?.qqq.remarks} />
        <meta property="og:image" content={props?.qqq.images?.[0]} />
      </Head>
      <div>중고마켓에 오신 것을 환영합니다!</div>
    </>
  );
}

export const getServerSideProps = async (): Promise<any> => {
  console.log("this is server!!");

  const graphQLClient = new GraphQLClient(
    "https://backend-practice.codebootcamp.co.kr/graphql",
  );
  const result = await graphQLClient.request<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, { useditemId: "65c335fd5d6eaa0029f7dd2b" });
  return {
    props: {
      qqq: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images,
      },
    },
  };
};
