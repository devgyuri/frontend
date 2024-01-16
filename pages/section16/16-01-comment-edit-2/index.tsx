import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { type MouseEvent, useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const [myIndexes, setMyIndexes] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  );

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
    const qqq = { ...myIndexes };
    qqq[Number(event.currentTarget.id)] = true;
    setMyIndexes(qqq);
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) =>
        !myIndexes[index] ? (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>{el._id}</span>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
            <button id={String(index)} onClick={onClickEdit}>
              edit
            </button>
          </div>
        ) : (
          <div key={el._id}>
            <input type="text" />
          </div>
        ),
      )}
    </div>
  );
}
