import { Maker } from "../../../../assets/svg";
import { Text } from "../../../../components";
import ProposalStautsNav from "../ProposalStatusNav";
import { HomeContentsWrapper } from "../../customer/index.styles";
import { LocationWrapper, EstimatePreviewWrap } from "./index.styles";

interface ProposalItemProps {
  type: {
    title: string;
    firstNav: string;
    secendNav: string;
  };
}

export default function ProposalItem({ type }: ProposalItemProps) {
  return (
    <HomeContentsWrapper>
      <LocationWrapper>
        <Maker width={14} />
        <Text typo="body100">강남구 대치동</Text>
      </LocationWrapper>
      <EstimatePreviewWrap>
        <Text typo="subtitle200" color="black">
          오늘의
          <Text typo="subtitle200" color="blue100">
            &nbsp;{type.title}
          </Text>
          을 확인해보세요
        </Text>
        <ProposalStautsNav
          title={type.title}
          firstNav={type.firstNav}
          secendNav={type.secendNav}
        />
      </EstimatePreviewWrap>
    </HomeContentsWrapper>
  );
}
