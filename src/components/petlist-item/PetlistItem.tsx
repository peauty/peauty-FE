import {
  ItemWrapper,
  ContentsWrapper,
  ItemImg,
  TextWrapper,
} from "./PetlistItem.styles";
import { Text } from "../texts/Text";
import { useNavigate } from "react-router-dom";

interface PetlistItemProps {
  name: string;
  imageUrl: string;
  birth: string;
  weight: number;
  gender: string;
  breed: string;
  diseases: string[];
  showButton?: string;
}

export default function PetlistItem({
  name,
  imageUrl,
  birth,
  weight,
  gender,
  breed,
  diseases = [],
  showButton,
}: PetlistItemProps) {
  const navigate = useNavigate();
  const handleWorkspaceClick = () => {
    // 스타일리스트의 workspace 페이지로 이동
    navigate(`/workspace/${name}`); // 스타일리스트의 ID를 URL에 추가하여 이동
  };

  const handleRequestClick = () => {
    if (showButton === "요청서 보기") {
      // 요청서 페이지로 이동
      navigate("/request");
    } else if (showButton === "견적서 보기") {
      // 견적서 페이지로 이동
      navigate("/estimate");
    }
  };
  // 나이 계산 함수
  const calculateAge = (birth: string): number => {
    const birthDate = new Date(birth); // "YYYY.MM.DD" 형식의 문자열을 Date로 변환
    const currentDate = new Date(); // 현재 날짜
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();

    // 현재 날짜가 생일보다 이전이면 나이 -1
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };
  const age = calculateAge(birth); // 생일을 기준으로 나이 계산
  return (
    <ItemWrapper>
      <div
        style={{ display: "flex", gap: "15px", cursor: "pointer" }}
        onClick={handleWorkspaceClick}
      >
        <ItemImg></ItemImg>
        <div>
          <ContentsWrapper>
            <Text typo="subtitle200" color="black">
              {name}
            </Text>
          </ContentsWrapper>
          <div>
            <Text typo="body400" color="gray100">
              <TextWrapper>
                <span>{birth}</span>
                <span>({age}살)</span>
              </TextWrapper>
            </Text>
            <Text typo="body400" color="gray100">
              <TextWrapper>
                <span>{gender}</span>
                <span>| {weight}kg </span>
                <span>| {breed} </span>
              </TextWrapper>
            </Text>

            <Text typo="body400" color="gray100">
              <TextWrapper>
                {diseases?.map((disease, index) => <span>{disease}</span>)}
              </TextWrapper>
            </Text>
          </div>
        </div>
      </div>
      {showButton && (
        <div
          style={{ margin: "5px auto 0", cursor: "pointer" }}
          onClick={handleRequestClick}
        >
          <Text typo="body200" color="blue100">
            {showButton}
          </Text>
        </div>
      )}
    </ItemWrapper>
  );
}
