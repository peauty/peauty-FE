import {
  CardContainer,
  CardWrapper,
  Thumbnail,
  InfoWrapper,
  NameWrapper,
  ButtonWrapper,
  StyledButton,
  RatingAndReviewWrapper,
  ContentsWrapper,
  RatingWrapper,
  DateWrapper,
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
  date?: string;
  location: string;
  store: string;
  score: number;
  reservation?: string;
  review: number;
  status?: string;
  payment: string;
  thumbnailUrl: string;
  buttons: ButtonProps[];
  onClick: () => void;
}

export default function CustomerInfo({
  location,
  date,
  store,
  score,
  review,
  thumbnailUrl,
  buttons,
  status,
  payment,
  onClick,
  reservation,
}: CustomerInfoProps) {
  const pay = payment.toLocaleString();
  const reservationColor = reservation === "예약 완료" ? "blue100" : "gray100";
  return (
    <>
      {date && (
        <>
          <DateWrapper>{date}</DateWrapper>
        </>
      )}
      <CardContainer>
        <CardWrapper onClick={onClick}>
          <Thumbnail src={thumbnailUrl} alt={store} />
          <InfoWrapper>
            <NameWrapper>
              <Text typo="subtitle200">{store}</Text>
              <Text typo="subtitle200" color={reservationColor}>
                {reservation}
              </Text>
            </NameWrapper>
            <ContentsWrapper>
              <RatingAndReviewWrapper>
                <>
                  <Rating starSize="13" score={score} fontsize="body400" />
                  <Text typo="body400">({review}) |</Text>
                </>
                <Text typo={"body400"}>{location}</Text>
              </RatingAndReviewWrapper>
              <RatingWrapper>
                {status && (
                  <Text typo={"body600"} color={"blue100"}>
                    {status}
                  </Text>
                )}
              </RatingWrapper>
              <RatingWrapper>
                {payment && (
                  <Text typo={"subtitle200"} color={"black"}>
                    {pay}원
                  </Text>
                )}
              </RatingWrapper>
            </ContentsWrapper>
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
    </>
  );
}
