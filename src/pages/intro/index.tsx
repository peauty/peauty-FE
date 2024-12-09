import { useNavigate } from "react-router-dom"; // For programmatic navigation
import symbol from "../../assets/images/symbol.png";
import {
  ButtonWrapper,
  ContentWrapper,
  Logo,
  PageWrapper,
} from "./index.styles";
import { CustomButton } from "../../components/button/CustomButton";
import { Text } from "../../components";
import { ROUTE } from "../../constants/routes";
import { useUserDetails } from "../../hooks/useUserDetails";
import { useEffect } from "react";

const Intro = () => {
  const navigate = useNavigate();
  const {role, isLoading } = useUserDetails();

  useEffect(()=>{
    if (!isLoading) {
      if (role === "ROLE_CUSTOMER") {
        navigate(ROUTE.customer.home)
      } else if (role === "ROLE_DESIGNER") {
        console.log() 
        // navigate(ROUTE.designer.home) // TODO
      }
    }
  }, [isLoading]) 

  const handleStartClick = () => {
    navigate(ROUTE.signIn);
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <Text color={"black"} typo={"subtitle200"}>
          당신의
          <Text color={"blue100"} typo={"subtitle200"}>
            {" "}
            반려견
          </Text>
          의 모든 날들이
        </Text>
        <Text color={"blue100"} typo={"subtitle200"}>
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
