import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import type { Address } from "react-daum-postcode";

export default function ModalCustomAddressPage(): JSX.Element {
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

  const handleComplete = (data: Address): void => {
    console.log(data);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>Open Modal</button>
      {isOpen && (
        <Modal open={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
