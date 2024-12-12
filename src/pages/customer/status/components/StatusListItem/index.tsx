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
 

  name: string;
 store: string;
  score: number;
  review: number;
  badges: { name: string; color: string }[];
  thumbnailUrl: string;
  onClick: () => void;
}

export default function StatusListItem({
  
  name,
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
        <Thumbnail src={thumbnailUrl} alt={`${name}의 섬네일`} />
        <Details>
          <Text typo="subtitle200">{store}</Text>
          <Text typo="body600">{name}</Text>
          <RatingWrapper>
            <Rating
              starSize="10"
              score={score}
              fontsize="body600"
              color="gray100"
            />
            <Text typo="body600" color="gray100">
              ({review}) 
            </Text>
            <BadgeWrapper>
            {badges.map((badge, idx) => (
              <Badge
                key={idx}
                type="general"
                text={badge.name}
                // variant={badge.color}
                variant="blue"
                // color={badge.color}
              />
            ))}
          </BadgeWrapper>
            
          </RatingWrapper>
         
        </Details>
      </ContentsWrapper>
    </Container>
  );
}
