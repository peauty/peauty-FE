import styled from "styled-components";
import { colors } from "../../../../style/color";
import { NewStoreTextWrap } from "../NewStore/index.styles";
export const PopularStoreWrap = styled.div`
    display: flex;
    flex-direction:column;
    gap: 15px;
`;
export const PopularStoreItem = styled.div`
    display: flex;
    gap: 25px;
    align-items: center;
`;

export const PopularStoreImg = styled.div`
    background-color: ${colors.gray400};
    border-radius: 50%;
    width: 90px;
    height: 90px;
`;

export const PopularStoreText = styled(NewStoreTextWrap)`
 margin-top: 0;
 gap: 0;
 line-height: 1.4;
 `;