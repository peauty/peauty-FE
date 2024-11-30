import styled from 'styled-components';
import { colors } from '../../../style/color';

export const CardWrapper = styled.div`
  width: 100%;
  margin: 0 auto; // 중앙 정렬
  border: 1px solid ${colors.gray200};
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ProfileImagWrapper = styled.div`
  flex: 1;
`;

export const InfoWrapper = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 16px;
    gap: 5px;
`

export const DiseaseWrapper = styled.div`
    display: flex;
    gap: 5px;

`