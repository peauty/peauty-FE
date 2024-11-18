import styled from "styled-components";
import { colors } from "../../../style/color";
import { typography } from "../../../style/typography";
interface TagProps {
    tagName: string;
}

const TagWrapper = styled.div`
    color: ${colors.blue200};
    border: 1px solid ${colors.blue200};
    border-radius: 5px;
    background-color: ${colors.blue100};
    font-size: ${typography.body6};
    padding: 3px 10px;
    font-weight: 500;
`;

export function Tag({tagName}: TagProps){
    return(
        <TagWrapper>{tagName}</TagWrapper>
    )
}