import theme from '../../../../style/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-width: ${theme.size.minWidth};
  max-width: ${theme.size.maxWidth};
  height: 100vh;
  margin: 0 auto;
  overscroll-behavior-y: contain;
`;

export const Main = styled.div`
  width: 100%;
  padding: ${theme.size.appBarHeight} 0 0 0;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
