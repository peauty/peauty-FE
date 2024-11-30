import { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./index";

// Storybook 메타데이터 설정
const meta: Meta<typeof Tag> = {
  title: "components/Tag", // Storybook에서의 위치
  component: Tag,
  parameters: {
    layout: "centered", // 컴포넌트를 중앙에 배치
  },
  tags: ["autodocs"], // 자동 문서화 태그
};

export default meta;
type Story = StoryObj<typeof Tag>;

// 기본 태그
export const Default: Story = {
  args: {
    children: "기본 태그", // children으로 전달
  },
};

// 커스텀 색상 태그
export const CustomColorTag: Story = {
  args: {
    children: "커스텀 색상 태그", // children으로 전달
    backgroundColor: "red300", // 빨간 배경
    borderColor: "red100", // 빨간 테두리
    fontColor: "red100", // 빨간 폰트
  },
};

// 길이가 긴 태그
export const LongTag: Story = {
  args: {
    children: "문자가 기이이이인 태그", // children으로 전달
  },
};
