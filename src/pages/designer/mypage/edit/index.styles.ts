import styled from "styled-components";
import theme from "../../../../style/theme";

export const MyPageEditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0 calc(${theme.size.gnbHeight} + 20px);
`;

export const NicknameAvailabilityMessage = styled.div<{ isAvailable: boolean }>`
  color: ${({ isAvailable }) => (isAvailable ? "green" : "red")};
  font-size: 14px;
  margin-top: 5px;
`;
