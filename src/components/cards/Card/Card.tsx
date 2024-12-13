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
  weight: string;
  breed: string;
  tags: string[];
  onClick?: () => void;
  isSelected?: boolean;
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
}: CardProps) {
  const gen = gender === "F" ? "여자" : "남자";
  return (
    <CardWrapper onClick={onClick} isSelected={isSelected}>
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
            {tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </TagsWrapper>
        </DiseaseWrapper>
      </InfoWrapper>
    </CardWrapper>
  );
}
