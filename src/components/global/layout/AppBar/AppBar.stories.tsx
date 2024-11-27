import { StoryObj, Meta } from "@storybook/react";
import AppBar from "./AppBar";
import { StyledAppBarBack } from "./AppBar.styles";

const meta: Meta<typeof AppBar> = {
  title: "Components/AppBar",
  component: AppBar,
  tags: ["autodocs"], // Storybook autodocs 태그
  args: {
    titleSize: "18px", // 기본 props 설정
  },
  argTypes: {
    title: { control: "text" },
    titleSize: { control: "text" },
    prefix: { control: false },
    suffix: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof AppBar>;

// 기본 AppBar
export const Logo: Story = {
  args: {
    prefix: "logo",
  },
};

// 뒤로가기 버튼 포함
export const BackButton: Story = {
  args: {
    prefix: "backButton",
  },
};

// 제목 크기 변경
export const LargeTitle: Story = {
  args: {
    prefix: "backButton",
    title: "공지사항",
    titleSize: "24px",
  },
};
