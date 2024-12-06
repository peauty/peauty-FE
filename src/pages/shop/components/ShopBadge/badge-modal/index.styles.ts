import styled from "styled-components";
import { colors } from "../../../../../style/color";

export const BadgeModalWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

export const CancelWrapper = styled.div`
    display: flex;
    cursor: pointer;
    justify-content: flex-end;
    font-size: 25px;
    line-height: 0.8;
`;
export const BadgeContetsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;
export const InterContentStyled = styled.div`
    margin: 0 auto;
`;

export const BoxWrapper = styled.div`
    width: 110px;
    height: 120px;
    background-color: ${colors.blue300};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const InnerBox = styled(BoxWrapper)`
    width: 90px;
    height: 97px;
    box-sizing: border-box;
    border: 4px solid ${colors.blue200};
`;

export const BadgeExplainBox = styled.div`
    background-color: ${colors.gray400};
    width: 100%;
    padding:20px;
    border-radius: 10px;
    text-align: center;
   // cursor: text;
`;