import type { Meta, StoryObj } from '@storybook/react';
import { typography } from '../../../../style/typography';
import { Text as TXT } from './Text';

const meta = {
  title: 'Components/Text',
  component: TXT,
  tags: ['autodocs'],
  argTypes: {
    typo: {
      control: 'select',
      options: Object.keys(typography),
    },
  },
} satisfies Meta<typeof TXT>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    typo: 'title100',
    children: '프림 Pream',
  },
};
