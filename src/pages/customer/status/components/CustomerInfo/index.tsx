import {
  CardContainer,
  CardWrapper,
  Thumbnail,
  InfoWrapper,
  NameWrapper,
  RatingWrapper,
  ButtonWrapper,
  StyledButton,
} from "./index.styles";
import { Text } from "../../../../../components";
import Rating from "../../../../../components/rating";

interface ButtonProps {
  width: string;
  title: string;
  bgColor: string;
  color: string;
  onClick: () => void;
}

interface CustomerInfoProps {
  location: string;
  store: string;
  score: number;
  review: number;
  status?: string;
  payment: number;
  thumbnailUrl: string;
  buttons: ButtonProps[];
  onClick: () => void;
}

export default function CustomerInfo({
  location,
  store,
  score,
  review,
  thumbnailUrl,
  buttons,
  status,
  payment,
  onClick,
}: CustomerInfoProps) {
  const pay = payment.toLocaleString();
  return (
    <CardContainer>
      <CardWrapper onClick={onClick}>
        <Thumbnail src={thumbnailUrl} alt={location} />
        <InfoWrapper>
          <div style={{ display: "flex", gap: "5px" }}>
            <Text typo="subtitle200">{store}</Text>
            <div style={{ display: "flex", gap: "3px" }}>
              <Rating
                starSize="13"
                score={score}
                fontsize="body400"
                color="gray100"
              />
              <Text typo="body400" color="gray100">
                ({review})
              </Text>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <NameWrapper>
              <Text typo={"body400"}>{location}</Text>
              {status && (
                <Text typo={"body500"} color={"blue100"}>
                  {status}
                </Text>
              )}
            </NameWrapper>
            <RatingWrapper>
              {payment && (
                <Text typo={"subtitle200"} color={"black"}>
                  {pay}원
                </Text>
              )}
            </RatingWrapper>
          </div>
        </InfoWrapper>
      </CardWrapper>
      {buttons.length > 0 && (
        <ButtonWrapper>
          {buttons.map((button, index) => (
            <StyledButton
              key={index}
              bgColor={button.bgColor}
              color={button.color}
              width={button.width}
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
