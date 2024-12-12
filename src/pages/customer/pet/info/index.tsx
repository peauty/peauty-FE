import { useEffect, useState } from "react";
import { AppBar, Text } from "../../../../components";
import {
  InfoWrapper,
  PageWrapper,
  ContentWrapper,
  ButtonWrapper,
  MyInfoWrapper,
} from "./index.styles";
import ProfileImg from "../../../../components/profile-img/ProfileImg";
import OptionButton from "./components/OptionButton";
import SvgBirthDay from "../../../../assets/svg/BirthDay";
import SvgMale from "../../../../assets/svg/Male";
import { getPuppyDetail } from "../../../../apis/customer/resources/puppy";
import { GetPuppyDetailResponse } from "../../../../types/customer/puppy";
import { useNavigate, useParams } from "react-router-dom";
import { useUserDetails } from "../../../../hooks/useUserDetails";
import Loading from "../../../../components/page/sign-up/Loading";
import { ROUTE } from "../../../../constants/routes";

export default function PetInfoPage() {
  const [puppyData, setPuppyData] = useState<GetPuppyDetailResponse | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const { userId } = useUserDetails();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPuppyDetail = async (userId: number, puppyId: number) => {
      try {
        const data = await getPuppyDetail(userId, puppyId);
        setPuppyData(data);
      } catch (error) {
        console.error("Failed to fetch puppy detail:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId && params.puppyId) {
      fetchPuppyDetail(userId, Number(params.puppyId));
    }
  }, [userId, params.puppyId]);

  const handleSelect = (index: number) => {
    if (index === 0) {
      console.log("삭제하기 클릭");
    } else if (index === 1) {
      console.log("수정하기 클릭");
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (!puppyData) {
    // Alert와 navigate를 사용
    alert("강아지 데이터를 불러올 수 없습니다.");
    navigate(ROUTE.customer.mypage.home); // mypage로 이동
    return null; // 아무것도 렌더링하지 않음
  }

  return (
    <PageWrapper>
      <AppBar prefix="backButton" />
      <ContentWrapper>
        <Text typo="body100" color="gray100">
          {"태어난지 "}
          <Text typo="body100" color="blue100">
            {puppyData.age}
          </Text>
        </Text>

        <ProfileImg
          src={puppyData.profileImageUrl || ""}
          alt="프로필사진"
          width="200"
          height="200"
        />

        <MyInfoWrapper>
          <Text typo="title100" color="black">
            {puppyData.name}
          </Text>
          <SvgMale width={15} />
        </MyInfoWrapper>

        <Text typo="body300" color="blue100">
          {puppyData.breed}ㅤ
          <Text typo="body300" color="gray100">
            {puppyData.weight} kg
          </Text>
        </Text>

        <MyInfoWrapper>
          <SvgBirthDay width={15} />
          <Text typo="body300" color="gray100">
            {puppyData.birthdate}
            <Text typo="body300" color="blue100">
              {puppyData.age} 살
            </Text>
          </Text>
        </MyInfoWrapper>

        {puppyData.disease && puppyData.disease.length > 0 && (
          <InfoWrapper>
            <Text typo="body100" color="blue100">
              {puppyData.disease.join(", ")}
              <Text typo="body100" color="black">
                {puppyData.diseaseDescription
                  ? ` - ${puppyData.diseaseDescription}`
                  : "이 있어요"}
              </Text>
            </Text>
          </InfoWrapper>
        )}

        <ButtonWrapper>
          <OptionButton
            buttonNames={["삭제하기", "수정하기"]}
            selectedIndex={0}
            onSelect={handleSelect}
          />
        </ButtonWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
}
