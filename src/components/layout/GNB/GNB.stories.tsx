import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import GNB from "./GNB";

const meta: Meta<typeof GNB> = {
  title: "Components/GNB",
  component: GNB,
};

export default meta;

type Story = StoryObj<typeof GNB>;

// User GNB
export const UserGNB: Story = {
  args: {
    type: "user",
  },
};

// Stylist GNB
export const StylistGNB: Story = {
  args: {
    type: "stylist",
  },
};

// Button GNB
export const ButtonGNB: Story = {
  args: {
    onLargeButtonClick: () => alert("다음 버튼이 클릭되었습니다!"),
  },
};
