import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 0;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const SectionWrapper2 = styled(SectionWrapper)`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

export const TwoInputItem = styled.div`
  flex: 1;
`;
