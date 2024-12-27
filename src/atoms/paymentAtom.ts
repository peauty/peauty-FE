import { atom } from "recoil";

// 결제 데이터 인터페이스
export interface PaymentData {
  storeName: string;
  paymentDate: string;
  paidAmount: string;
  onSiteAmount: string;
  total: string;
}

// 결제 관련 데이터를 관리하는 atom
export const paymentAtom = atom<PaymentData | null>({
  key: "paymentData", // 고유한 키
  default: null, // 초기 값은 null로 설정
});
