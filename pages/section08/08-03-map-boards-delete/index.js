import { gql, useMutation, useQuery } from "@apollo/client";
import { Fragment } from "react";

const FETCH_BOARDS = gql`
    query {
        fetchBoards {
            number
            writer
            title
            contents
        }
    }
`;

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int) {
        deleteBoard(number: $number) {
            message
        }
    }
`;

export default function StaticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARDS);
    console.log(data?.fetchBoards);

    const [deleteBoard] = useMutation(DELETE_BOARD);

    const onClickDelete = (event) => {
        deleteBoard({
            variables: {
                number: Number(event.target.id)
            },
            refetchQueries: [{
                query: FETCH_BOARDS
            }]
        });
    };
    
    return (
        <Fragment>
            {data?.fetchBoards.map((el) => (
                <div key={el.number}>
                    <span>
                        <input type="checkbox" />
                    </span>
                    <span style={{margin: "10px"}}>{el.number}</span>
                    <span style={{margin: "10px"}}>{el.title}</span>
                    <span style={{margin: "10px"}}>{el.writer}</span>
                    <span>
                        <button id={el.number} onClick={onClickDelete}>삭제</button>
                    </span>
                </div>
            ))}
        </Fragment>
    );
}