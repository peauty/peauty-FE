import { StoryObj, Meta } from "@storybook/react";
import StylistItem from "./PetlistItem";

const meta: Meta<typeof StylistItem> = {
  title: "Components/StylistItem",
  component: StylistItem,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "Name of the stylist.",
    },
    imageUrl: {
      control: "text",
      description: "URL of the stylist's image.",
    },
    location: {
      control: "text",
      description: "Location of the stylist.",
    },
    star: {
      control: { type: "number", min: 0, max: 5, step: 0.1 },
      description: "Star rating of the stylist (0.0 - 5.0).",
    },
    starCount: {
      control: { type: "number", min: 0 },
      description: "Number of reviews.",
    },
    career: {
      control: { type: "number", min: 0 },
      description: "Years of career experience.",
    },
    badges: {
      control: { type: "object" }, // 배열도 객체로 처리
      description: "List of badges representing achievements or specialties.",
    },
  },
};
export default meta;

type Story = StoryObj<typeof StylistItem>;

export const Default: Story = {
  args: {
    name: "수석실장 시언",
    imageUrl: "https://via.placeholder.com/65",
    location: "몽끄의 아틀리에 위례점",
    star: "3.0",
    starCount: 12,
    career: 5,
    badges: [
      { type: "general", variant: "green", text: "청결 우수상" },
      { type: "scissors", variant: "gold", text: "2023 골드 가위" },
    ],
  },
};

export const NoBadges: Story = {
  args: {
    name: "실장 민지",
    imageUrl: "https://via.placeholder.com/65",
    location: "헤어샵 강남점",
    star: "3.0",
    starCount: 20,
    career: 3,
    badges: [],
  },
};

export const ManyBadges: Story = {
  args: {
    name: "디자이너 혜원",
    imageUrl: "https://via.placeholder.com/65",
    location: "프리미엄 헤어살롱",
    star: "5.0",
    starCount: 50,
    career: 10,
    badges: [
      { type: "general", variant: "blue", text: "전문가 블루" },
      { type: "scissors", variant: "gold", text: "2023 골드 가위" },
      { type: "scissors", variant: "silver", text: "2022 실버 가위" },
      { type: "normal", variant: "disease", text: "외이염", typo: "body300" },
    ],
  },
};
