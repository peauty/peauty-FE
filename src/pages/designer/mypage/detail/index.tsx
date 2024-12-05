import { AppBar, Text, GNB, Divider } from "../../../../components";
import ProfileImg from "../../../../components/profile-img/ProfileImg";
import { PageWrapper, FieldWrapper, TextWrapper, LeftAlignedText } from "./index.styles";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../constants/routes"; 

export default function CustomerMyPageDetail() {
  const navigate = useNavigate();

  const ProfileData = {
    designerId: 1,
    name: "임시언",
    nickname: "수석실장 시언",
    profileImageUrl: "https://thumb.mt.co.kr/21/2024/11/2024110705371097800_2.jpg",
    email: "jisu@gmail.com",
    phoneNum: "010-1234-5678",
  };

  const handleEditClick = () => {
    navigate(ROUTE.designer.mypageEdit); // ROUTE 객체에서 경로 사용
  };

  return (
    <>
      <PageWrapper>
        <AppBar prefix="backButton" title="회원 정보" />
        <ProfileImg
          src={ProfileData.profileImageUrl}
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
            <Text typo="body100" color="black">{ProfileData.nickname}</Text>
          </TextWrapper>
          <Divider />
        </FieldWrapper>

        <FieldWrapper>
          <TextWrapper>
            <Text typo="subtitle300" color="gray100">이름</Text>
            <Text typo="body100" color="black">{ProfileData.name}</Text>
          </TextWrapper>
          <Divider />
        </FieldWrapper>

        <FieldWrapper>
          <TextWrapper>
            <Text typo="subtitle300" color="gray100">휴대전화 번호</Text>
            <Text typo="body100" color="black">{ProfileData.phoneNum}</Text>
          </TextWrapper>
          <Divider />
        </FieldWrapper>

        <FieldWrapper>
          <TextWrapper>
            <Text typo="subtitle300" color="gray100">이메일 주소</Text>
            <Text typo="body100" color="black">{ProfileData.email}</Text>
          </TextWrapper>
          <Divider />
        </FieldWrapper>
      </PageWrapper>
      <GNB type="designer" />
    </>
  );
}
