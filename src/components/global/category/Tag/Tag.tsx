// Tag.tsx
import React from "react";
import { TagWrapper } from "./Tag.styles";
import { Text } from "../../texts/text/Text";
interface TagProps {
  /**
   * 스타일 옵션: 색상 지정
   */
  color?: {
    backgroundColor?: string;
    borderColor?: string;
    fontColor?: string;
  };
}

export default function Tag({
  children,
  color,
}: React.PropsWithChildren<TagProps>) {
  return <TagWrapper color={color}>
    <Text typo="body300">
      {children}
      </Text>
      </TagWrapper>;
}
