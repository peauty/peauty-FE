import { Tag } from "../../category/Tag";
import { Text } from "../../texts/Text";
import ProfileImg from "../../profile-img/ProfileImg";
import { CardWrapper, DiseaseWrapper, InfoWrapper, ProfileImagWrapper, TagsWrapper } from "./Card.styles";

interface CardProps {
  imageSrc: string;
  name: string;
  age: number;
  gender: string;
  weight: string;
  breed: string;
  tags: string[];
}

export default function Card({
  imageSrc,
  name,
  age,
  gender,
  weight,
  breed,
  tags,
}: CardProps) {
  return (
    <CardWrapper>
      <ProfileImagWrapper>
        <ProfileImg src={imageSrc} alt={`${name}'s image`} width="80px" height="80px" />
      </ProfileImagWrapper>
      <InfoWrapper>
        <Text color={"black"} typo={"subtitle100"}>{name}</Text>
        <Text color={"gray100"} typo={"body300"}>
          {age}살 | {gender} | {weight} | {breed}
        </Text>
        <DiseaseWrapper>
          <Text typo={"subtitle300"}>질병</Text>
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