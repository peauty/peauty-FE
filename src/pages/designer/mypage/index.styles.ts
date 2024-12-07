import { styled } from "styled-components";
import { typography } from "../../../style/typography";


export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 23px;
`;

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; 
    width: 100%; 
`;

export const ProfileImageWrapper = styled.div`
    
`;

export const ProfileMenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1; 
    margin-left: 16px;
`;

export const MyInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BoldText = styled.div`
    ${typography.subtitle200};
    font-weight: bold;
`

export const InfoWrapper = styled.div`
    gap: 5px;
    display: flex;
`

