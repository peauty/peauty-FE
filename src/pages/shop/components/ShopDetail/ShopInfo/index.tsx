import { Text } from "../../../../../components";
import {
  ShopHome,
  ShopMaker,
  ShopTime,
  ShopTel,
  ShopPay,
} from "../../../../../assets/svg";
import { ContentsWrapper ,ContentContain} from "../../index.styles";
import { IconContain } from "./index.styles";
export default function Shopinfo() {
  return (
    <ContentsWrapper>
      <Text typo="subtitle300">매장 정보</Text>
      <ContentContain>
        <IconContain>
          <ShopHome height={11} />
          <Text typo="body400" color="gray100">
            몽크의 아뜰리에
          </Text>
        </IconContain>
        <IconContain>
          <ShopMaker height={11} />
          <Text typo="body400" color="gray100">
            성남시 위례구 남위례역 3번 출구
          </Text>
        </IconContain>
        <IconContain>
          <ShopTime height={11} />
          <Text typo="body400" color="gray100">
            영업시간 | 11:00 ~ 20:00 (주말휴무)
          </Text>
        </IconContain>
        <IconContain>
          <ShopTel height={11} />
          <Text typo="body400" color="gray100">
            02-1234-5678
          </Text>
        </IconContain>
        <IconContain>
          <ShopPay width={12} />
          <Text typo="body400" color="gray100">
            계좌이체, 현금 결제 , 카드 결제 가능
          </Text>
        </IconContain>
      </ContentContain>
    </ContentsWrapper>
  );
}
