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

export const Gender: Story = {
  args: {
    buttonNames: ["여아", "남아"],
    selectedIndex: 1,
    col: 2,
    onSelect: (index) => console.log("선택된 버튼 인덱스:", index),
  },
};

export const GroomingType: Story = {
  args: {
    buttonNames: ["전체", "위생 미용"],
    selectedIndex: 1,
    col: 2,
    onSelect: (index) => console.log("선택된 버튼 인덱스:", index),
  },
};

export const GroomingBodyType: Story = {
  args: {
    buttonNames: ["클리핑", "썸머컷", "가위컷"],
    selectedIndex: 1,
    col: 3,
    onSelect: (index) => console.log("선택된 버튼 인덱스:", index),
  },
};
