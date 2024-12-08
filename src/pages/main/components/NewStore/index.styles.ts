import styled from "styled-components";
import { colors } from "../../../../style/color";

export const NewStoreWrapper = styled.div`
    display: flex;
    gap: 5px;
`;
export const NewStoreItem = styled.div`
flex:1;
gap: 20px;
`;

export const NewStoreImage = styled.div`
    height: 100px;
    border-radius:10px;
    background-color: ${colors.gray400};
`;

export const NewStoreTextWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    gap: 2px;
`;

export const NewStoreBadgeWrap = styled.div`
   display: flex;
    gap: 5px;
    margin: 3px 0;
`