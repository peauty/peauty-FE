import { Meta, StoryObj } from "@storybook/react";
import Rating from "./Rating";

const meta: Meta<typeof Rating> = {
  title: "Components/Rating",
  component: Rating,
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    score: "4.0",
  },
};
