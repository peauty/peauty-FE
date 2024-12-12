import Card from "../../../components/cards/Card";
import {
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
import {
  GetPuppyProfilesResponse,
  GetPuppyProfileResponse,
} from "../../../types/customer/puppy";
import { ROUTE } from "../../../constants/routes";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/page/sign-up/Loading";

export default function CustomerMyPage() {
  const navigate = useNavigate();
  const { userId } = useUserDetails();
  const [profile, setProfile] = useState<GetPuppyProfilesResponse | null>(null);
  const [puppies, setPuppies] = useState<GetPuppyProfileResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    const fetchPuppyProfiles = async () => {
      setIsLoading(true); // 로딩 시작
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
        } finally {
          setIsLoading(false); // 로딩 종료
        }
      }
    };

    fetchPuppyProfiles();
  }, [userId]);

  const handleCard = (puppyId?: number) => {
    if (puppyId) {
      navigate(ROUTE.customer.pets.detail(String(puppyId)));
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <AppBar
        prefix="backButton"
        title="회원정보"
        onclick={() => navigate(ROUTE.customer.home)}
      />
      <PageWrapper>
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
              <Text typo={"subtitle100"} color={"blue100"}>
                {profile?.customerNickname || "사용자"}
                <Text typo={"subtitle100"}> 님</Text>
              </Text>
              <Text typo={"body300"} color={"gray100"}>
                내 정보 수정하기
              </Text>
            </MyInfoWrapper>
            <SubMenuButton text="" to={ROUTE.customer.mypage.detail} />
          </ProfileMenuWrapper>
        </ProfileWrapper>
        <Divider thickness={2} />
        <ContentWrapper>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <SubMenuButton
              text="우리집 퓨티들"
              iconType="plus"
              to={ROUTE.customer.pets.signup}
            />
            {puppies.length === 0 ? (
              <NoPuppyPlaceholder>
                아직 등록된 반려견이 없어요!
              </NoPuppyPlaceholder>
            ) : (
              <CardWrapper>
                {puppies.map((puppy) => (
                  <Card
                    key={puppy.puppyId}
                    imageSrc={puppy.puppyProfileImageUrl || ""}
                    name={puppy.name || ""}
                    age={puppy.age || 0}
                    gender={puppy.sex || ""}
                    weight={`${puppy.weight}` || ""}
                    breed={puppy.breed || ""}
                    tags={puppy.disease || []}
                    onClick={() => handleCard(puppy.puppyId)}
                  />
                ))}
              </CardWrapper>
            )}
          </div>
          <Divider />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <InfoWrapper>
              <Text typo="subtitle200">미용내역</Text>
              <InfoButton message={"완료된 미용에 대한 내역을 볼 수 있어요"} />
            </InfoWrapper>
            <SubMenuButton text="퓨티 미용 내역" to="/customer/status" />
          </div>
          <Divider />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <Text typo="subtitle200">리뷰</Text>
            <SubMenuButton text="리뷰 내역" to="/" />
          </div>
          <Divider />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <Text typo="subtitle200">고객지원</Text>
            <div>
              <SubMenuButton text="공지사항" to="/" />
              <SubMenuButton text="이용약관" to="/" />
              <SubMenuButton text="퓨티안내" to="/" />
            </div>
          </div>
        </ContentWrapper>
      </PageWrapper>
      <GNB type={"customer"} />
    </>
  );
}
