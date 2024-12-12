import { useState } from "react";
import { AppBar, GNB, Text } from "../../../../../components";
import Card from "../../../../../components/cards/Card";
import { CardWrapper, TextWrapper, Wrapper } from "./index.styles";
import { ROUTE } from "../../../../../constants/routes";
import { useNavigate } from "react-router-dom";
import { SendEstimateProposalRequest } from "../../../../../types/customer/customer-bidding-api";

interface ChoosePetProps {
  onNext: () => void;
  inputData: SendEstimateProposalRequest;
  handleChange: (key: keyof SendEstimateProposalRequest, value: any) => void;
}

export default function ChoosePetForGrooming({
  onNext,
  inputData,
  handleChange,
}: ChoosePetProps) {
  const dummyPet = [
    {
      puppyId: 1,
      profileImageUrl: "/svg/pin.svg",
      name: "바우",
      age: 2,
      sex: "남",
      weight: 3.5,
      breed: "포메라니안",
      disease: ["피부병", "슬개골"],
    },
    {
      puppyId: 2,
      profileImageUrl: "/svg/pin.svg",
      name: "루비",
      breed: "말티즈",
      age: 4,
      sex: "여",
      weight: 4.2,
      disease: ["피부병"],
    },
    {
      puppyId: 3,
      profileImageUrl: "/svg/pin.svg",
      name: "초코",
      breed: "푸들",
      age: 3,
      sex: "남",
      weight: 5.1,
      disease: ["무릎관절염", "피부염"],
    },
  ];

  const [selectedPetId, setSelectedPetId] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleChoosePet = (pet: (typeof dummyPet)[number]) => {
    setSelectedPetId(pet.puppyId);
  };

  return (
    <>
      <AppBar prefix="backButton" />

      <Wrapper>
        <TextWrapper>
          <Text typo="subtitle100" color="blue100">
            꼬미누나 <Text typo="subtitle100">님</Text>
          </Text>
          <Text typo="subtitle100">미용받을 반려견을 선택해주세요</Text>
        </TextWrapper>

        {dummyPet.map((pet) => (
          <CardWrapper key={pet.puppyId}>
            <Card
              imageSrc={pet.profileImageUrl}
              name={pet.name}
              age={pet.age}
              gender={pet.sex}
              weight={`${pet.weight}`}
              breed={pet.breed}
              tags={pet.disease}
              isSelected={selectedPetId === pet.puppyId}
              onClick={() => handleChoosePet(pet)}
            />
          </CardWrapper>
        ))}
      </Wrapper>
      <GNB buttonText="확인" onLargeButtonClick={onNext} />
    </>
  );
}
