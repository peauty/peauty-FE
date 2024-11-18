import { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

// Storybook 메타데이터 설정
const meta: Meta<typeof Tag> = {
  title: "Components/Tag", // Storybook에서의 위치
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
    tagName: "기본 태그",
  },
};

// 커스텀 태그
export const CustomTag: Story = {
  args: {
    tagName: "커스텀 태그",
  },
};

// 길이가 긴 태그
export const LongTag: Story = {
  args: {
    tagName:"문자가 기이이이인 태그",
  },
};
