import { Meta, StoryObj } from "@storybook/react";
import ProfileImg from "./ProfileImg";

const meta: Meta<typeof ProfileImg> = {
  title: "Components/ProfileImg",
  component: ProfileImg,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    onClick: { action: "clicked" },
    width: { control: "text" },
    height: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof ProfileImg>;

export const Default: Story = {
    args: {
        src: "https://via.placeholder.com/150",
        alt: "Profile Image",
        width: "100px",
        height: "100px",
        onClick: undefined, // 명시적으로 설정
    },
};

export const WithEditButton: Story = {
  args: {
    ...Default.args,
    onClick: () => alert("Edit button clicked"),
  },
};