import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const router = useRouter();
  console.log(router.query.qqq);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.qqq,
    },
  });

  return (
    <div>
      <div>게시글{router.query.qqq} 상세 페이지</div>
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
      {typeof window !== "undefined" && (
        <div
          dangerouslySetInnerHTML={{
            // eslint-disable-next-line
            __html: Dompurify.sanitize(data?.fetchBoard?.contents),
          }}
        />
      )}
    </div>
  );
}
