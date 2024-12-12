import { Text } from "../../../../../../../components";
import { Badge } from "../../../../../../../components/category/Badge";
import Rating from "../../../../../../../components/rating";
import {
  Container,
  BadgeWrapper,
  Checkbox,
  CheckboxWrapper,
  Details,
  RatingWrapper,
  Thumbnail,
  ContentsWrapper,
} from "./index.styles";

interface DesignerItemProps {
  isSelecting: boolean;
  isChecked: boolean;
  onCheckboxChange: () => void;
  name: string;
  experience: number;
  score: number;
  review: number;
  badges: { name: string; color: string }[];
  thumbnailUrl: string;
  onClick: () => void;
}

export default function DesignerItem({
  isSelecting,
  isChecked,
  onCheckboxChange,
  name,
  experience,
  score,
  review,
  badges,
  thumbnailUrl,
  onClick,
}: DesignerItemProps) {
  return (
    <Container>
      {isSelecting && (
        <CheckboxWrapper>
          <Checkbox checked={isChecked} onChange={onCheckboxChange} />
        </CheckboxWrapper>
      )}
      <ContentsWrapper onClick={onClick}>
        <Thumbnail src={thumbnailUrl} alt={`${name}의 섬네일`} />
        <Details>
          <Text typo="subtitle200">{name}</Text>
          <Text typo="body600">{name}</Text>
          <RatingWrapper>
            <Rating
              starSize="10"
              score={score}
              fontsize="body600"
              color="gray100"
            />
            <Text typo="body600" color="gray100">
              ({review}) | 경력 {experience}년
            </Text>
          </RatingWrapper>
          <BadgeWrapper>
            {badges.map((badge, idx) => (
              <Badge
                key={idx}
                type="general"
                text={badge.name}
                variant="blue"
              />
            ))}
          </BadgeWrapper>
        </Details>
      </ContentsWrapper>
    </Container>
  );
}
