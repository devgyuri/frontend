import { UpCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import type { MouseEvent } from "react";

const MyIcon = styled(UpCircleOutlined)`
  color: blue;
  font-size: 50px;
`;

export default function LibraryIconPage(): JSX.Element {
  const onClickDelete = (event: MouseEvent<HTMLDivElement>): void => {
    console.log(event.currentTarget.id);
  };

  return (
    <>
      <div id="deleteId" onClick={onClickDelete}>
        <MyIcon rev={false} />
      </div>
    </>
  );
}
