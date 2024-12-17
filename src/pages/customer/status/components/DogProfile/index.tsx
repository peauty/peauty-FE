import { useState, useEffect } from "react";
import { getPuppyProfilesWithCanStartProcessStatus } from "../../../../../apis/customer/resources/bidding";
import { GetPuppyProfilesWithCanStartProcessStatusResponse } from "../../../../../types/customer/bidding";
import { useUserDetails } from "../../../../../hooks/useUserDetails";
import { DogListWrapper, DogProfileWrapper, RoundImg, DogName } from "./index.styles";

// 강아지 프로필 컴포넌트
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
}: DogProfileProps) => (
  <DogProfileWrapper onClick={onClick}>
    <RoundImg src={src} alt={name} borderRadius={borderRadius} />
    <DogName active={active}>{name}</DogName>
  </DogProfileWrapper>
);

interface DogListProps {
  setPuppyId: (puppyId: number | null) => void; // 부모로 puppyId를 전달할 함수 추가
}

export default function DogList({ setPuppyId }: DogListProps) {
  const { userId, isLoading } = useUserDetails();

  const [puppyData, setPuppyData] = useState<GetPuppyProfilesWithCanStartProcessStatusResponse | null>(null); // 강아지 데이터 상태
  const [selectedDog, setSelectedDog] = useState<string>(""); // 선택된 강아지 상태

  // 강아지 데이터 fetch
  useEffect(() => {
    if (userId && !isLoading) {
      getPuppyProfilesWithCanStartProcessStatus(userId)
        .then((data: GetPuppyProfilesWithCanStartProcessStatusResponse) => {
          console.log("API 응답 데이터:", data);
          
          const puppies = data?.puppies;
          if (Array.isArray(puppies) && puppies.length > 0) {
            setPuppyData(data);
            setSelectedDog(puppies[0].name); // 첫 번째 강아지를 기본 선택
            setPuppyId(puppies[0].puppyId); // 첫 번째 강아지의 puppyId를 부모로 전달
          } else {
            console.error("puppies 데이터가 잘못되었거나 없습니다.");
            setPuppyData(null);
          }
        })
        .catch((error) => {
          console.error("API 호출 오류:", error);
        });
    }
  }, [userId, isLoading, setPuppyId]);

  const dogs = puppyData?.puppies || []; // puppies 배열이 없으면 빈 배열로 설정

  const handleDogClick = (name: string, puppyId: number) => {
    setSelectedDog(name === selectedDog ? "" : name); // 선택된 강아지를 토글
    setPuppyId(puppyId); // 선택된 강아지의 puppyId 전달
  };

  if (isLoading) {
    return <div>Loading...</div>; // 로딩 상태
  }

  return (
    <DogListWrapper>
      {dogs.length === 0 ? (
        <div>No puppies found.</div> // 강아지가 없을 경우
      ) : (
        dogs.map((dog, index) => (
          <DogProfile
            key={index}
            src={dog.profileImageUrl || "default-image-url"} // 기본 이미지 URL
            name={dog.name || "Unnamed Dog"} // 기본 이름
            active={dog.name === selectedDog} // 선택된 강아지 활성화 여부 확인
            onClick={() => handleDogClick(dog.name, dog.puppyId)} // 클릭 시 선택 토글, puppyId 전달
          />
        ))
      )}
    </DogListWrapper>
  );
}