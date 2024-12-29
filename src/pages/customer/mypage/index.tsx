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
  ContentsWrapper,
} from "./index.styles";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // react-router-dom에서 useLocation을 임포트
import { AppBar, Divider, GNB, SubMenuButton, Text } from "../../../components";
import { getPuppyProfiles } from "../../../apis/customer/resources/puppy";
import {
  GetPuppyProfilesResponse,
  GetPuppyProfileResponse,
} from "../../../types/customer/puppy";
import { ROUTE } from "../../../constants/routes";
import Loading from "../../../components/page/sign-up/Loading";
import Toast from "../../../components/toast"; // Toast 컴포넌트 임포트
import ProfileImg from "../../../components/profile-img/ProfileImg";
import InfoButton from "../../../components/button/InfoButton";
import { useUserDetails } from "../../../hooks/useUserDetails";
export default function CustomerMyPage() {
  const navigate = useNavigate();
  const { userId } = useUserDetails();
  const [profile, setProfile] = useState<GetPuppyProfilesResponse | null>(null);
  const [puppies, setPuppies] = useState<GetPuppyProfileResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation(); // useLocation 훅을 통해 location 객체를 가져옵니다.
  const [toastMessage, setToastMessage] = useState<string | null>(null); // 토스트 메시지 상태 추가

  useEffect(() => {
    if (location.state?.toastMessage) {
      setToastMessage(location.state.toastMessage);

      // 메시지를 표시한 뒤 location.state 초기화
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  useEffect(() => {
    const fetchPuppyProfiles = async () => {
      setIsLoading(true);
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
          setIsLoading(false);
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
        <ProfileWrapper
          onClick={() => navigate(ROUTE.customer.mypage.detail)}
          style={{ cursor: "pointer" }}
        >
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
              <Text typo={"body400"} color={"gray100"}>
                내 정보 수정하기
              </Text>
            </MyInfoWrapper>
            <SubMenuButton text="" to={ROUTE.customer.mypage.detail} />
          </ProfileMenuWrapper>
        </ProfileWrapper>
        <Divider thickness={2} />
        <ContentWrapper>
          <ContentsWrapper>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text typo="subtitle200">내 반려견 목록</Text>
              <SubMenuButton
                text=""
                iconType="plus"
                to={ROUTE.customer.pets.signup}
              />
            </div>
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
                    weight={puppy.weight || 0}
                    breed={puppy.breed || ""}
                    tags={puppy.disease || []}
                    onClick={() => handleCard(puppy.puppyId)}
                  />
                ))}
              </CardWrapper>
            )}
          </ContentsWrapper>
          <Divider />
          <ContentsWrapper>
            <InfoWrapper>
              <Text typo="subtitle200">미용내역</Text>
              <InfoButton message={"완료된 미용에 대한 내역을 볼 수 있어요"} />
            </InfoWrapper>
            <SubMenuButton text="퓨티 미용 내역" to="/customer/status" />
          </ContentsWrapper>
          <Divider />
          <ContentsWrapper>
            <Text typo="subtitle200">리뷰</Text>
            <SubMenuButton
              text="리뷰 내역"
              to={ROUTE.customer.mypage.review.history}
            />
          </ContentsWrapper>
          <Divider />
          <ContentsWrapper>
            <Text typo="subtitle200">고객지원</Text>
            <div>
              <SubMenuButton text="공지사항" to="/" />
              <SubMenuButton text="이용약관" to="/" />
              <SubMenuButton text="퓨티안내" to="/" />
            </div>
          </ContentsWrapper>
        </ContentWrapper>
      </PageWrapper>

      {/* 토스트 메시지가 있을 경우 출력 */}
      {toastMessage && <Toast>{toastMessage}</Toast>}

      <GNB type={"customer"} />
    </>
  );
}
