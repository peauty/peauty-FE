import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import { styled } from "styled-components";
import theme from "../../../style/theme";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"], // 자동으로 문서화를 활성화
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    imageSrc: "https://via.placeholder.com/80",
    name: "꼬미",
    age: 3,
    gender: "암컷",
    weight: "3.4kg",
    breed: "말티즈",
    tags: ["피부병", "슬개골", "피부병", "슬개골", "피부병", "슬개골", "피부병", "슬개골"],
  },
};

// 전역 스타일 wrapper
const _globalStyleWidth = styled.div`
  max-width: ${theme.size.maxWidth};
  min-width: ${theme.size.minWidth};
`;

export const WithWrapper: Story = {
  render: (args) => (
    <_globalStyleWidth>
      <Card {...args} />
    </_globalStyleWidth>
  ),
  args: {
    imageSrc: "https://via.placeholder.com/80",
    name: "꼬미",
    age: 3,
    gender: "암컷",
    weight: "3.4kg",
    breed: "말티즈",
    tags: ["피부병", "슬개골"],
  },
};


export const WithManyTagsWrapper: Story = {
  render: (args) => (
    <_globalStyleWidth>
      <Card {...args} />
    </_globalStyleWidth>
  ),
  args: {
    imageSrc: "https://via.placeholder.com/80",
    name: "꼬미",
    age: 3,
    gender: "암컷",
    weight: "3.4kg",
    breed: "말티즈",
    tags: ["피부병", "슬개골", "피부병", "슬개골", "피부병", "슬개골", "피부병", "슬개골"],
  },
};