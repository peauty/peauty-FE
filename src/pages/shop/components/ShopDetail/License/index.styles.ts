import styled from "styled-components";
import { colors } from "../../../../../style/color";

export const ImageWrapper = styled.div`
    display: flex;
    margin-top: 15px;
    gap: 5px;
`;

export const ImageItem = styled.img`
width: 85px;
height: 80px;
border: 1px solid ${colors.gray300};
`