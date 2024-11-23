import { StoryObj, Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import SubMenuButton from "./SubMenuButton";

export default {
  title: "Components/SubMenuButton",
  component: SubMenuButton,
  args: {
    text: "공지사항",
    to: "/notice",
    iconType: "arrow",
  },
  argTypes: {
    iconType: {
      control: {
        type: "select",
        options: ["arrow", "plus"],
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta<typeof SubMenuButton>;

type Story = StoryObj<typeof SubMenuButton>;

export const ArrowIcon: Story = {
  args: {
    text: "공지사항",
    to: "/notice",
    iconType: "arrow",
  },
};

export const PlusIcon: Story = {
  args: {
    text: "추가하기",
    to: "/add",
    iconType: "plus",
  },
};