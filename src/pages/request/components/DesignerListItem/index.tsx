import { Text } from "../../../../components";
import { Badge } from "../../../../components/category/Badge";
import Rating from "../../../../components/rating";
import {
  Container,
  BadgeWrapper,
  Checkbox,
  CheckboxWrapper,
  Details,
  RatingWrapper,
  Thumbnail,
} from "./index.styles";

interface DesignerItemProps {
  isSelecting: boolean;
  isChecked: boolean;
  onCheckboxChange: () => void;
  name: string;
  experience: string;
  score: string;
  badges: string[];
}

export default function DesignerItem({
  isSelecting,
  isChecked,
  onCheckboxChange,
  name,
  experience,
  score,
  badges,
}: DesignerItemProps) {
  return (
    <Container>
      {isSelecting && (
        <CheckboxWrapper>
          <Checkbox checked={isChecked} onChange={onCheckboxChange} />
        </CheckboxWrapper>
      )}
      <Thumbnail />
      <Details>
        <Text typo="subtitle200">{name}</Text>
        <Text typo="body600">{name}</Text>
        <RatingWrapper>
          <Rating starSize="10" score={score} fontsize="body600" color="gray100" />
          <Text typo="body600" color="gray100">
            | 경력 {experience}
          </Text>
        </RatingWrapper>
        <BadgeWrapper>
          {badges.map((badge, idx) => (
            <Badge key={idx} type="general" text={badge} />
          ))}
        </BadgeWrapper>
      </Details>
    </Container>
  );
}
