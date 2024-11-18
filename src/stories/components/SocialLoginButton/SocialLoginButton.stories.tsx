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
    round: {
      control: 'boolean',
      description: '동그란 버튼을 사용할지 여부를 선택합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const KakaoLogin: Story = {
  args: {
    type: 'kakao',
    round: false, // 기본적으로 가로 바 형태로 설정
  },
  parameters: {
    docs: {
      description: {
        story: '카카오 로그인 버튼입니다.',
      },
    },
  },
};

export const KakaoLoginRound: Story = {
  args: {
    type: 'kakao',
    round: true, // 동그란 버튼 형태
  },
  parameters: {
    docs: {
      description: {
        story: '동그란 카카오 로그인 버튼입니다.',
      },
    },
  },
};

export const GoogleLogin: Story = {
  args: {
    type: 'google',
    round: false,
  },
  parameters: {
    docs: {
      description: {
        story: '구글 로그인 버튼입니다.',
      },
    },
  },
};

export const GoogleLoginRound: Story = {
  args: {
    type: 'google',
    round: true,
  },
  parameters: {
    docs: {
      description: {
        story: '동그란 구글 로그인 버튼입니다.',
      },
    },
  },
};

export const NaverLogin: Story = {
  args: {
    type: 'naver',
    round: false,
  },
  parameters: {
    docs: {
      description: {
        story: '네이버 로그인 버튼입니다.',
      },
    },
  },
};

export const NaverLoginRound: Story = {
  args: {
    type: 'naver',
    round: true,
  },
  parameters: {
    docs: {
      description: {
        story: '동그란 네이버 로그인 버튼입니다.',
      },
    },
  },
};