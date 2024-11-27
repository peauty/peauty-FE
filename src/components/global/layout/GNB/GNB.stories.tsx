import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import GNB from "./GNB";

const meta: Meta<typeof GNB> = {
  title: "Components/GNB",
  component: GNB,
  argTypes: {
    type: {
      control: false, // Storybook에서는 동적 조작 필요 없음
    },
  },
};

export default meta;

type Story = StoryObj<typeof GNB>;

export const UserGNB: Story = {
  args: {
    type: "user", // 회원용 GNB
  },
};

export const StylistGNB: Story = {
  args: {
    type: "stylist", // 미용사용 GNB
  },
};
