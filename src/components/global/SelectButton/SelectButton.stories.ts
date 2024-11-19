import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { SelectButton, SelectButtonProps, ButtonContainer } from "./SelectButton";

// Storybook 메타데이터 설정
const meta: Meta<typeof SelectButton> = {
  title: "Components/SelectButton", 
  component: SelectButton,
  parameters: {
    layout: "centered", 
  },
  argTypes: {
    text: { control: "text", description: "버튼에 표시될 텍스트" },
    onClick: { action: "clicked", description: "버튼 클릭 시 실행될 함수" },
  },
};

export default meta;

type Story = StoryObj<SelectButtonProps>;

// 기본 상태
export const Default: Story = {
  args: {
    text: "기본 버튼",
  },
};

