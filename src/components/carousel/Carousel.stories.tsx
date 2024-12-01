import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Carousel from "./Carousel";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    images: [
      "assets/images/main/배너.png",
      "assets/images/main/배너.png",
      "assets/images/main/배너.png",
    ],
    autoPlay: true,
    autoPlayInterval: 3000,
  },
};
