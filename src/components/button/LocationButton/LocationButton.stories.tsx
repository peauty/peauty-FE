import { Meta, StoryObj } from "@storybook/react";
import LocationButton from "./LocationButton";

const meta: Meta<typeof LocationButton> = {
  title: "Components/LocationButton",
  component: LocationButton,
  tags: ["autodocs"],
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof LocationButton>;

export const Default: Story = {
  args: {},
};
