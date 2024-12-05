import Card from "../../../components/cards/Card";
import {
  BoldText,
  CardWrapper,
  ContentWrapper,
  InfoWrapper,
  PageWrapper,
  ProfileImageWrapper,
  ProfileMenuWrapper,
  ProfileWrapper,
  MyInfoWrapper,
  NoPuppyPlaceholder,
} from "./index.styles";
import { AppBar, Divider, GNB, SubMenuButton, Text } from "../../../components";
import InfoButton from "../../../components/button/InfoButton";
import ProfileImg from "../../../components/profile-img/ProfileImg";
import { useUserDetails } from "../../../hooks/useUserDetails";
import { useEffect, useState } from "react";
import { getPuppyProfiles } from "../../../apis/customer/resources/puppy";
import { GetPuppyProfilesResponse, GetPuppyDetailResponse } from "../../../types/customer/puppy";

export default function CustomerMyPage() {
  const { userId, isLoading } = useUserDetails();
  const [profile, setProfile] = useState<GetPuppyProfilesResponse | null>(null);
  const [puppies, setPuppies] = useState<GetPuppyDetailResponse[]>([]);

  useEffect(() => {
    const fetchPuppyProfiles = async () => {
      if (userId) {
        try {
          const data = await getPuppyProfiles(userId);
          setProfile({
            customerId: data.customerId,
            customerNickname: data.customerNickname,
            customerImageUrl: data.customerImageUrl,
          });
          setPuppies(data.puppies || []);
        } catch (error) {
          console.error("Failed to fetch puppy profiles:", error);
        }
      }
    };

    fetchPuppyProfiles();
  }, [userId]);

  return (
    <>
      <AppBar prefix="backButton" title="회원정보" />
      <PageWrapper>
        <ContentWrapper>
          <ProfileWrapper>
            <ProfileImageWrapper>
              <ProfileImg
                src={profile?.customerImageUrl || ""}
                alt={"프로필사진"}
                width={"75"}
                height={"75"}
              />
            </ProfileImageWrapper>
            <ProfileMenuWrapper>
              <MyInfoWrapper>
                <Text typo={"subtitle100"} color={"blue100"} font-weight="bold">
                  {profile?.customerNickname || "사용자"}<Text typo={"subtitle100"}> 님</Text>
                </Text>
                <Text typo={"subtitle300"} color={"gray100"}>
                  내 정보 수정하기
                </Text>
              </MyInfoWrapper>
              <SubMenuButton text="" to={"/"} />
            </ProfileMenuWrapper>
          </ProfileWrapper>
          <Divider thickness={2} />
          <SubMenuButton text="우리집 퓨티들" iconType="plus" to="/" />
          {puppies.length === 0 ? (
            <NoPuppyPlaceholder>아직 등록된 반려견이 없어요!</NoPuppyPlaceholder>
          ) : (
            <CardWrapper>
              {puppies.map((puppy) => (
                <Card
                  key={puppy.puppyId}
                  imageSrc={puppy.profileImageUrl || ""}
                  name={puppy.name || ""}
                  age={puppy.age || 0}
                  gender={puppy.sex || ""}
                  weight={`${puppy.weight}kg` || ""}
                  breed={puppy.breed || ""}
                  tags={puppy.disease || []}
                />
              ))}
            </CardWrapper>
          )}
          <Divider />
          <InfoWrapper>
            <BoldText>미용내역</BoldText>
            <InfoButton message={"미용내역스"} />
          </InfoWrapper>
          <SubMenuButton text="퓨티 미용 내역" to="/" />
          <Divider />
          <BoldText>리뷰</BoldText>
          <SubMenuButton text="리뷰 내역" to="/" />
          <Divider />
          <BoldText>고객지원</BoldText>
          <SubMenuButton text="공지사항" to="/" />
          <SubMenuButton text="이용약관" to="/" />
          <SubMenuButton text="퓨티안내" to="/" />
        </ContentWrapper>
      </PageWrapper>
      <GNB type={"customer"} />
    </>
  );
}