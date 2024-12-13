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
  ShopInfoWrapper,
  TimeWrapper,
} from "./index.styles";
import { Divider, Text } from "../../../../../components";
import Rating from "../../../../../components/rating";
import SvgClock from "../../../../../assets/svg/Clock";

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
  return (
    <>
      <CardContainer>
        <CardWrapper onClick={onClick}>
          <Thumbnail src={thumbnailUrl} alt={store} />
          <InfoWrapper>
            <NameWrapper>
              <Text typo="subtitle200">{store}</Text>
              <Text typo="subtitle200" color={"blue100"}>
                {reservation}
              </Text>
            </NameWrapper>
            <ContentsWrapper>
              <RatingAndReviewWrapper>
                <Text typo="body400" color="gray200">
                  {location}
                </Text>

                {status && (
                  <Text typo={"body600"} color={"blue100"}>
                    {status}
                  </Text>
                )}
              </RatingAndReviewWrapper>
              <ShopInfoWrapper>
                <div style={{ display: "flex", gap: "3px" }}>
                  <Rating starSize="13" score={score} fontsize="body400" />
                  <Text typo="body400">({review}) </Text>
                </div>
                {payment && (
                  <Text typo={"subtitle200"} color={"black"}>
                    {pay}원
                  </Text>
                )}
              </ShopInfoWrapper>
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
