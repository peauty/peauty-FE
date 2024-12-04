import { Meta, StoryObj } from "@storybook/react";
import MenuItem from "./MenuItem";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof MenuItem> = {
  title: "Components/MenuItem",
  component: MenuItem,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ maxWidth: "200px" }}>{Story()}</div>
      </BrowserRouter>
    ),
  ],
  argTypes: {
    user: {
      control: "select",
      options: ["customer", "designer"],
      description: "User type to determine the menu configuration.",
    },
    ele: {
      control: "select",
      options: ["home", "search", "bookMark", "mypage", "schedule", "propose"],
      description: "Key for the menu item.",
    },
    isActive: {
      control: "boolean",
      description: "Indicates whether the menu item is active.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {
  args: {
    user: "customer",
    ele: "home",
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    user: "customer",
    ele: "mypage",
    isActive: true,
  },
};

export const DesignerMenu: Story = {
  args: {
    user: "designer",
    ele: "schedule",
    isActive: true,
  },
};