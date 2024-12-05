import { Meta, StoryObj } from "@storybook/react";
import StarRating from "./StarRating";

const meta: Meta<typeof StarRating> = {
  title: "Components/StarRating",
  component: StarRating,
  args: {
    rating: 5.0, // 기본값 설정
  },
  argTypes: {
    rating: {
      control: { type: "number", min: 0, max: 5, step: 0.1 },
      description: "Rating value between 0 and 5",
    },
  },
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Default: Story = {
  args: {
    rating: 5.0, // 기본 별점
  },
};

export const HalfRating: Story = {
  args: {
    rating: 2.5, // 2.5 점
  },
};

export const CustomRating: Story = {
  args: {
    rating: 4.3, // 4.3 점
  },
};
