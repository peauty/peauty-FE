import { Text } from "../../../../../components";
import {
  ShopHome,
  ShopMaker,
  ShopTime,
  ShopTel,
  ShopPay,
} from "../../../../../assets/svg";
export default function Shopinfo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <Text typo="subtitle300">매장 정보</Text>
      <div style={{ lineHeight: "1.9" }}>
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <ShopHome height={11} />
          <Text typo="body400" color="gray100">
            몽크의 아뜰리에
          </Text>
        </div>
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <ShopMaker height={11} />
          <Text typo="body400" color="gray100">
            성남시 위례구 남위례역 3번 출구
          </Text>
        </div>
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <ShopTime height={11} />
          <Text typo="body400" color="gray100">
            영업시간 | 11:00 ~ 20:00 (주말휴무)
          </Text>
        </div>
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <ShopTel height={11} />
          <Text typo="body400" color="gray100">
            02-1234-5678
          </Text>
        </div>
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <ShopPay width={12} />
          <Text typo="body400" color="gray100">
            계좌이체, 현금 결제 , 카드 결제 가능
          </Text>
        </div>
      </div>
    </div>
  );
}
