import {
  Container,
  InnerBox,
  CutTextWrapper,
  RequestButton,
  RequestDate,
} from "./index.styles";
import { useNavigate } from "react-router-dom";
import { Text } from "../../../../../components";


interface InfoProps {
  requestDate: string;
  requestText: string;
}

export default function Info({ requestDate, requestText }: InfoProps) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/customer/request/request-look");
  };

  return (
    <Container>
      <InnerBox>
        <Text typo="body300" color="gray100">
          <RequestDate>요청일</RequestDate>
          {requestDate}
        </Text>
        <CutTextWrapper>
          <Text typo="subtitle300" color="blue100">
            {requestText}
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
