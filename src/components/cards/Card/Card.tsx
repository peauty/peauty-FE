import { Tag } from "../../category/Tag";
import { TagProps } from "../../category/Tag/Tag";
import { Text } from "../../texts/Text";
import ProfileImg from "../../profile-img/ProfileImg";
import { CardWrapper, InfoWrapper, ProfileImagWrapper, TagsWrapper } from "./Card.styles";


export interface TagItem {
  text: string; // 태그에 표시될 텍스트
  tagProps: TagProps; // 스타일 정보 포함
}

interface CardProps {
  imageSrc: string;
  name: string;
  age: number;
  gender: string;
  weight: string;
  breed: string;
  tags: TagItem[];
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
        <TagsWrapper>
          {tags.map((tag, index) => (
            <Tag key={index} {...tag.tagProps}>
              {tag.text}
            </Tag>
          ))}
        </TagsWrapper>
      </InfoWrapper>
    </CardWrapper>
  );
}