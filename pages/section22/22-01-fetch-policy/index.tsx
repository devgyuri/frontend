import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { useState } from "react";
import FetchPolicyExample from "../../../src/components/units/board/22-fetch-policy";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function FetchPolicyPage(): JSX.Element {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  
  // eslint-disable-next-line
  const { data } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickIsOpen = ():void => {
    setIsOpen(true);
  };

  const onClickMove = (): void => {
    void router.push("/section22/22-01-fetch-policy-moved");
  }

  return (
    <div>
      <button onClick={onClickIsOpen}>
        1. click: new component appear
      </button>
      {isOpen && <FetchPolicyExample />}
      <br/>======================================<br/>
      <button onClick={onClickMove}>
        2. click: page move
      </button>
    </div>
  );
}
