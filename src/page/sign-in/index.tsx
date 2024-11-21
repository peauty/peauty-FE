import { CustomButton } from "../../components/global/CustomButton";
import SocialLoginModal from "../../components/sign-in/SocialLoginModal/SocialLoginModal";
import { useState } from "react";
import { ButtonWrapper, ContentWrapper, PageWrapper } from "./index.styles";
import { HighlightedText, Title } from "../intro/index.styles";

export default function SignIn() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleGeneralSignUp = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <Title>
          <HighlightedText>퓨티</HighlightedText>
          에 오신 것을 환영해요
        </Title>
        <div>
          퓨티는 반려견에게 <HighlightedText>딱!</HighlightedText> 맞는 관리를 위한 서비스예요
        </div>
      </ContentWrapper>
      <ButtonWrapper>
        <CustomButton size="large" variant="secondary" fullwidth={true} onClick={handleGeneralSignUp}>
          일반 회원 가입
        </CustomButton>
        <CustomButton size="large" variant="outline" fullwidth={true}>
          미용사 회원 가입
        </CustomButton>
      </ButtonWrapper>
      {isModalVisible && (
        <SocialLoginModal onClose={handleCloseModal} />
      )}
    </PageWrapper>
  );
}