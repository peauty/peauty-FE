import { Star } from "../../assets/svg";
import { Text } from "../texts/Text";
import { RatingWrapper } from "./Rating.styles";
export interface RatingProps {
  score: string;
}
export default function Rating({ score }: RatingProps) {
  return (
    <RatingWrapper>
      <Star height={12} />
      <Text typo="body600" color="gray100">
        {score}
      </Text>
    </RatingWrapper>
  );
}
