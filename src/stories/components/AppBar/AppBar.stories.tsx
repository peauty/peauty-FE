import { StoryObj, type Meta } from '@storybook/react';
import { AppBarBack } from '../../../assets/svg';
import { AppBar } from './AppBar';

const meta: Meta<typeof AppBar> = {
  title: 'Components/AppBar',
  component: AppBar,
};

export default meta;
type Story = StoryObj<typeof meta>;

function handleBackClick() {
  if (window.history.length > 1) {
    window.history.back(); // 이전 페이지로 이동
  }
}


export const Default: Story = {
  args: {},
};

export const Back: Story = {
  args: {
    prefix: <AppBarBack height="20px" cursor="pointer" onClick={handleBackClick}/>,
  },
};

// export const SearchInput: Story = {
//   args: {
//     prefix: <AppBarBack height="24px" cursor="pointer" />,
//     suffix: <SearchBar autoFocus />,
//   },
// };

// export const Search: Story = {
//   args: {
//     prefix: <Logo width="94px" height="24px" />,
//     suffix: <SearchIcon width="20px" height="20px" cursor="pointer" />,
//   },
// };
