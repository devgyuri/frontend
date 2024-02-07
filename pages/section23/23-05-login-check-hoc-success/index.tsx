import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../src/commons/types/generated/types";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function MyPage(): JSX.Element {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return <>Hello {data?.fetchUserLoggedIn.name}!</>;
}

export default withAuth(MyPage);
