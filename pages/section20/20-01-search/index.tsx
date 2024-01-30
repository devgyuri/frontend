import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { useState, type ChangeEvent, type MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const [search, setSearch] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.currentTarget.value);
  }

  const onClickSearch = (): void => {
    void refetch({
      search,
      page: 1 
    });
  }

  return (
    <div>
      <input type="text" placeholder="검색어를 입력해주세요." onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색</button>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el._id}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill("철수").map((_, index) => (
          <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
            {index + 1}
          </span>
        ))
      }
    </div>
  );
}
