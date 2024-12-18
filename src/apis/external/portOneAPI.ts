export interface PaymentInput {
  name: string;
  price: number;
}

export interface PaymentOutput {
  error_code?: string;
  error_msg?: string;
  imp_uid: string;
  merchant_uid: string;
}

const randomId = () => {
  return [...crypto.getRandomValues(new Uint32Array(2))]
    .map((word) => word.toString(16).padStart(8, "0"))
    .join("");
};

export const requestPayment = async (item: PaymentInput): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (typeof window !== "undefined" && window.IMP) {
      window.IMP.init(import.meta.env.VITE_IMP_NUM); // 고객사 식별코드로 초기화, 실제 코드로 변경

      const paymentId = `payment-${randomId()}`; // 결제 고유 번호 생성

      // 결제 요청
      window.IMP.request_pay(
        {
          channelKey: import.meta.env.VITE_CHANNEL_KEY,
          pay_method: "card", // 카드 결제
          merchant_uid: paymentId, // 주문 고유 번호
          name: item.name, // 결제 상품명
          amount: item.price, // 결제 금액
          buyer_email: "buyer@example.com", // 구매자 이메일 (예시)
          buyer_name: "홍길동", // 구매자 이름
          buyer_tel: "010-4242-4242", // 구매자 전화번호
          buyer_addr: "서울특별시 강남구 신사동", // 구매자 주소 (예시)
          buyer_postcode: "01181", // 구매자 우편번호 (예시)
        },
        (response: any) => {
          if (response.error_code) {
            // 결제 실패
            reject(
              new Error(
                `결제 실패: ${response.error_msg || response.error_code}`,
              ),
            );
          } else {
            // 결제 성공, imp_uid 반환
            resolve(response.imp_uid);
          }
        },
      );
    } else {
      reject(new Error("Iamport SDK가 로드되지 않았습니다."));
    }
  });
};
