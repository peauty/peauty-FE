import { StoryObj, Meta } from "@storybook/react";
import RadioSelectButton, { RadioSelectButtonProps } from "./RadioSelectButton";

const meta: Meta<typeof RadioSelectButton> = {
  title: "Components/RadioSelectButton",
  component: RadioSelectButton,
  argTypes: {
    onSelect: { action: "selected" },
  },
};

export default meta;

type Story = StoryObj<RadioSelectButtonProps>;

export const Default: Story = {
  args: {
    buttonNames: ["소형견", "중형견", "대형견"],
    selectedIndex: 1,
    col: 3,
    onSelect: (index) => console.log("선택된 버튼 인덱스:", index),
  },
};
