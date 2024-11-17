// StepProgress.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { StepProgress } from './StepProgress';

const meta: Meta<typeof StepProgress> = {
  title: 'Components/StepProgress',
  component: StepProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    total: {
      control: { type: 'number', min: 2, max: 6 },
      description: '전체 단계 수',
    },
    current: {
      control: { type: 'number', min: 1 },
      description: '현재 진행 단계',
    },
    steps: {
      control: [],
      description: '각 단계별 텍스트',
    },
    activeColor: {
      control: 'color',
      description: '활성화된 요소의 색상',
    },
    inactiveColor: {
      control: 'color',
      description: '비활성화된 요소의 색상',
    },
    textColor: {
      control: 'color',
      description: '활성화된 텍스트 색상',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StepProgress>;

export const Default: Story = {
  args: {
    total: 4,
    current: 3,
    steps: ['before 촬영', '목욕', '미용 진행', '미용 완료'],
    activeColor: '#2563EB',
    inactiveColor: '#E2E8F0',
    textColor: '#1F2937',
  },
};

export const InProgress: Story = {
  args: {
    total: 4,
    current: 2,
    steps: ['Step 1', 'In Progress', 'Step 3', 'Step 4'],
    activeColor: '#22C55E',
    inactiveColor: '#E2E8F0',
    textColor: '#1F2937',
  },
};

export const CustomColors: Story = {
  args: {
    total: 3,
    current: 2,
    steps: ['Started', 'Processing', 'Completed'],
    activeColor: '#8B5CF6',
    inactiveColor: '#E2E8F0',
    textColor: '#1F2937',
  },
};

/**
 * StepProgress 컴포넌트는 단계별 진행 상황을 시각적으로 표시합니다.
 * - 각 단계는 원과 텍스트로 표시됩니다
 * - 현재 진행 중인 단계는 펄스 애니메이션 효과가 적용됩니다
 * - 완료된 단계는 활성화 색상으로 표시됩니다
 */
export const Documentation: Story = {
  args: {
    total: 4,
    current: 3,
    steps: ['Step 1', 'Step 2', 'Current', 'Step 4'],
    activeColor: '#2563EB',
    inactiveColor: '#E2E8F0',
    textColor: '#1F2937',
  },
  parameters: {
    docs: {
      description: {
        story: `
사용 예시:
\`\`\`tsx
<StepProgress
  total={4}
  current={3}
  steps={['Step 1', 'Step 2', 'Current', 'Step 4']}
  activeColor="#2563EB"
  inactiveColor="#E2E8F0"
  textColor="#1F2937"
/>
\`\`\`
        `,
      },
    },
  },
};