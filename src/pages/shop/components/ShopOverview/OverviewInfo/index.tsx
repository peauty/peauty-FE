import { Divider, Text } from "../../../../../components";
import { Shop } from "../../../../../assets/svg";
import { Badge } from "../../../../../components/category/Badge";
import ShopEvent from "../ShopEvent";
import { Maker } from "../../../../../assets/svg";
import { InfoWrapper,TextWrapper } from "./index.styles";
import { IconContain } from "../../ShopDetail/ShopInfo/index.styles";
export default function OverviewInfo() {
  return (
    <InfoWrapper>
      <div>
        <Text typo="subtitle100">까끌래뽀끌래</Text>
        <IconContain>
          <Maker height={12} />
          <Text typo="body400" color="gray100">
            성남시 위례구
          </Text>
        </IconContain>
      </div>
      <TextWrapper
      >
        {/* 아이콘과 첫 번째 줄 */}
        <IconContain
        >
          <Shop height={10} style={{ marginRight: "5px" }} />
          <Text typo="body400" color="gray100">
            말티즈 및 푸들 모발케어 전문
          </Text>
        </IconContain>

        {/* 두 번째 줄 */}
        <Text typo="body400" color="gray100">
          안녕하세요. 말티즈 및 푸들 모발 케어 전문 호키포키입니다.{"\n"}
          보호자의 반려견을 정성을 다해서 케어해드립니다.
        </Text>
        <IconContain>
          <Badge type="general" text="사업자 등록 인증" variant="green" />
          <Badge type="general" text="말티즈 전문가" />
        </IconContain>
      </TextWrapper>
    </InfoWrapper>
  );
}
