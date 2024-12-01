import { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    children: "등록 성공입니다!",
  },
};

export const WithCustomIcon: Story = {
  args: {
    children: "Custom icon example",
  },
};
