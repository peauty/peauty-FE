import { Meta, StoryObj } from "@storybook/react";
import DropButton, { DropButtonProps } from "./DropButton";

const meta: Meta<typeof DropButton> = {
  title: "Components/DropButton",
  component: DropButton,
  argTypes: {
    onSelect: { action: "item selected" }, 
    isActive: { control: "boolean" },
    placeholder: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<DropButtonProps>;

export const Default: Story = {
  args: {
    isActive: false,
    placeholder: "옵션을 선택하세요",
    options: ["옵션1", "옵션2", "옵션3", "옵션4"], // 드롭다운 항목
    onSelect: (value) => console.log("선택된 값:", value),
  },
};

export const ItemSelected: Story = {
  args: {
    isActive: false,
    placeholder: "옵션을 선택하세요",
    options: ["옵션1", "옵션2", "옵션3", "옵션4"],
    onSelect: (value) => console.log("선택된 값:", value),
  },
};
