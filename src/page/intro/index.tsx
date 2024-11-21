import symbol from '../../assets/images/symbol.png'
import { CustomButton } from '../../components/global/CustomButton';
import { ButtonWrapper, ContentWrapper, HighlightedText, Logo, PageWrapper, Title } from './index.styles';


const Intro = () => {
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
            <CustomButton>시작하기</CustomButton>
        </ButtonWrapper>
    </PageWrapper>
  );
};

export default Intro;
