import { Text } from "../../../../../components";
import { Badge } from "../../../../../components/category/Badge";
import Rating from "../../../../../components/rating";
import {
  Container,
  BadgeWrapper,
  Details,
  RatingWrapper,
  Thumbnail,
  ContentsWrapper,
} from "./index.styles";

interface StatusListItemProps {
  location: string;
  store: string;
  score: number;
  review: number;
  badges: { name: string; color: string }[];
  thumbnailUrl: string;
  onClick: () => void;
}

export default function StatusListItem({
  location,
  store,
  score,
  review,
  badges,
  thumbnailUrl,
  onClick,
}: StatusListItemProps) {
  return (
    <Container>
      <ContentsWrapper onClick={onClick}>
        <Thumbnail src={thumbnailUrl} alt={`${store}의 섬네일`} />
        <Details>
          <BadgeWrapper>
            <Text typo="subtitle200">{store}</Text>
            <RatingWrapper>
              <Rating starSize="13" score={score} fontsize="body400" />
              <Text typo="body400">({review})</Text>
            </RatingWrapper>
          </BadgeWrapper>
          <Text typo="body400">{location}</Text>
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
