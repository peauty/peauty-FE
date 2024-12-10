import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Text, GNB, Divider } from "../../../../components";
import ProfileImg from "../../../../components/profile-img/ProfileImg";
import {
  PageWrapper,
  FieldWrapper,
  TextWrapper,
  LeftAlignedText,
  EndWrapper,
} from "./index.styles";
import { ROUTE } from "../../../../constants/routes";
import { getDesignerAccount } from "../../../../apis/designer/resources/designer";
import { GetDesignerAccountResponse } from "../../../../types/designer/designer";
import { useUserDetails } from "../../../../hooks/useUserDetails";

export default function DesignerMyPageDetail() {
  const navigate = useNavigate();
  const { userId } = useUserDetails();
  const [profile, setProfile] = useState<GetDesignerAccountResponse | null>(
    null,
  );

  useEffect(() => {
    const fetchProfileData = async () => {
      if (!userId) return;

      try {
        const data = await getDesignerAccount(userId);
        setProfile(data); // API 응답 데이터를 그대로 상태로 설정
      } catch (error) {
        console.error("Failed to fetch designer profile:", error);
      }
    };

    fetchProfileData();
  }, [userId]);

  const handleEditClick = () => {
    navigate(ROUTE.designer.mypageEdit);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate(ROUTE.signIn);
  };

  return (
    <>
      <PageWrapper>
        <AppBar prefix="backButton" title="회원 정보" />
        <ProfileImg
          src={profile?.profileImageUrl || "default-profile.png"} // profile이 null인 경우 기본값 처리
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
              {profile?.nickname || ""}
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
              {profile?.name || ""}
            </Text>
          </TextWrapper>
          <Divider />
        </FieldWrapper>

        <FieldWrapper>
          <TextWrapper>
            <Text typo="subtitle300" color="gray100">
              휴대전화 번호
            </Text>
            <Text typo="body100" color="black">
              {profile?.phoneNumber || ""}
            </Text>
          </TextWrapper>
          <Divider />
        </FieldWrapper>

        <FieldWrapper>
          <TextWrapper>
            <Text typo="subtitle300" color="gray100">
              이메일 주소
            </Text>
            <Text typo="body100" color="black">
              {profile?.email || ""}
            </Text>
          </TextWrapper>
          <Divider />
        </FieldWrapper>
        <EndWrapper onClick={handleLogout}>
          <Text color="gray100" typo={"subtitle300"}>
            로그아웃
          </Text>
        </EndWrapper>
      </PageWrapper>
      <GNB type="designer" />
    </>
  );
}
