import { useRecoilState } from "recoil";
import { AppBar, Text, Divider, CustomButton, GNB } from "../../../components";
import SvgPayment from "../../../assets/svg/Payment";
import {
  StoreWrapper,
  PaymentDayWrapper,
  PaymenWrapper,
  InfoWrapper,
  ButtonWrapper,
  ContentWrapper,
  CenteredSvgWrapper,
} from "./index.styles";
import SvgCircle from "../../../assets/svg/Circle";
import { paymentAtom } from "../../../atoms/paymentAtom";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../constants/routes";

export default function Payment() {
  // Recoil 상태와 결제 데이터 설정
  const [paymentData, setPaymentData] = useRecoilState(paymentAtom);
  const navigate = useNavigate();

  return (
    <>
      <AppBar prefix="backButton" title="결제완료" />

      <ContentWrapper>
        <Text typo="title200" className="padded-text">
          예약금 결제가 <br />
          완료되었습니다.
        </Text>
        <CenteredSvgWrapper>
          <SvgPayment width={110} />
        </CenteredSvgWrapper>
      </ContentWrapper>

      <Divider thickness={1} />

      <StoreWrapper>
        <Text typo="subtitle200" color="gray100">
          상호명
        </Text>
        <Text typo="subtitle200">{paymentData?.storeName}</Text>
      </StoreWrapper>

      <PaymentDayWrapper>
        <Text typo="subtitle200" color="gray100">
          결제일자
        </Text>
        <Text typo="subtitle200">{paymentData?.paymentDate}</Text>
      </PaymentDayWrapper>

      <PaymenWrapper>
        <Text typo="subtitle200" color="gray100">
          결제금액
        </Text>
        <Text typo="subtitle200" color="blue100">
          {paymentData?.paidAmount}
        </Text>
      </PaymenWrapper>

      <Divider thickness={1} />

      <PaymenWrapper>
        <Text typo="subtitle200" color="gray100">
          현장 결제 예정 금액
        </Text>
        <Text typo="subtitle200" color="blue100">
          {paymentData?.onSiteAmount}
        </Text>
      </PaymenWrapper>

      <InfoWrapper>
        <SvgCircle width={5} />
        <Text typo="body200" color="gray200">
          현장금액 결제는 예약금을 제외한 나머지 금액이 결제됩니다.
        </Text>
      </InfoWrapper>

      <InfoWrapper>
        <SvgCircle width={5} />
        <Text typo="body200" color="gray200">
          예약금에 해당하는 결제금액은 즉시 결제됩니다.
        </Text>
      </InfoWrapper>

      <InfoWrapper>
        <SvgCircle width={5} />
        <Text typo="body200" color="gray200">
          결제 취소를 원하는 경우 요청현황 미용 완료함에서 확인이 가능합니다.
        </Text>
      </InfoWrapper>

      <ButtonWrapper>
        <CustomButton
          fullwidth
          onClick={() => {
            navigate(ROUTE.customer.status);
          }}
        >
          다음
        </CustomButton>
      </ButtonWrapper>
    </>
  );
}
