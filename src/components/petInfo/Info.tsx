// Info.tsx

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
import { colors } from "../../style/color";

interface ButtonProps {
  title: string;
  bgColor: string;
  color: string;
  onClick: () => void;
}

interface InfoProps {
  processStatus?: string;
  date?: string;
  imageSrc: string;
  name: string;
  age: number;
  gender: string;
  weight: string;
  breed: string;
  status?: string;
  tags?: string[];
  buttons?: ButtonProps[];
}

export default function PetInfo({
  processStatus,
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
  const getThreadStepLabel = ():
    | { text: string; fontColor: "blue100" | "gray100" }
    | undefined => {
    switch (status) {
      case "견적응답":
        return { text: "견적확인 중", fontColor: "blue100" };
      case "미용완료":
        return { text: "미용 완료", fontColor: "gray100" };
      case "예약완료":
        return { text: "예약 완료", fontColor: "blue100" };
      default:
        return undefined;
    }
  };
  const threadStep = getThreadStepLabel() || { text: "", fontColor: "gray100" };

  const getStatusLabel = () => {
    switch (processStatus) {
      case "예약 전":
        return { text: "요청중", fontColor: colors.green100 };
      case "예약 성공":
        return { text: "예약중", fontColor: colors.blue100 };
      case "완료":
        return { text: "완료", fontColor: colors.gray100 };
      default:
        return null; // 취소 상태일 때
    }
  };
  const statusProcess = getStatusLabel();
  // 취소 상태일 때는 렌더링하지 않음
  if (!statusProcess) return null;

  return (
    <>
      <CardContainer>
        <CardWrapper>
          <div>
            <ProfileImg
              src={imageSrc}
              alt={`${name}'s image`}
              width="80px"
              height="80px"
              borderRadius="10px"
              isDarkened={processStatus !== "예약 전"}
            />
          </div>
          <InfoWrapper>
            <NameWrapper>
              <span
                style={{ display: "flex", gap: "5px", alignItems: "center" }}
              >
                <div
                  style={{
                    backgroundColor: `${statusProcess.fontColor}`,
                    padding: "0px 4px",
                    height: "16px",
                    lineHeight: "0.8",
                    borderRadius: "3px",
                  }}
                >
                  <Text typo="body500" color="white">
                    {statusProcess.text}
                  </Text>
                </div>
                <Text typo={"subtitle200"}>{name}</Text>
              </span>
              {status && (
                <Text typo={"subtitle200"} color={threadStep.fontColor}>
                  {threadStep?.text}
                  {/* {status} */}
                </Text>
              )}
            </NameWrapper>
            <Text typo={"body400"}>
              {age}살 | {gender} {weight}kg | {breed}
            </Text>
            <BadgeWrapper>
              {tags &&
                tags[0] !== "없음" &&
                tags?.map((tag, index) => <Tag key={index} text={tag} />)}
            </BadgeWrapper>
            {date && (
              <>
                <DateWrapper>{date}</DateWrapper>
              </>
            )}
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
