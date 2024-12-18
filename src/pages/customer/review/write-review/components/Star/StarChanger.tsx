import { useEffect, useState } from "react";
import StarItem from "./StarItem";
import { ReviewRatingType } from "../../../../../../types/customer/review";
type StarProps = {
  onChange: (score: ReviewRatingType) => void;
};
const scoreMap: { [key: number]: ReviewRatingType } = {
  0: "ZERO",
  1: "ONE",
  2: "TWO",
  3: "THREE",
  4: "FOUR",
  5: "FIVE",
};
export default function StarChanger({ onChange }: StarProps) {
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [fixedScore, setFixedScore] = useState<number>(0);

  const handleStarClick = (index: number) => {
    setFixedScore(index);
    setCurrentScore(index);
  };

  const handleHover = (index: number) => {
    setCurrentScore(index);
  };

  const handleStarLeave = () => setCurrentScore(fixedScore);

  useEffect(() => {
    // 숫자를 ReviewRatingType으로 변환해서 부모로 전달
    onChange(scoreMap[fixedScore]);
  }, [fixedScore, onChange]);
  return (
    <div style={{ display: "flex" }} onMouseLeave={handleStarLeave}>
      {Array.from({ length: 5 }, (_, index) => (
        <StarItem
          key={index}
          index={index}
          score={currentScore}
          onHover={handleHover}
          onClick={() => handleStarClick(index + 1)}
        />
      ))}
    </div>
  );
}
