// Tag.tsx
import React from "react";
import { TagWrapper } from "./Tag.styles";

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

export default function Tag({ children, color }: React.PropsWithChildren<TagProps>) {
  return <TagWrapper color={color}>{children}</TagWrapper>;
}