// CustomInput.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { CustomInput } from './index';
import { CustomButton } from '../CustomButton/index';
const meta = {
  title: 'Components/CustomInput',
  component: CustomInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    placeholder: '텍스트를 입력하세요',
  },
} satisfies Meta<typeof CustomInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 입력 필드
export const Default: Story = {
  args: {
    label: '기본 입력',
  },
};

// 밑줄 스타일 입력 필드
export const Underlined: Story = {
  args: {
    label: '밑줄 스타일',
    variant: 'underlined',
  },
};

// 에러 상태
export const WithError: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <CustomInput 
        label="에러 상태 (Outlined)" 
        error="올바른 이메일 주소를 입력해주세요" 
      />
      <CustomInput 
        label="에러 상태 (Underlined)" 
        variant="underlined"
        error="올바른 이메일 주소를 입력해주세요" 
      />
    </div>
  ),
};

// 도움말 텍스트
export const WithHint: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <CustomInput 
        label="도움말 포함 (Outlined)" 
        hint="영문, 숫자 조합 8-20자" 
      />
      <CustomInput 
        label="도움말 포함 (Underlined)" 
        variant="underlined"
        hint="영문, 숫자 조합 8-20자" 
      />
    </div>
  ),
};

// 비활성화 상태
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <CustomInput 
        label="비활성화 (Outlined)" 
        disabled 
        value="수정할 수 없는 텍스트" 
      />
      <CustomInput 
        label="비활성화 (Underlined)" 
        variant="underlined"
        disabled 
        value="수정할 수 없는 텍스트" 
      />
    </div>
  ),
};

// 전체 너비
export const FullWidth: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <CustomInput 
        label="전체 너비 (Outlined)" 
        fullwidth={true}
      />
      <CustomInput 
        label="전체 너비 (Underlined)" 
        variant="underlined"
        fullwidth={true}
      />
    </div>
  ),
};

// 다양한 상태 조합
export const Playground: Story = {
  args: {
    label: 'playground',
    placeholder: '자유롭게 설정을 변경해보세요',
    variant: 'outlined',
    fullwidth: false,
    disabled: false,
    error: '',
    hint: '',
  },
};


export const WithSuffix: Story = {
  args: {
    label: '제목',
    placeholder: '값을 입력해주세요',
    variant: 'underlined',
    suffix: (
      <CustomButton  size="small">
        확인
      </CustomButton>
    ),
  },
};