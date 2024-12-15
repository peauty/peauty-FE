import { useState, useEffect } from "react";
import { getPuppyProfilesWithCanStartProcessStatus } from "../../../../../apis/customer/resources/bidding";
import { GetPuppyProfilesWithCanStartProcessStatusResponse } from "../../../../../types/customer/bidding";
import { useUserDetails } from "../../../../../hooks/useUserDetails";
import { DogListWrapper, DogProfileWrapper, RoundImg, DogName } from "./index.styles";

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

export default function DogList () {
  const { userId, isLoading } = useUserDetails(); 
  const [puppyData, setPuppyData] = useState<GetPuppyProfilesWithCanStartProcessStatusResponse | null>(null); // 강아지 데이터 상태
  const [selectedDog, setSelectedDog] = useState<string>(""); // 선택된 강아지 상태
  const [puppyId, setPuppyId] = useState<number | null>(null); // puppyId 상태

  useEffect(() => {
    if (userId && !isLoading) {
      getPuppyProfilesWithCanStartProcessStatus(userId)
        .then((data: GetPuppyProfilesWithCanStartProcessStatusResponse) => {
          console.log("API 응답 데이터:", data); 
          
          const puppies = data?.puppies; 

          if (Array.isArray(puppies)) {
            setPuppyData(data); 
          } else {
            console.error("puppies 데이터가 잘못되었거나 없습니다.");
            setPuppyData(null); 
          }
        })
        .catch((error) => {
          console.error("API 호출 오류:", error);
        });
    }
  }, [userId, isLoading]);

  useEffect(() => {
    if (puppyData && selectedDog) {
      const selectedPuppy = puppyData.puppies.find(puppy => puppy.name === selectedDog);
      if (selectedPuppy) {
        setPuppyId(selectedPuppy.puppyId); // 선택된 강아지의 puppyId를 상태로 설정
      }
    }
  }, [selectedDog, puppyData]);

  const dogs = puppyData?.puppies || []; // puppies 배열이 없으면 빈 배열로 설정

  const handleDogClick = (name: string) => {
    setSelectedDog(name === selectedDog ? "" : name); // 선택된 강아지를 토글
  };

  if (isLoading) {
    return <div>Loading...</div>; 
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
            onClick={() => handleDogClick(dog.name)} // 클릭 시 선택 토글
          />
        ))
      )}
    </DogListWrapper>
  );
};


