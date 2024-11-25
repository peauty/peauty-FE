import { useNavigate } from 'react-router-dom'; // For programmatic navigation
import symbol from '../../assets/images/symbol.png';
import { ButtonWrapper, ContentWrapper, Logo, PageWrapper } from './index.styles';
import { Title } from '../../components/global/texts/Title/Title.styles';
import { HighlightedText } from '../../components/global/texts/HighlightedText/HighlightedText.styles';
import { CustomButton } from '../../components/global/button/CustomButton';

const Intro = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/signin');
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <Title>
          당신의 
          <HighlightedText> 반려견</HighlightedText>
          의 모든 날들이
        </Title>
        <Title>
          <HighlightedText>아름답도록</HighlightedText>
        </Title>
        <Logo src={symbol} alt="Logo" />
      </ContentWrapper>
      <ButtonWrapper>
        <CustomButton onClick={handleStartClick}>시작하기</CustomButton>
      </ButtonWrapper>
    </PageWrapper>
  );
};

export default Intro;
