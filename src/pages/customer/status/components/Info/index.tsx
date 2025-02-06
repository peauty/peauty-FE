import {
  Container,
  InnerBox,
  CutTextWrapper,
  RequestButton,
  RequestDate,
} from "./index.styles";
import { useNavigate } from "react-router-dom";
import { Text } from "../../../../../components";
import { formatDashDate } from "../../../../../utils/dataformat";
interface InfoProps {
  requestDate: string;
  requestText: string;
  userId: number; // userId 타입 추가
  puppyId: number; // puppyId 타입 추가
  processId: number; // processId 타입 추가
}

export default function Info({
  requestDate,
  requestText,
  userId,
  puppyId,
  processId,
}: InfoProps) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    const url = `/customer/request/request-look?userId=${userId}&puppyId=${puppyId}&processId=${processId}`;
    console.log("Navigating to URL:", url); // URL을 콘솔에 출력
    navigate(url);
  };

  return (
    <Container>
      <InnerBox>
        <Text typo="body400" color="gray100">
          <RequestDate>요청일</RequestDate>
          {formatDashDate(requestDate)}
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
