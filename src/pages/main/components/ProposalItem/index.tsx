import { Maker } from "../../../../assets/svg";
import { Text } from "../../../../components";
import ProposalStautsNav from "../ProposalStatusNav";
import { HomeContentsWrapper } from "../../index.styles";
import { LocationWrapper , EstimatePreviewWrap} from "./index.styles";
export default function ProposalItem() {
  return (
    <HomeContentsWrapper>
      <LocationWrapper>
        <Maker width={14} />
        <Text typo="body100">
          강남구 대치동
        </Text>
      </LocationWrapper>
      <EstimatePreviewWrap>
        <Text typo="subtitle200" color="black">
          오늘의
          <Text typo="subtitle200" color="blue100">
            견적
          </Text>
          을 확인해보세요
        </Text>
        <ProposalStautsNav />
      </EstimatePreviewWrap>
    </HomeContentsWrapper>
  );
}
