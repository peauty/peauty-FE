import { Text } from "../../../../../components";
import { RedSpeaker } from "../../../../../assets/svg";
import { EventWrapper, TextWrapper } from "./index.styles";
import { IconContain } from "../../ShopDetail/ShopInfo/index.styles";
interface EventProps {
  noticeTitle?: string;
  notice?: string;
}
export default function ShopEvent({ notice, noticeTitle }: EventProps) {
  return (
    <EventWrapper>
      <IconContain>
        <RedSpeaker height={14} />
        <Text typo="subtitle300">{noticeTitle}</Text>
      </IconContain>
      <TextWrapper>
        <Text typo="body300">{notice}</Text>
      </TextWrapper>
    </EventWrapper>
  );
}
