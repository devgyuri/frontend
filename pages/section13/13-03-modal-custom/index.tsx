import { Input, Modal } from "antd";
import { useState } from "react";

export default function ModalCustomPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = (): void => {
    setIsOpen(true);
  };

  const handleOk = (): void => {
    setIsOpen(false);
  };

  const handleCancel = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>Open Modal</button>
      <Modal
        title="title of modal"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        password: <Input type="password" />
      </Modal>
    </>
  );
}
