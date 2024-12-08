import styled from 'styled-components';

export const MyPageEditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height:100vh;
  margin-top: 30px;
`;
`;

export const NicknameAvailabilityMessage = styled.div<{ isAvailable: boolean }>`
  color: ${({ isAvailable }) => (isAvailable ? 'green' : 'red')};
  font-size: 14px;
  margin-top: 5px;
`;
