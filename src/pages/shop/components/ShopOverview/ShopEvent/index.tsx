import { Text } from "../../../../../components";
import { RedSpeaker } from "../../../../../assets/svg";
import { EventWrapper, TextWrapper } from "./index.styles";
import { IconContain } from "../../ShopDetail/ShopInfo/index.styles";
export default function ShopEvent() {
  return (
    <EventWrapper>
      <IconContain>
        <RedSpeaker height={14} />
        <Text typo="subtitle300">5주년 이벤트</Text>
      </IconContain>
      <TextWrapper>
        <Text typo="body300" color="gray100">
          저희 호키포키에서 5주년 이벤트로 예약자에 한에서 반려견 피부 보습
          케어를 무료 제공합니다.
        </Text>
      </TextWrapper>
    </EventWrapper>
  );
}
