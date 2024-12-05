// Tag.tsx
import React from "react";
import { TagWrapper } from "./Tag.styles";
import { Text } from "../../texts/Text";
import { colors } from "../../../style/color";

type Color = keyof typeof colors;

export interface TagProps {
  /**
   * 스타일 옵션: 색상 지정
   */
  backgroundColor?: Color;
  borderColor?: Color;
  fontColor?: Color;
}

export default function Tag({
  children,
  backgroundColor,
  borderColor,
}: React.PropsWithChildren<TagProps>) {
  return (
    <TagWrapper backgroundColor={backgroundColor} borderColor={borderColor}>
      <Text typo="body300" color="blue100">
        {children}
      </Text>
    </TagWrapper>
  );
}
