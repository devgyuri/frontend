import { gql, useQuery } from "@apollo/client";
import Checkbox from "./checkbox";

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

export default function StaticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARDS);
    console.log(data?.fetchBoards);

    const onClickAlert = (event: any) => {
        alert(event.currentTarget.id + "님이 작성한 글입니다");
    };

    const qqq1 = (event: any) => {
        alert("1번 클릭");
    };
    
    const qqq4 = (event: any) => {
        alert("4번 클릭");
    };
    
    return (
        <div>=
            {data?.fetchBoards.map((el: any) => (
                <div id={el.writer} onClick={qqq1}>
                    <Checkbox />
                    <span style={{margin: "10px"}}>{el.number}</span>
                    <span style={{margin: "10px"}} onClick={qqq4}>{el.title}</span>
                    <span style={{margin: "10px"}}>{el.writer}</span>
                </div>
            ))}
        </div>
    );
}