import { Modal } from "antd";

export default function ModalAlertPage(): JSX.Element {
  const onClickSuccess = (): void => {
    Modal.success({ content: "게시글 등록에 성공했습니다." });
  };

  const onClickError = (): void => {
    Modal.error({ content: "비밀번호가 다릅니다." });
  };

  return (
    <div>
      <button onClick={onClickSuccess}></button>
      <button onClick={onClickError}></button>
    </div>
  );
}
