import { useNavigate } from "react-router-dom";
import { GNB, Text } from "../../../components";
import { SectionWrapper, Wrapper } from "./index.styles";
import { ROUTE } from "../../../constants/routes";

export default function DesignerSignUpDetailComplete() {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <Text typo="title100" color="blue100">
          등록 성공!
        </Text>

        <SectionWrapper>
          <Text typo="title100">자격증 검토가 끝날 때까지</Text>
          <Text typo="title100">조금만 기다려주세요</Text>
        </SectionWrapper>
        <SectionWrapper>
          <Text typo="body300" color="gray200">
            이메일로 결과를 보내드릴게요
          </Text>
          <Text typo="body300" color="gray200">
            검수까지 며칠 소요될 수 있습니다
          </Text>
        </SectionWrapper>
      </Wrapper>
      <GNB
        buttonText="홈으로"
        onLargeButtonClick={() => {
          navigate(ROUTE.designer.home);
        }}
      />
    </>
  );
}
