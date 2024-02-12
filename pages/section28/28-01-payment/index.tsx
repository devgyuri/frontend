declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage(): JSX.Element {
  const onClickPayment = (): void => {
    const IMP = window.IMP;
    IMP.init("imp12518572");

    IMP.request_pay(
      {
        pg: "kakaopay",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "mouse",
        amount: 10,
        buyer_email: "abc@h.com",
        buyer_name: "kitty",
        buyer_tel: "010-1234-5678",
        buyer_addr: "서울특별시 강남구",
        buyer_postcode: "12345",
        m_redirect_url: "http://localhost:3000/section28/28-01-payment",
      },
      (rsp: any) => {
        if (rsp.success === true) {
          console.log("success");
          console.log(rsp);
          // createPointTransactionOfLoading();
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
