import { Star } from "../../assets/svg";
import { Text } from "../texts/Text";
import { RatingWrapper } from "./Rating.styles";
export interface RatingProps {
  score: string;
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
  return (
    <RatingWrapper>
      <Star height={starSize} />
      <Text typo={fontsize} color={color}>
        {score}
      </Text>
    </RatingWrapper>
  );
}
