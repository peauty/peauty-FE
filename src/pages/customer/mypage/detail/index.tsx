import { AppBar, Text, GNB, Divider } from "../../../../components";
import ProfileImg from "../../../../components/profile-img/ProfileImg";
import {
  PageWrapper,
  FieldWrapper,
  TextWrapper,
  LeftAlignedText,
  EndWrapper,
} from "./index.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../constants/routes";
import { useEffect, useState } from "react";
import { getCustomerProfile } from "../../../../apis/customer/resources/customer";
import { GetCustomerProfileResponse } from "../../../../types/customer/customer";
import { useUserDetails } from "../../../../hooks/useUserDetails";
import Toast from "../../../../components/toast";

export default function CustomerMyPageDetail() {
  const navigate = useNavigate();
  const { userId, isLoading } = useUserDetails();
  const [profileData, setProfileData] = useState<GetCustomerProfileResponse>(
    {},
  );

  const location = useLocation();
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  useEffect(() => {
    // location.state로부터 toastMessage 가져오기
    if (location.state?.toastMessage) {
      setToastMessage(location.state.toastMessage); // 메시지를 상태로 저장
    }
  }, [location]);

  useEffect(() => {
    const fetchProfile = async () => {
      if (userId) {
        try {
          const data = await getCustomerProfile(userId); // Replace with actual userId
          setProfileData(data);
        } catch (error) {
          console.error("Failed to fetch profile:", error);
        }
      }
    };

    fetchProfile();
  }, [userId, isLoading]);

  const handleEditClick = () => {
    navigate(ROUTE.customer.mypage.edit);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate(ROUTE.signIn);
  };

  return (
    <>
      <AppBar prefix="backButton" title="회원 정보" />
      <PageWrapper>
        <ProfileImg
          src={profileData.profileImageUrl || ""}
          alt="profileImage"
          width="176px"
          height="176px"
        />
        <LeftAlignedText onClick={handleEditClick}>
          <Text typo="subtitle300" color="blue100">
            수정
          </Text>
        </LeftAlignedText>

        <FieldWrapper>
          <TextWrapper>
            <Text typo="subtitle300" color="gray100">
              닉네임
            </Text>
            <Text typo="body100" color="black">
              {profileData.nickname}
            </Text>
          </TextWrapper>
          <Divider />
        </FieldWrapper>

        <FieldWrapper>
          <TextWrapper>
            <Text typo="subtitle300" color="gray100">
              이름
            </Text>
            <Text typo="body100" color="black">
              {profileData.name}
            </Text>
          </TextWrapper>
          <Divider />
        </FieldWrapper>

        <FieldWrapper>
          <TextWrapper>
            <Text typo="subtitle300" color="gray100">
              지역
            </Text>
            <Text typo="body100" color="black">
              {profileData.address}
            </Text>
          </TextWrapper>
          <Divider />
        </FieldWrapper>
        <EndWrapper onClick={handleLogout}>
          <Text color="gray100" typo={"body200"}>
            로그아웃
          </Text>
        </EndWrapper>
        <GNB type="designer" />
      </PageWrapper>
      {toastMessage && <Toast style={{ bottom: "25px" }}>{toastMessage}</Toast>}
    </>
  );
}
