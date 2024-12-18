import { Tag } from "../../category/Tag";
import { Text } from "../../texts/Text";
import ProfileImg from "../../profile-img/ProfileImg";
import {
  CardWrapper,
  DiseaseWrapper,
  InfoWrapper,
  TagsWrapper,
} from "./Card.styles";

interface CardProps {
  imageSrc: string;
  name: string;
  age: number;
  gender: string;
  weight: number;
  breed: string;
  tags: string[];
  onClick?: () => void;
  isSelected?: boolean;
  disabled?: boolean; // disabled 추가
}

export default function Card({
  imageSrc,
  name,
  age,
  gender,
  weight,
  breed,
  tags,
  onClick,
  isSelected = false,
  disabled = false, // 기본값 false
}: CardProps) {
  const gen = gender === "F" ? "여아" : "남아";

  // disabled일 경우 onClick을 비활성화
  const handleClick = (e: React.MouseEvent) => {
    if (!disabled && onClick) {
      onClick();
    }
    e.preventDefault(); // prevent default 클릭 동작 (선택 방지)
  };

  return (
    <CardWrapper
      onClick={handleClick}
      isSelected={isSelected}
      disabled={disabled} // disabled 스타일 적용
    >
      <div>
        <ProfileImg
          src={imageSrc}
          alt={`${name}'s image`}
          width="80px"
          height="80px"
        />
      </div>
      <InfoWrapper>
        <Text typo={"subtitle200"}>{name}</Text>
        <Text color={"gray100"} typo={"body400"}>
          {age}살 | {gen} | {weight}kg | {breed}
        </Text>
        <DiseaseWrapper>
          <TagsWrapper>
            {tags &&
              tags[0] !== "없음" &&
              tags.map((tag, index) => <Tag key={index} text={tag} />)}
          </TagsWrapper>
        </DiseaseWrapper>
      </InfoWrapper>
    </CardWrapper>
  );
}
