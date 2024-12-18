import styled from "styled-components";
import { Text } from "../../../../../components/texts/Text";
import { colors } from "../../../../../style/color";
import { NotReview } from "../../../../../assets/svg";

export default function NoReview() {
  return (
    <CenteredContainer>
      <NotReviewWrapper>
        <NotReview width={140} />
      </NotReviewWrapper>
      <TextWrapper>
        <Text typo="subtitle300" color="gray200">
          작성 가능한 리뷰가 없어요
        </Text><br/>
        <Text typo="body300" color="gray200">
          서비스 이용 후 다시 확인해주세요
        </Text>
      </TextWrapper>
    </CenteredContainer>
  );
}


const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
`;

const NotReviewWrapper = styled.div`
  margin-bottom: 30px; 
`;

const TextWrapper = styled.div`
  text-align: center; 
`;
