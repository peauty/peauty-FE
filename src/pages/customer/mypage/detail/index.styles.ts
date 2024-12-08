import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px; // FieldWrapper 간 간격
  width: 100%;
  margin-top: 30px;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px; // Text와 Divider 간 간격
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px; 
`;


export const LeftAlignedText = styled.div`
  align-self: flex-end; 
  //padding:0px 25px;
`;
