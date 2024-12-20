// ProgressBar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './index';

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: '진행률 (0-100)',
    },
    width: {
      control: 'text',
      description: '프로그레스 바의 너비',
    },
    height: {
      control: 'text',
      description: '프로그레스 바의 높이',
    },
    backgroundColor: {
      control: 'color',
      description: '배경 색상',
    },
    progressColor: {
      control: 'color',
      description: '진행률 표시 색상',
    },
    textColor: {
      control: 'color',
      description: '텍스트 색상',
    },
    fontSize: {
      control: 'text',
      description: '텍스트 크기',
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 56,
    width: '300px',
    height: '8px',
    backgroundColor: '#F1F3F5',
    progressColor: '#2563EB',
    textColor: '#111827',
    fontSize: '14px',
  },
};

export const Small: Story = {
  args: {
    progress: 30,
    width: '200px',
    height: '4px',
    fontSize: '12px',
  },
};

export const Large: Story = {
  args: {
    progress: 70,
    width: '400px',
    height: '12px',
    fontSize: '16px',
  },
};

export const CustomColors: Story = {
  args: {
    progress: 60,
    backgroundColor: '#FFE5E5',
    progressColor: '#FF4444',
    textColor: '#FF4444',
  },
};