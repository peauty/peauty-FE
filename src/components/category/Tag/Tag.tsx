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
  color?: {
    backgroundColor?: Color;
    borderColor?: Color;
    fontColor?: Color;
  };
}

export default function Tag({
  children,
  color,
}: React.PropsWithChildren<TagProps>) {
  return (
    <TagWrapper color={color}>
      <Text typo="body300" color={color?.fontColor}>{children}</Text>
    </TagWrapper>
  );
}
