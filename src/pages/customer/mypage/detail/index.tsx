import { AppBar, Text, GNB, Divider } from "../../../../components";
import ProfileImg from "../../../../components/profile-img/ProfileImg";
import { PageWrapper, FieldWrapper, TextWrapper, LeftAlignedText } from "./index.styles";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../constants/routes";
import { useEffect, useState } from "react";
import { getCustomerProfile } from "../../../../apis/customer/resources/customer";
import { GetCustomerProfileResponse } from "../../../../types/customer/customer";
import { useUserDetails } from "../../../../hooks/useUserDetails";

export default function CustomerMyPageDetail() {
  const navigate = useNavigate();
  const { userId, isLoading } = useUserDetails();
  const [profileData, setProfileData] = useState<GetCustomerProfileResponse>({});

  useEffect(() => {
    const fetchProfile = async () => {
      if (userId) {
        try {
          const data = await getCustomerProfile(userId); // Replace with actual userId
          setProfileData(data);
        } catch (error) {
          console.error('Failed to fetch profile:', error);
        }
      }
    };

    fetchProfile();
  }, [userId, isLoading]);

  const handleEditClick = () => {
    navigate(ROUTE.customer.mypage.edit);
  };

  return (
    <>
      <PageWrapper>
        <AppBar prefix="backButton" title="회원 정보" onclick={() => navigate(ROUTE.customer.mypage.home)}/>
        <ProfileImg
          src={profileData.profileImageUrl || ""} 
          alt="profileImage"
          width="176px"
          height="176px"
        />
        <LeftAlignedText onClick={handleEditClick}>
          <Text typo="subtitle300" color="blue100">수정</Text>
        </LeftAlignedText>

        <FieldWrapper>
          <TextWrapper>
            <Text typo="subtitle300" color="gray100">닉네임</Text>
            <Text typo="body100" color="black">{profileData.nickname}</Text>
          </TextWrapper>
          <Divider />
        </FieldWrapper>

        <FieldWrapper>
          <TextWrapper>
            <Text typo="subtitle300" color="gray100">이름</Text>
            <Text typo="body100" color="black">{profileData.name}</Text>
          </TextWrapper>
          <Divider />
        </FieldWrapper>

        <FieldWrapper>
          <TextWrapper>
            <Text typo="subtitle300" color="gray100">지역</Text>
            <Text typo="body100" color="black">{profileData.address}</Text>
          </TextWrapper>
          <Divider />
        </FieldWrapper>
      </PageWrapper>
      <GNB type="designer" />
    </>
  );
}