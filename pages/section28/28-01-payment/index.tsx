declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage(): JSX.Element {
  const onClickPayment = (): void => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "kakaopay",
        pay_method: "card",
        name: "mouse",
        amout: 10,
        buyer_email: "abc@h.com",
        buyer_name: "kitty",
        buyer_tel: "010-1234-5678",
        buyer_addr: "서울특별시 강남구",
        buyer_postcode: "12345",
      },
      (rsp: any) => {
        if (rsp.success === true) {
          console.log("success");
        } else {
          console.log("fail");
        }
      },
    );
  };

  return (
    <>
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
