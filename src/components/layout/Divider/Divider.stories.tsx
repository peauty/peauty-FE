// components/Divider/Divider.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Divider from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    thickness: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Thickness of the divider line in pixels'
    },
    color: {
      control: 'color',
      description: 'Color of the divider line'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {}
};

export const ThickDivider: Story = {
  args: {
    thickness: 3
  }
};

export const CustomColor: Story = {
  args: {
    color: '#94A3B8'
  }
};

export const ThickColoredDivider: Story = {
  args: {
    thickness: 5,
    color: '#3B82F6'
  }
};

export const InContext: Story = {
  render: (args) => (
    <div>
      <div className="p-4 bg-gray-50">상단 컨텐츠</div>
      <Divider {...args} />
      <div className="p-4 bg-gray-50">하단 컨텐츠</div>
    </div>
  )
};