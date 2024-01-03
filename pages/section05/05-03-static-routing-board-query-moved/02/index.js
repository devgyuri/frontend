import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
query {
    fetchBoard(number: 18289) {
        number
        writer
        title
        contents
    }
}
`;

export default function StaticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARD);
    console.log(data);
    
    return (
        <div>
            <div>게시글2 상세 페이지</div>
            <div>작성자: {data?.fetchBoard?.writer}</div>
            <div>제목: {data?.fetchBoard?.title}</div> 
            <div>내용: {data?.fetchBoard?.contents}</div> 
        </div>
    );
}