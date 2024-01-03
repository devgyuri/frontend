import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 18288) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
  );
  console.log(data);

  return (
    <div>
      <div>게시글1 상세 페이지</div>
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
    </div>
  );
}
