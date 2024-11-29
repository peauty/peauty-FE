import { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

// 일반 뱃지 - 파란색
export const GeneralBlue: Story = {
  args: {
    type: "general",
    variant: "blue",
    text: "일반 파란색",
  },
};

// 일반 뱃지 - 초록색
export const GeneralGreen: Story = {
  args: {
    type: "general",
    variant: "green",
    text: "일반 초록색",
  },
};

// 질병 뱃지
export const GeneralDisease: Story = {
  args: {
    type: "normal",
    variant: "disease",
    text: "질병 태그",
    typo: "body300",
  },
};

// 가위 뱃지 - 골드
export const ScissorsGold: Story = {
  args: {
    type: "scissors",
    variant: "gold",
    text: "골드 가위",
  },
};

// 가위 뱃지 - 실버
export const ScissorsSilver: Story = {
  args: {
    type: "scissors",
    variant: "silver",
    text: "실버 가위",
  },
};

// 가위 뱃지 - 브론즈
export const ScissorsBronze: Story = {
  args: {
    type: "scissors",
    variant: "bronze",
    text: "브론즈 가위",
  },
};
