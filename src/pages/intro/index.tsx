import { useNavigate } from 'react-router-dom'; // For programmatic navigation
import symbol from '../../assets/images/symbol.png';
import { ButtonWrapper, ContentWrapper, Logo, PageWrapper } from './index.styles';
import { CustomButton } from '../../components/global/button/CustomButton';
import { Text } from '../../components';

const Intro = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/signin');
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <Text color={'black'} typo={'subtitle200'}>
          당신의 
          <Text color={'blue100'} typo={'subtitle200'}> 반려견</Text>
          의 모든 날들이
        </Text>
        <Text color={'blue100'} typo={'subtitle200'}>
          아름답도록
        </Text>
        <Logo src={symbol} alt="Logo" />
      </ContentWrapper>
      <ButtonWrapper>
        <CustomButton onClick={handleStartClick}>시작하기</CustomButton>
      </ButtonWrapper>
    </PageWrapper>
  );
};

export default Intro;
