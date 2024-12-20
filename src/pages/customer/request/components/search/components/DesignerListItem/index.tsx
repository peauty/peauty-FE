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
  badges: { name: string; color: string; type: string }[];
  thumbnailUrl: string;
  address: string;
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
  address,
  badges,
  thumbnailUrl,
  onClick,
}: DesignerItemProps) {
  return (
    <Container onClick={onClick}>
      {isSelecting && (
        <CheckboxWrapper>
          <Checkbox checked={isChecked} onChange={onCheckboxChange} />
        </CheckboxWrapper>
      )}
      <ContentsWrapper>
        <Thumbnail src={thumbnailUrl} alt={`${name}의 섬네일`} />
        <Details>
          <Text typo="subtitle200">{name}</Text>
          <Text typo="body400">{address}</Text>
          <RatingWrapper>
            <Rating
              starSize="10"
              score={score}
              fontsize="body400"
              color="gray100"
            />
            <Text typo="body400" color="gray100">
              ({review}) | 경력 {experience}년
            </Text>
          </RatingWrapper>
          <BadgeWrapper>
            {badges.map((badge, idx) => (
              <Badge
                key={idx}
                type={badge.type}
                text={badge.name}
                variant={badge.color}
              />
            ))}
          </BadgeWrapper>
        </Details>
      </ContentsWrapper>
    </Container>
  );
}
