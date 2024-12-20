import { Star } from "../../assets/svg";
import { typography } from "../../style/typography";
import { Text } from "../texts/Text";
import { RatingWrapper } from "./Rating.styles";
type Typo = keyof typeof typography;
export interface RatingProps {
  score: number;
  fontsize?: Typo;
  color?: "black" | "gray100" | "gray200";
  starSize?: string;
}
export default function Rating({
  score,
  fontsize = "body300",
  color = "black",
  starSize = "12",
}: RatingProps) {
  const ratingNum = score.toFixed(1);
  return (
    <RatingWrapper>
      <Star height={starSize} />
      <Text typo={fontsize} color={color}>
        {ratingNum}
      </Text>
    </RatingWrapper>
  );
}
