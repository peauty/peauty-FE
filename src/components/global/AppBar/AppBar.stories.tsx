import { StoryObj, type Meta } from '@storybook/react';
import { AppBarBack } from '../../../assets/svg';
import { AppBar } from "./index"

const meta: Meta<typeof AppBar> = {
  title: 'Components/AppBar',
  component: AppBar,
};

export default meta;
type Story = StoryObj<typeof meta>;

function handleBackClick() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    alert('이전 페이지가 없습니다.');
  }
}

export const Default: Story = {
  args: {},
};

export const Back: Story = {
  args: {
    prefix: (
      <AppBarBack
        height="20px"
        cursor="pointer"
        onClick={handleBackClick}
      />
    ),
    title: '제목을 입력하세요', // 제목 추가
    titleSize: '16px', // 제목 크기 설정
  },
};
