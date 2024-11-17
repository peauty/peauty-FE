import type { Meta, StoryObj } from '@storybook/react';
import { CustomButton } from './CustomButton';

const meta = {
  title: 'Components/CustomButton',
  component: CustomButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '버튼 내부 텍스트',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '버튼 크기',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: '버튼 스타일',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
    fullWidth: {
      control: 'boolean',
      description: '너비 100% 설정',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '시작하기',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    children: '취소',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Outline: Story = {
  args: {
    children: '더보기',
    variant: 'outline',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    children: '확인',
    size: 'small',
    variant: 'primary',
  },
};

export const Large: Story = {
  args: {
    children: '계정 만들기',
    size: 'large',
    variant: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    children: '비활성화',
    disabled: true,
    variant: 'primary',
  },
};

export const FullWidth: Story = {
  args: {
    children: '전체 너비 버튼',
    fullWidth: true,
    variant: 'primary',
  },
  parameters: {
    layout: 'padded',
  },
};

// Container를 활용한 FullWidth 버튼 예시
export const FullWidthContainer: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '400px', padding: '16px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    children: '컨테이너 안의 전체 너비 버튼',
    fullWidth: true,
    variant: 'primary',
  },
};

// 버튼 그룹 예시
export const ButtonGroup: Story = {
  args: {
    children: '버튼', // 기본 children 값 추가
  },
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <CustomButton variant="primary" size="medium">확인</CustomButton>
      <CustomButton variant="secondary" size="medium">취소</CustomButton>
      <CustomButton variant="outline" size="medium">더보기</CustomButton>
    </div>
  ),
};

// 다양한 너비의 버튼 예시
export const VariousWidths: Story = {
  args: {
    children: '버튼', // 기본 children 값 추가
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '600px' }}>
      <CustomButton variant="primary">기본 버튼</CustomButton>
      <CustomButton variant="primary" fullWidth>전체 너비 버튼</CustomButton>
      <div style={{ width: '50%' }}>
        <CustomButton variant="primary" fullWidth>50% 너비 버튼</CustomButton>
      </div>
    </div>
  ),
};