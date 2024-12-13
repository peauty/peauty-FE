import { useState, useEffect } from "react";
import { AppBar, GNB, Text } from "../../../../../components";
import Card from "../../../../../components/cards/Card";
import { CardWrapper, TextWrapper, Wrapper } from "./index.styles";

import { useUserDetails } from "../../../../../hooks/useUserDetails";
import Loading from "../../../../../components/page/sign-up/Loading";
import { GetPuppyProfileResponse } from "../../../../../types/customer/puppy";
import { getPuppyProfiles } from "../../../../../apis/customer/resources/puppy";

interface ChoosePetProps {
  onNext: () => void;
  setPuppyId: (puppyId: number) => void;
}

export default function ChoosePetForGrooming({
  onNext,
  setPuppyId,
}: ChoosePetProps) {
  const [puppies, setPuppies] = useState<GetPuppyProfileResponse[]>([]);
  const [selectedPetId, setSelectedPetId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [customerNickname, setCustomerNickname] = useState<string>("");
  const user = useUserDetails();

  useEffect(() => {
    const fetchPuppyData = async () => {
      if (!user || !user.userId) {
        return;
      }

      try {
        setLoading(true);
        const response = await getPuppyProfiles(user.userId);

        if (response.puppies) {
          setPuppies(response.puppies);
        }

        if (response.customerNickname) {
          setCustomerNickname(response.customerNickname);
        }
      } catch (error) {
        console.error("강아지 프로필 로드 실패:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPuppyData();
  }, [user.userId]);

  const handleChoosePet = (puppyId?: number) => {
    if (!puppyId) return;

    setSelectedPetId(puppyId);
    setPuppyId(puppyId);
  };

  if (!user || !user.userId) {
    return <Text typo="body100">로그인 정보가 없습니다.</Text>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <AppBar prefix="backButton" />

      <Wrapper>
        <TextWrapper>
          <Text typo="subtitle100" color="blue100">
            {customerNickname} <Text typo="subtitle100">님</Text>
          </Text>
          <Text typo="subtitle100">미용받을 반려견을 선택해주세요</Text>
        </TextWrapper>

        {puppies.length > 0 ? (
          puppies.map((pet) => (
            <CardWrapper key={pet.puppyId}>
              <Card
                imageSrc={pet.puppyProfileImageUrl || "/svg/pin.svg"}
                name={pet.name || "이름 없음"}
                age={pet.age || 0}
                gender={pet.sex || ""}
                weight={pet.weight?.toString() || "0"}
                breed={pet.breed || "품종 미상"}
                tags={pet.disease || []}
                isSelected={selectedPetId === pet.puppyId}
                onClick={() => handleChoosePet(pet.puppyId)}
              />
            </CardWrapper>
          ))
        ) : (
          <Text typo="body100" color="gray100">
            등록된 반려견이 없습니다.
          </Text>
        )}
      </Wrapper>
      <GNB
        buttonText="확인"
        onLargeButtonClick={onNext}
        disabled={!selectedPetId}
      />
    </>
  );
}
