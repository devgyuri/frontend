import { useMutation, gql } from "@apollo/client"
import { IMutation, IMutationCreateBoardArgs } from "../../../src/commons/types/generated/types";

const myGraphqlSetting = gql`
    mutation {
        createBoard(writer: "캔디", title: "반갑습니다", contents: "들장미초등학교") {
            _id
            number
            message
        }
    }
`;

export default function GraphqlMutationPage() {
    const [myFunction] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(myGraphqlSetting);
    
    const onClickSubmit = async () => {
        const result = await myFunction();
        console.log(result);
    };

    return (
        <div>
            <button onClick={onClickSubmit}>GraphQL API request</button>
        </div>
    );
};