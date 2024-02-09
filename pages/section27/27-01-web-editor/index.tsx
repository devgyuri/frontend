// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WegEditorPage(): JSX.Element {
  const onChangeContents = (value: string): void => {
    console.log(value);
  };

  const onClickSubmit = async (): Promise<void> => {
    const { Modal } = await import("antd");
    Modal.success({ content: "게시글 등록에 성공하셨습니다." });
  };

  return (
    <form onSubmit={wrapFormAsync(onClickSubmit)}>
      작성자: <input type="text" />
      <br />
      비밀번호: <input type="password" />
      <br />
      제목: <input type="text" />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
