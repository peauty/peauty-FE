import { Text } from "../../../../../components";
import {
  ShopHome,
  ShopMaker,
  ShopTime,
  ShopTel,
  ShopPay,
} from "../../../../../assets/svg";
import { ContentsWrapper, ContentContain } from "../../index.styles";
import { IconContain } from "./index.styles";
import { ShopDetailInfoProps } from "../../../../../types/customer/request";
export default function Shopinfo({
  workspaceName,
  address,
  addressDetail,
  openHours,
  closeHours,
  openDay,
  paymentOption,
  phoneNumber,
}: ShopDetailInfoProps) {
  const payments = paymentOption.join(" ");
  return (
    <ContentsWrapper>
      <Text typo="subtitle300">매장 정보</Text>
      <ContentContain>
        <IconContain>
          <ShopHome height={11} />
          <Text typo="body400" color="gray100">
            {workspaceName}
          </Text>
        </IconContain>
        <IconContain>
          <ShopMaker height={11} />
          <Text typo="body400" color="gray100">
            {address} {addressDetail}
          </Text>
        </IconContain>
        <IconContain>
          <ShopTime height={11} />
          <Text typo="body400" color="gray100">
            영업시간 | {openHours} ~ {closeHours} {openDay}
          </Text>
        </IconContain>
        <IconContain>
          <ShopTel height={11} />
          <Text typo="body400" color="gray100">
            {phoneNumber}
          </Text>
        </IconContain>
        <IconContain>
          <ShopPay width={12} />
          <Text typo="body400" color="gray100">
            {payments}
          </Text>
        </IconContain>
      </ContentContain>
    </ContentsWrapper>
  );
}
