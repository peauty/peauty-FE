import React from "react";
import styled from "styled-components";
import {
  StarsWrapper,
  Star,
  EmptyStar,
  FilledStar,
  PartialStar,
} from "./StarRating.styles";
interface StarRatingProps {
  rating?: number; // 평점 (0 ~ 5)
  size?: number;
  gap?: number;
}

export default function StarRating({ rating = 0, size, gap }: StarRatingProps) {
  const totalStars = 5; // 총 별 개수

  return (
    <StarsWrapper gap={gap}>
      {Array.from({ length: totalStars }, (_, index) => {
        const isFull = rating >= index + 1; // 완전히 채워진 별
        const isPartial = rating > index && rating < index + 1; // 부분적으로 채워진 별

        return (
          <Star key={index} size={size}>
            {isFull ? (
              <FilledStar />
            ) : isPartial ? (
              <PartialStar fillPercentage={(rating - index) * 100} />
            ) : (
              <EmptyStar />
            )}
          </Star>
        );
      })}
    </StarsWrapper>
  );
}
