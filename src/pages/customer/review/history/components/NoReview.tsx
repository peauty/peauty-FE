import styled from "styled-components";
import { Text } from "../../../../../components/texts/Text";
import { NotReview } from "../../../../../assets/svg";

export default function NoReview(props: { message: string }) {
  return (
    <CenteredContainer>
      <ContentWrapper>
        <NotReviewWrapper>
          <NotReview width={140} />
        </NotReviewWrapper>
        <TextWrapper>
          <Text typo="subtitle300" color="gray200">
            {props.message}
          </Text>
          <br />
          <Text typo="body300" color="gray200">
            서비스 이용 후 다시 확인해주세요
          </Text>
        </TextWrapper>
      </ContentWrapper>
    </CenteredContainer>
  );
}

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(
    100vh - 200px
  ); // 상단 네비게이션 바나 다른 요소들의 높이를 고려하여 조정
  width: 100%;
`;

const ContentWrapper = styled.div`
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
