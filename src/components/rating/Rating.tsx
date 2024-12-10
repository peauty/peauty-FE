import { Star } from "../../assets/svg";
import { Text } from "../texts/Text";
import { RatingWrapper } from "./Rating.styles";
export interface RatingProps {
  score: number;
  fontsize?: "body300" | "body600";
  color?: "black" | "gray100";
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
