import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, CustomInput, CustomButton, GNB } from "../../../../components";
import ProfileImg from "../../../../components/profile-img/ProfileImg";
import {
  getDesignerAccount,
  updateDesignerAccount,
} from "../../../../apis/designer/resources/designer";
import { MyPageEditWrapper } from "./index.styles";
import {
  GetDesignerAccountResponse,
  UpdateDesignerAccountRequest,
} from "../../../../types/designer/designer";
import { useUserDetails } from "../../../../hooks/useUserDetails";
import { useCheckNickname } from "../../../../apis/designer/hooks/useUser";

export default function DesignerMyPageEdit() {
  const navigate = useNavigate();
  const { userId } = useUserDetails();
  const [profile, setProfile] = useState<GetDesignerAccountResponse | null>(
    null,
  );
  const [formData, setFormData] = useState<UpdateDesignerAccountRequest>({});
  const [nicknameAvailable, setNicknameAvailable] = useState<boolean | null>(
    null,
  ); // 중복 검사 상태
  const { check } = useCheckNickname();

  useEffect(() => {
    const fetchProfile = async () => {
      if (!userId) return;
      try {
        const data = await getDesignerAccount(userId);
        setProfile(data);
        setFormData(data); // 초기값 설정
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };
    fetchProfile();
  }, [userId]);

  const handleInputChange = (
    field: keyof UpdateDesignerAccountRequest,
    value: string,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!userId) return;
    try {
      await updateDesignerAccount(userId, formData);
      navigate("/designer/mypage/detail"); // 수정 완료 후 상세 페이지로 이동
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  const checkNicknameAvailability = async () => {
    if (!formData.nickname) return;

    try {
      const isAvailable = await check(formData.nickname); // useCheckNickname 훅을 사용하여 중복 검사
      setNicknameAvailable(isAvailable);
    } catch (error) {
      setNicknameAvailable(false);
      console.error("중복 검사 중 오류 발생:", error);
    }
  };

  const isFormValid = () => {
    return (
      formData.nickname &&
      formData.name &&
      formData.phoneNumber &&
      formData.email
    );
  };

  if (!profile) return <div>Loading...</div>;

  return (
    <>
      <AppBar prefix="backButton" title="회원 정보" />
      <MyPageEditWrapper>
        <ProfileImg
          src={profile.profileImageUrl || "default-profile.png"}
          alt="profileImage"
          width="176px"
          height="176px"
          onClick={() => console.log("click")}
        />
        <CustomInput
          label="닉네임"
          placeholder="닉네임을 입력해주세요"
          value={formData.nickname || ""}
          onChange={(e) => handleInputChange("nickname", e.target.value)}
          variant="outlined"
          error={
            nicknameAvailable === false ? "이미 존재하는 닉네임입니다." : ""
          }
          success={
            nicknameAvailable === true ? "사용 가능한 닉네임입니다." : ""
          }
          suffix={
            <CustomButton
              size="small"
              variant="primary"
              onClick={checkNicknameAvailability}
            >
              중복 검사
            </CustomButton>
          }
        />
        <CustomInput
          label="이름"
          placeholder="이름을 입력해주세요"
          value={formData.name || ""}
          onChange={(e) => handleInputChange("name", e.target.value)}
          variant="outlined"
        />
        <CustomInput
          label="휴대전화 번호"
          placeholder="번호를 입력해주세요"
          value={formData.phoneNumber || ""}
          onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
          variant="outlined"
        />
        <CustomInput
          label="이메일"
          placeholder="이메일을 입력해주세요"
          value={formData.email || ""}
          onChange={(e) => handleInputChange("email", e.target.value)}
          variant="outlined"
        />
      </MyPageEditWrapper>
      <GNB
        buttonText="확인"
        onLargeButtonClick={handleSubmit}
        disabled={!isFormValid()} // 폼이 유효하지 않으면 버튼 비활성화
      />
    </>
  );
}
