import { styled } from "styled-components";
import { typography } from "../../../style/typography";

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh; // 전체 높이 사용
`;

export const ContentWrapper = styled.div`
    flex: 1; // 남은 공간 모두 사용
    display: flex;
    flex-direction: column;
    padding: 0 24px; // 좌우 패딩
    gap: 20px;
`;

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; // 세로 정렬 (중앙 정렬)
    width: 100%; // 부모의 전체 너비 사용
`;

export const ProfileImageWrapper = styled.div`
    
`;

export const ProfileMenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1; // 나머지 너비를 차지
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

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`