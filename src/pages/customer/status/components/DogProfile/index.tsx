import { useState, useEffect, useRef } from "react";
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
import Loading from "../../../../../components/page/sign-up/Loading";

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
  const profileRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (active && profileRef.current) {
      profileRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [active]);

  return (
    <DogProfileWrapper onClick={onClick} ref={profileRef}>
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

  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (userId && !isLoading) {
      getPuppyProfilesWithCanStartProcessStatus(userId)
        .then((data) => {
          const puppies = data?.puppies;
          if (Array.isArray(puppies) && puppies.length > 0) {
            setPuppyData(data);
            setSelectedDog(puppies[0].name || ""); // 첫 번째 강아지 선택
            setPuppyId(puppies[0].puppyId || 0); // 첫 번째 강아지 ID 전달
          } else {
            setPuppyData(null); // 강아지 데이터 없으면 null 설정
          }
        })
        .catch((error) => console.error("API 호출 오류:", error));
    }
  }, [userId, isLoading, setPuppyId]);

  if (isLoading) return <Loading />;

  const dogs = puppyData?.puppies || [];

  if (dogs.length === 0) return null;

  return (
    <DogListWrapper ref={listRef}>
      {dogs.map((dog, index) => (
        <DogProfile
          key={index}
          src={dog.profileImageUrl || Basic}
          name={dog.name || "Unnamed Dog"}
          active={dog.name === selectedDog}
          onClick={() => {
            setSelectedDog(dog.name || "");
            setPuppyId(dog.puppyId || 0);
            const dogProfileElement = listRef.current?.children[
              index
            ] as HTMLElement;
            if (dogProfileElement) {
              dogProfileElement.scrollIntoView({
                behavior: "smooth",
                inline: "center",
              });
            }
          }}
        />
      ))}
    </DogListWrapper>
  );
}
