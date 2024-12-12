import { useEffect, useState } from "react";
import { AppBar, Text } from "../../../../components";
import {
  InfoWrapper,
  PageWrapper,
  ContentWrapper,
  ButtonWrapper,
  MyInfoWrapper,
} from "./index.styles";
import { IoIosMale, IoIosFemale } from "react-icons/io";
import ProfileImg from "../../../../components/profile-img/ProfileImg";
import OptionButton from "./components/OptionButton";
import SvgBirthDay from "../../../../assets/svg/BirthDay";
import {
  getPuppyDetail,
  deletePuppy,
} from "../../../../apis/customer/resources/puppy";
import { GetPuppyDetailResponse } from "../../../../types/customer/puppy";
import { useNavigate, useParams } from "react-router-dom";
import { useUserDetails } from "../../../../hooks/useUserDetails";
import Loading from "../../../../components/page/sign-up/Loading";
import { ROUTE } from "../../../../constants/routes";
import Modal from "./components/Modal";
import Gender from "./components/Gender";

export default function PetInfoPage() {
  const [puppyData, setPuppyData] = useState<GetPuppyDetailResponse | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userId } = useUserDetails();
  const params = useParams();
  const puppyId = params.puppyId;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPuppyDetail = async (userId: number, _puppyId: number) => {
      try {
        const data = await getPuppyDetail(userId, _puppyId);
        setPuppyData(data);
      } catch (error) {
        console.error("Failed to fetch puppy detail:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId && puppyId) {
      fetchPuppyDetail(userId, Number(puppyId));
    }
  }, [userId, puppyId]);

  const handleDelete = async () => {
    if (!userId || !params.puppyId) return;
    try {
      await deletePuppy(userId, Number(params.puppyId));
      alert("강아지가 삭제되었습니다.");
      navigate(ROUTE.customer.mypage.home); // 성공 시 mypage로 이동
    } catch (error) {
      console.error("Failed to delete puppy:", error);
      alert("삭제 중 문제가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const handleSelect = (index: number) => {
    if (index === 0) {
      setIsModalOpen(true); // 삭제하기 클릭 시 모달 열기
    } else if (index === 1 && puppyId) {
      navigate(ROUTE.customer.pets.edit(puppyId));
    }
  };

  const handleBack = () => {
    navigate(ROUTE.customer.mypage.home);
  };

  if (loading) {
    return <Loading />;
  }

  if (!puppyData) {
    alert("강아지 데이터를 불러올 수 없습니다.");
    navigate(ROUTE.customer.mypage.home);
    return null;
  }

  return (
    <PageWrapper>
      <AppBar
        prefix="backButton"
        onclick={handleBack}
        title={`${puppyData.name} 프로필 보기`}
      />
      <ContentWrapper>
        <Text typo="subtitle300" color="gray100">
          {"태어난지 "}
          <Text typo="subtitle300" color="blue100">
            {puppyData.age}년
          </Text>
        </Text>

        <ProfileImg
          src={puppyData.profileImageUrl || ""}
          alt="프로필사진"
          width="200"
          height="200"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <MyInfoWrapper>
            <Text typo="title100">{puppyData.name}</Text>
            <Gender gender={puppyData.sex || ""} />
          </MyInfoWrapper>
          <MyInfoWrapper>
            <Text typo="body300" color="blue100">
              {puppyData.breed}{" "}
              <Text typo="body300" color="gray100">
                {puppyData.weight}kg
              </Text>
            </Text>
          </MyInfoWrapper>
          <MyInfoWrapper>
            <SvgBirthDay width={15} />
            <Text typo="body300" color="gray100">
              {puppyData.birthdate}
              <Text typo="body300" color="blue100">
                {" "}
                {puppyData.age}살
              </Text>
            </Text>
          </MyInfoWrapper>
        </div>

        {puppyData.disease && puppyData.disease.length > 0 && (
          <InfoWrapper>
            {puppyData.detail && (
              <Text typo="body100" color="blue100">
                {puppyData.disease.join(", ")}
                <Text typo="body100">이 있어요</Text>
              </Text>
            )}
            {puppyData.diseaseDescription && (
              <Text typo="body100">{puppyData.diseaseDescription}</Text>
            )}
            {puppyData.detail && (
              <div style={{ display: "flex", gap: "5px" }}>
                <Text typo="body100">{puppyData.name}는 </Text>
                <Text typo="body100" color="blue100">
                  {puppyData.detail}
                </Text>
              </div>
            )}
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

      {isModalOpen && (
        <Modal
          title="정말 삭제하시겠습니까?"
          message="삭제한 뒤에는 복구할 수 없습니다."
          onConfirm={handleDelete} // 예 버튼 클릭 시 삭제
          onCancel={() => setIsModalOpen(false)} // 아니요 버튼 클릭 시 모달 닫기
        />
      )}
    </PageWrapper>
  );
}
