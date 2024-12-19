import { StoryObj, Meta } from "@storybook/react";
import MultiSelectButton, { MultiSelectButtonProps } from "./MultiSelectButton";

const meta: Meta<typeof MultiSelectButton> = {
  title: "Components/MultiSelectButton",
  component: MultiSelectButton,
  argTypes: {
    onSelect: { action: "selected" }, // Storybook에서 이벤트 확인용
  },
};

export default meta;
type Story = StoryObj<MultiSelectButtonProps>;

export const Default: Story = {
  args: {
    row: 2,
    col: 3,
    buttonNames: [
      "질병 없음",
      "피부염",
      "슬개골",
      "외이염",
      "관절염",
      "결막염",
    ],
    selectedIndexes: [0],
    onSelect: (indexes) => console.log("선택된 버튼 인덱스:", indexes),
  },
};

export const MultipleSelected: Story = {
  args: {
    row: 2,
    col: 3,
    buttonNames: [
      "질병 없음",
      "피부염",
      "슬개골",
      "외이염",
      "관절염",
      "결막염",
    ],
    selectedIndexes: [1, 3],
    onSelect: (indexes) => console.log("선택된 버튼 인덱스:", indexes),
  },
};

export const LargeGrid: Story = {
  args: {
    row: 3,
    col: 4,
    buttonNames: [
      "질병 없음",
      "피부염",
      "슬개골",
      "외이염",
      "관절염",
      "결막염",
      "치주염",
      "방광염",
      "장염",
      "두통",
      "요통",
    ],
    selectedIndexes: [],
    onSelect: (indexes) => console.log("선택된 버튼 인덱스:", indexes),
  },
};

export const Payment: Story = {
  args: {
    row: 1,
    col: 3,
    buttonNames: [, "카드 결제", "현금 결제", "계좌 이체"],
    selectedIndexes: [],
    onSelect: (indexes: number[]) =>
      console.log("선택된 버튼 인덱스:", indexes),
  },
};
