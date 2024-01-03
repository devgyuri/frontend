import { gql, useQuery } from "@apollo/client";

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

export default function StaticRoutingMovedPage(): JSX.Element {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data?.fetchBoards);

  const onClickAlert = (event: any): void => {
    alert(event.currentTarget.id + "님이 작성한 글입니다");
  };

  const qqq = (event: any): void => {
    alert("click title");
  };

  return (
    <div>
      =
      {data?.fetchBoards.map((el: any) => (
        <div key={el.number} id={el.writer} onClick={onClickAlert}>
          <span>
            <input type="checkbox" onClick={qqq} />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }} onClick={qqq}>
            {el.title}
          </span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
