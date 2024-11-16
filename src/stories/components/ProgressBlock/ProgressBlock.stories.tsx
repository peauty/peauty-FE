// ProgressBlock.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBlock } from './ProgressBlock';

const meta: Meta<typeof ProgressBlock> = {
  title: 'Components/ProgressBlock',
  component: ProgressBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    total: {
      control: { type: 'number', min: 1, max: 10 },
      description: '전체 블록 수',
    },
    current: {
      control: { type: 'number', min: 0 },
      description: '현재 진행된 블록 수',
    },
    gap: {
      control: { type: 'number', min: 0 },
      description: '블록 사이의 간격 (px)',
    },
    blockWidth: {
      control: 'text',
      description: '블록의 너비 (CSS 단위)',
    },
    blockHeight: {
      control: 'text',
      description: '블록의 높이 (CSS 단위)',
    },
    activeColor: {
      control: 'color',
      description: '진행된 블록의 색상',
    },
    inactiveColor: {
      control: 'color',
      description: '진행되지 않은 블록의 색상',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBlock>;

export const Default: Story = {
  args: {
    total: 3,
    current: 1,
    gap: 4,
    blockWidth: '64px',
    blockHeight: '8px',
    activeColor: '#2563EB',
    inactiveColor: '#F1F3F5',
  },
};

export const CustomStyle: Story = {
  args: {
    total: 5,
    current: 2,
    gap: 8,
    blockWidth: '80px',
    blockHeight: '12px',
    activeColor: '#22C55E',
    inactiveColor: '#E5E7EB',
  },
};

export const CompletedProgress: Story = {
  args: {
    total: 4,
    current: 4,
    gap: 4,
    blockWidth: '64px',
    blockHeight: '8px',
    activeColor: '#2563EB',
    inactiveColor: '#F1F3F5',
  },
};

export const LongProgress: Story = {
  args: {
    total: 8,
    current: 3,
    gap: 4,
    blockWidth: '48px',
    blockHeight: '8px',
    activeColor: '#2563EB',
    inactiveColor: '#F1F3F5',
  },
};

/**
 * ProgressBlock 컴포넌트는 단계별 진행 상황을 시각적으로 표시합니다.
 * - 각 블록은 하나의 단계를 나타냅니다
 * - 진행된 단계는 activeColor로 표시됩니다
 * - 남은 단계는 inactiveColor로 표시됩니다
 */
export const Documentation: Story = {
  args: {
    total: 5,
    current: 3,
    gap: 4,
    blockWidth: '64px',
    blockHeight: '8px',
    activeColor: '#2563EB',
    inactiveColor: '#F1F3F5',
  },
  parameters: {
    docs: {
      description: {
        story: `
사용 예시:
\`\`\`tsx
<ProgressBlock
  total={5}
  current={3}
  gap={4}
  blockWidth="64px"
  blockHeight="8px"
  activeColor="#2563EB"
  inactiveColor="#F1F3F5"
/>
\`\`\`
        `,
      },
    },
  },
};