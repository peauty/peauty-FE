import SocialLoginModal from "../../components/page/sign-in/SocialLoginModal/SocialLoginModal";
import { useState } from "react";
import { ButtonWrapper, ContentWrapper, PageWrapper } from "./index.styles";
import { CustomButton } from "../../components/global/button/CustomButton";
import { Text } from '../../components';

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
        <Text color={'black'} typo={"title100"}>
          <Text color={'blue100'} typo={"title100"}>퓨티</Text>
          에 오신 것을 환영해요
        </Text>
        <Text color={'gray100'} typo={"subtitle300"}>
          퓨티는 반려견에게 <Text color={'blue100'} typo={"subtitle300"}>딱!</Text> 맞는 관리를 위한 서비스예요
        </Text>
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