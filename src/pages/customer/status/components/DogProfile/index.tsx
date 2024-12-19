import { useState, useEffect } from "react";
import { getPuppyProfilesWithCanStartProcessStatus } from "../../../../../apis/customer/resources/bidding";
import { GetPuppyProfilesWithCanStartProcessStatusResponse } from "../../../../../types/customer/bidding";
import { useUserDetails } from "../../../../../hooks/useUserDetails";
import {
  DogListWrapper,
  DogProfileWrapper,
  RoundImg,
  DogName,
} from "./index.styles";
import Basic from "../../../../../assets/images/basic.png";

interface DogProfileProps {
  src: string;
  name: string;
  borderRadius?: string;
  onClick: () => void;
  active: boolean;
}
const DogProfile = ({
  src,
  name,
  borderRadius = "50%",
  onClick,
  active,
}: DogProfileProps) => {
  const shortenedName = name.length > 5 ? `${name.slice(0, 4)}..` : name;

  return (
    <DogProfileWrapper onClick={onClick}>
      <RoundImg
        src={src}
        alt={name}
        borderRadius={borderRadius}
        active={active}
      />
      <DogName active={active}>{shortenedName}</DogName>
    </DogProfileWrapper>
  );
};

interface DogListProps {
  setPuppyId: (puppyId: number | null) => void;
}

export default function DogList({ setPuppyId }: DogListProps) {
  const { userId, isLoading } = useUserDetails();
  const [puppyData, setPuppyData] =
    useState<GetPuppyProfilesWithCanStartProcessStatusResponse | null>(null);
  const [selectedDog, setSelectedDog] = useState<string>("");

  useEffect(() => {
    if (userId && !isLoading) {
      getPuppyProfilesWithCanStartProcessStatus(userId)
        .then((data) => {
          const puppies = data?.puppies;
          if (Array.isArray(puppies) && puppies.length > 0) {
            setPuppyData(data);
            setSelectedDog(puppies[0].name || ""); // 기본적으로 첫 번째 강아지 선택
            setPuppyId(puppies[0].puppyId || 0); // 첫 번째 강아지의 puppyId를 부모로 전달
          } else {
            setPuppyData(null); // 강아지 데이터가 없으면 null로 설정
          }
        })
        .catch((error) => {
          console.error("API 호출 오류:", error);
        });
    }
  }, [userId, isLoading, setPuppyId]);

  if (isLoading) {
    return <div>Loading...</div>; // 로딩 중일 때 표시
  }

  const dogs = puppyData?.puppies || [];

  if (dogs.length === 0) {
    return ""; // 강아지 데이터가 없으면 NotFoundPuppy 렌더링
  }

  return (
    <DogListWrapper>
      {dogs.map((dog, index) => (
        <DogProfile
          key={index}
          src={dog.profileImageUrl || Basic}
          name={dog.name || "Unnamed Dog"}
          active={dog.name === selectedDog}
          onClick={() => {
            setSelectedDog(dog.name || "");
            setPuppyId(dog.puppyId || 0);
          }}
        />
      ))}
    </DogListWrapper>
  );
}
