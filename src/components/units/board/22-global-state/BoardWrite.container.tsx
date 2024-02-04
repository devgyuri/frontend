import BoardWriteUI from "./BoardWrite.presenter";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../commons/stores";
import { useEffect } from "react";

export default function BoardWrite(props: any): JSX.Element {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  console.log(isEdit);

  useEffect(() => {
    setIsEdit(false);
  }, []);

  return (
    <BoardWriteUI />
  );
}