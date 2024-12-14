// Info.tsx
import React from "react";
import {
  CardContainer,
  DateWrapper,
  CardWrapper,
  ButtonWrapper,
  StyledButton,
  InfoWrapper,
  NameWrapper,
  BadgeWrapper,
} from "./Info.styles";
import { Tag } from "../category/Tag";
import { Text } from "../texts/Text";
import ProfileImg from "../profile-img/ProfileImg";

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
  const statusColor = status === "견적 확인중" ? "blue100" : "gray100";
  return (
    <>
      {date && (
        <>
          <DateWrapper>{date}</DateWrapper>
        </>
      )}
      <CardContainer>
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
              {status && (
                <Text typo={"subtitle200"} color={statusColor}>
                  {status}
                </Text>
              )}
            </NameWrapper>
            <Text typo={"body400"}>
              {age}살 | {gender} {weight}kg | {breed}
            </Text>
            <BadgeWrapper>
              {tags.map((tag, index) => (
                <Tag key={index} text={tag} />
              ))}
            </BadgeWrapper>
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
    </>
  );
}
