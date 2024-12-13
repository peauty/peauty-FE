import {
  Container,
  InnerBox,
  CutTextWrapper,
  RequestButton,
} from "./index.styles";
import { useNavigate } from "react-router-dom";
import { Text } from "../../../../../components";

export default function Info() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/customer/request/view");
  };

  return (
    <Container>
      <InnerBox>
        <Text typo="body300" color="blue100">
          2024.12.24 12:30
        </Text>
        <CutTextWrapper>
          <Text typo="subtitle300" color="black">
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
