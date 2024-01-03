import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router";

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
    const router = useRouter();

    const [myFunction] = useMutation(myGraphqlSetting);
    
    const onClickSubmit = async () => {
        try {
            const result = await myFunction();
            console.log(result);
            router.push(`/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`);
        } catch(error) {
            alert(error.message)
        }
    };

    return (
        <div>
            <button onClick={onClickSubmit}>GraphQL API request</button>
        </div>
    );
};