import {
  Container,
  InnerBox,
  CutTextWrapper,
  RequestButton,
} from "./index.styles";

import { Text } from "../../../../../components";

export default function Info() {
  const handleButtonClick = () => {
    console.log("내 요청 보기 버튼이 클릭되었습니다.");
  };

  return (
    <Container>
      <InnerBox>
        <Text typo="body300" color="blue100">
          20024.12.24
        </Text>
        <CutTextWrapper>
          <Text typo="subtitle200" color="black">
            곰돌이컷+가위컷
          </Text>
          <RequestButton onClick={handleButtonClick}>
            내 요청 보기
          </RequestButton>
        </CutTextWrapper>
      </InnerBox>
    </Container>
  );
}
