import SocialLoginModal from "./components/SocialLoginModal/SocialLoginModal";
import { useEffect, useState } from "react";
import { ButtonWrapper, ContentWrapper, Wrapper } from "./index.styles";
import { CustomButton } from "../../components/button/CustomButton";
import { Text } from "../../components";
import { useUserDetails } from "../../hooks/useUserDetails";
import { ROUTE } from "../../constants/routes";
import { useNavigate } from "react-router-dom";

function parseQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    accessToken: params.get("accessToken") || "",
    refreshToken: params.get("refreshToken") || "",
  };
}

export default function SignIn() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [signinType, setSigninType] = useState("");
  const { role, isLoading } = useUserDetails();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) return;

    const { accessToken, refreshToken } = parseQueryParams();
    if (accessToken && refreshToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      if (role === "ROLE_CUSTOMER") {
        navigate(ROUTE.customer.home);
      } else if (role === "ROLE_DESIGNER") {
        navigate(ROUTE.designer.home);
      } else {
        navigate(ROUTE.signIn);
      }
    }
  }, [isLoading, role, navigate]);

  const handleCustomerSignUp = () => {
    setIsModalVisible(true);
    setSigninType("customer");
  };

  const handleDesignerSignUp = () => {
    setIsModalVisible(true);
    setSigninType("designer");
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <Text color={"black"} typo={"title100"}>
            <Text color={"blue100"} typo={"title100"}>
              퓨티
            </Text>
            에 오신 것을 환영해요
          </Text>
          <Text color={"gray100"} typo={"subtitle300"}>
            퓨티는 반려견에게{" "}
            <Text color={"blue100"} typo={"subtitle300"}>
              딱!
            </Text>{" "}
            맞는 관리를 위한 서비스예요
          </Text>
        </ContentWrapper>
        <ButtonWrapper>
          <CustomButton
            size="large"
            variant="outline"
            fullwidth={true}
            onClick={handleCustomerSignUp}
          >
            일반 회원 가입
          </CustomButton>
          <CustomButton
            size="large"
            variant="outline"
            fullwidth={true}
            onClick={handleDesignerSignUp}
          >
            미용사 회원 가입
          </CustomButton>
        </ButtonWrapper>
        {isModalVisible && (
          <SocialLoginModal
            signinType={signinType}
            onClose={handleCloseModal}
          />
        )}
      </Wrapper>
    </>
  );
}
