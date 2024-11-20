import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { GNB } from "./GNB";
import { MemoryRouter } from "react-router-dom";

// Storybook 메타데이터 설정
const meta: Meta<typeof GNB> = {
  title: "Components/GNB", // Storybook에서의 위치
  component: GNB,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: "fullscreen", // 전체 화면 레이아웃
  },
};

export default meta;
type Story = StoryObj<typeof GNB>;

// 기본 GNB 스토리
export const Default: Story = {};
