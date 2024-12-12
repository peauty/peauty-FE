import { useState } from "react";
import { DogListWrapper, DogProfileWrapper, RoundImg, DogName } from "./index.styles";


interface DogProfileProps {
  src: string;
  name: string;
  borderRadius?: string;
  onClick: () => void;
  active: boolean;
}


const DogProfile = ({ src, name, borderRadius = "50%", onClick, active }: DogProfileProps) => (
  <DogProfileWrapper onClick={onClick}>
    <RoundImg src={src} alt={name} borderRadius={borderRadius} />
    <DogName active={active}>{name}</DogName>
  </DogProfileWrapper>
);

// DogList 컴포넌트
const DogList = () => {
  const [dogs] = useState<Omit<DogProfileProps, "onClick">[]>([
    {
      src: "https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785",
      name: "꼬미",
      active: false,
    },
    {
      src: "https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785",
      name: "바니",
      active: false,
    },
    {
      src: "https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785",
      name: "피치",
      active: false,
    },
  ]);

  const [selectedDog, setSelectedDog] = useState<string | null>(null);

  const handleDogClick = (name: string) => {
    setSelectedDog(name === selectedDog ? null : name); // 선택/해제 토글
  };

  return (
    <DogListWrapper>
      {dogs.map((dog, index) => (
        <DogProfile
          key={index}
          src={dog.src}
          name={dog.name}
          active={dog.name === selectedDog}
          onClick={() => handleDogClick(dog.name)}
        />
      ))}
    </DogListWrapper>
  );
};

export default DogList;
