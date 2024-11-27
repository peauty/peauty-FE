import { StoryObj, Meta } from "@storybook/react";
import AppBar from "./AppBar";
import { AppBarBack } from "../../../../assets/svg";
const meta: Meta<typeof AppBar> = {
  title: "Components/AppBar",
  component: AppBar,
};

export default meta;
type Story = StoryObj<typeof AppBar>;

// 기본 AppBar
export const Logo: Story = {
  args: {},
};

// 뒤로가기 버튼 포함
export const Back: Story = {
  args: {
    prefix: <AppBarBack height="20px" cursor="pointer " />,
  },
};

// 뒤로가기 버튼이랑 title 추가 된 것
export const BackWithTitle: Story = {
  args: {
    prefix: <AppBarBack height="24px" cursor="pointer" />,
    title: "",
  },
};
