import {
  Container,
  InnerBox,
  CutTextWrapper,
  RequestButton,
  RequestDate,
} from "./index.styles";
import { useNavigate } from "react-router-dom";
import { Text } from "../../../../../components";
import { colors } from "../../../../../style/color";

export default function Info() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/customer/request/view");
  };

  return (
    <Container>
      <InnerBox>
        <Text typo="body300" color="gray100">
          <RequestDate>요청일</RequestDate>
          2024.12.24
        </Text>
        <CutTextWrapper>
          <Text typo="subtitle300" color="blue100">
            곰돌이컷+가위컷
            <Text typo="subtitle300">을 요청했어요!</Text>
          </Text>
          <RequestButton onClick={handleButtonClick}>
            내 요청 보기
          </RequestButton>
        </CutTextWrapper>
      </InnerBox>
    </Container>
  );
}
