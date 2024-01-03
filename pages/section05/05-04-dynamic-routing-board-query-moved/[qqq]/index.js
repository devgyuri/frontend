import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
        number
        writer
        title
        contents
    }
}
`;

export default function StaticRoutingMovedPage() {
    const router = useRouter();
    console.log(router); 

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(router.query.qqq)
        }
    });
    
    return (
        <div>
            <div>게시글{router.query.qqq} 상세 페이지</div>
            <div>작성자: {data?.fetchBoard?.writer}</div>
            <div>제목: {data?.fetchBoard?.title}</div> 
            <div>내용: {data?.fetchBoard?.contents}</div> 
        </div>
    );
}