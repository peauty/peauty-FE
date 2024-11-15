// SocialLoginButton.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import SocialLoginButton from './SocialLoginButton';

const meta: Meta<typeof SocialLoginButton> = {
  title: 'Components/SocialLoginButton',
  component: SocialLoginButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '소셜 로그인 버튼은 카카오, 구글, 네이버 로그인을 위한 UI 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['kakao', 'google', 'naver'],
      description: '소셜 로그인 버튼의 타입을 지정합니다. 가능한 값은 "kakao", "google", "naver"입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const KakaoLogin: Story = {
  args: {
    type: 'kakao',
  },
  parameters: {
    docs: {
      description: {
        story: '카카오 로그인 버튼입니다.',
      },
    },
  },
};

export const GoogleLogin: Story = {
  args: {
    type: 'google',
  },
  parameters: {
    docs: {
      description: {
        story: '구글 로그인 버튼입니다.',
      },
    },
  },
};

export const NaverLogin: Story = {
  args: {
    type: 'naver',
  },
  parameters: {
    docs: {
      description: {
        story: '네이버 로그인 버튼입니다.',
      },
    },
  },
};