import { styled } from "styled-components";

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap:25px;
`;


export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
  
`;
export const BannerWrapper = styled.div`
    width: 100%;
    height: 98px;
    background-color: #FEF9E8;
    padding: 10px 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;  
`;

export const FlexRowWrapper = styled.div`
  display: flex;
  align-items: center; 
  gap: 5px; 
`;

export const BadgeGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
