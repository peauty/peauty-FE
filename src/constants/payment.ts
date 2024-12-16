import { PaymentOptionType } from "../types/designer/designer";

interface KeyValueMap {
  [key: string]: PaymentOptionType;
}

export const PaymentMethodMap: KeyValueMap = {
  "카드 결제": "CARD",
  "현금 결제": "CASH",
  "계좌 이체": "ACCOUNT",
};
