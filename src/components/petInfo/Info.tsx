// Info.tsx
import React from "react";
import {
  CardContainer,
  DateWrapper,
  CardWrapper,
  DiseaseWrapper,
  ButtonWrapper,
  StyledButton,
  InfoWrapper,
  NameWrapper,
} from "./Info.styles";
import { Tag } from "../category/Tag";
import { Text } from "../texts/Text";
import ProfileImg from "../profile-img/ProfileImg";
import { Divider } from "../layout/Divider";

interface ButtonProps {
  title: string;
  bgColor: string;
  color: string;
  onClick: () => void;
}

interface InfoProps {
  date?: string;
  imageSrc: string;
  name: string;
  age: number;
  gender: string;
  weight: string;
  breed: string;
  status?: string;
  tags: string[];
  buttons?: ButtonProps[];
}

export default function PetInfo({
  date,
  imageSrc,
  name,
  age,
  gender,
  weight,
  breed,
  tags,
  buttons = [],
  status,
}: InfoProps) {
  return (
    <CardContainer>
      <Divider thickness={2} />
      <DateWrapper>{date}</DateWrapper>
      <Divider thickness={3} />
      <CardWrapper>
        <div>
          <ProfileImg
            src={imageSrc}
            alt={`${name}'s image`}
            width="80px"
            height="80px"
            borderRadius="10px"
          />
        </div>
        <InfoWrapper>
          <NameWrapper>
            <Text typo={"subtitle200"}>{name}</Text>
            {status && <Text typo={"subtitle200"} color={"blue100"}>{status}</Text>}
          </NameWrapper>
          <Text color={"gray100"} typo={"body300"}>
            {age}살 | {gender} {weight}kg | {breed}
          </Text>
          <DiseaseWrapper>
            {tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </DiseaseWrapper>
        </InfoWrapper>
      </CardWrapper>
      {buttons.length > 0 && (
        <ButtonWrapper>
          {buttons.map((button, index) => (
            <StyledButton
              key={index}
              bgColor={button.bgColor}
              color={button.color}
              width="100%"
              height="37px"
              onClick={button.onClick}
            >
              {button.title}
            </StyledButton>
          ))}
        </ButtonWrapper>
      )}
    </CardContainer>
  );
}
