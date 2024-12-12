import { 
  CardContainer, 
  CardWrapper, 
  Thumbnail, 
  InfoWrapper, 
  NameWrapper, 
  RatingWrapper, 
  ButtonWrapper, 
  StyledButton 
} from "./index.styles";
import { Text } from "../../../../../components";
import Rating from "../../../../../components/rating";

interface ButtonProps {
  width: string;
  height?: string;
  title: string;
  bgColor: string;
  color: string;
  onClick: () => void;
}

interface CustomerInfoProps {
  name: string;
  store: string;
  score: number;
  review: number;
  status?: string;
  payment: number;
  thumbnailUrl: string;
  buttons: ButtonProps[];
}

export default function CustomerInfo({
  name,
  store,
  score,
  review,
  thumbnailUrl,
  buttons,
  status,
  payment,
}: CustomerInfoProps) {
  return (
    <CardContainer>
      <CardWrapper>
        <Thumbnail src={thumbnailUrl} alt={name} />
        <InfoWrapper>
          <Text typo="subtitle200">{store}</Text>
          <NameWrapper>
            <Text typo={"body500"}>{name}</Text>
            {status && <Text typo={"body500"} color={"blue100"}>{status}</Text>}
          </NameWrapper>
          <RatingWrapper>
            <Rating starSize="10" score={score} fontsize="body600" color="gray100" />
            <Text typo="body600" color="gray100">({review})</Text>
            {payment && <Text typo={"subtitle200"} color={"black"}>{payment}</Text>}
          </RatingWrapper>
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
              height={button.height}
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
