import { useMutation, gql } from "@apollo/client";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

const myGraphqlSetting = gql`
  mutation {
    createBoard(
      createBoardInput: {
        writer: "캔디"
        title: "반갑습니다"
        contents: "들장미초등학교"
        password: "1234"
      }
    ) {
      _id
    }
  }
`;

export default function GraphqlMutationPage(): JSX.Element {
  const [myFunction] = useMutation(myGraphqlSetting);

  const onClickSubmit = async (): Promise<void> => {
    const result = await myFunction();
    console.log(result);
  };

  return (
    <div>
      <button onClick={wrapAsync(onClickSubmit)}>GraphQL API request</button>
    </div>
  );
}
