import { Meta, StoryObj } from "@storybook/react";
import InfoButton from "./InfoButton";

const meta: Meta<typeof InfoButton> = {
  title: "Components/InfoButton", // Storybook에서 컴포넌트가 표시될 위치
  component: InfoButton,
  tags: ["autodocs"], // 자동으로 문서화를 활성화
  argTypes: {
    message: {
      control: "text", // Storybook UI에서 메시지 수정 가능
      description: "Tooltip message displayed above the button",
    },
  },
};

export default meta;

type Story = StoryObj<typeof InfoButton>;

export const Default: Story = {
  args: {
    message: "This is the default information tooltip!",
  },
};

export const LongMessage: Story = {
  args: {
    message:
      "This is a much longer message to demonstrate how the tooltip handles lengthy content gracefully.",
  },
};

export const ShortMessage: Story = {
  args: {
    message: "Short info",
  },
};