import type { Meta, StoryObj } from '@storybook/react';
import { Text as Txt } from './Text';  // Text 컴포넌트 import
import { typography } from '../../../../style/typography';  // typography import

// Storybook 메타 설정
const meta = {
  title: 'Components/Text',  // 스토리북에서 이 컴포넌트를 어떻게 보여줄지 정의
  component: Txt,  // Text 컴포넌트 연결
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color',  // 색상 선택기 제공
    },
    typo: {
      control: 'select',  // typo prop을 선택할 수 있는 드롭다운 제공
      options: Object.keys(typography),  // typography 객체의 키를 선택 옵션으로 제공
    },
  },
} satisfies Meta<typeof Txt>;

export default meta;

// Story 타입 정의
type Story = StoryObj<typeof meta>;

// Default 스토리 설정
export const Default: Story = {
  args: {
    typo: 'title100',  // 기본 typo 스타일 설정
    children: '퓨티퓨티',  // 텍스트 내용 설정
  },
};
