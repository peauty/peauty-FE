import { Meta, StoryFn } from '@storybook/react';
import SubMenu, { SubMenuProps} from './SubMenu';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Components/SubMenu',
  component: SubMenu,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {
    text: { control: 'text', description: '공지사항 텍스트' },
    to: { control: 'text', description: '이동할 페이지 URL' },
  },
} as Meta;

const Template: StoryFn<SubMenuProps> = (args) => <SubMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '공지사항 보기',
  to: '/notice',
};

export const CustomText = Template.bind({});
CustomText.args = {
  text: '설정 페이지로 이동',
  to: '/settings',
};
