import { useEffect, useState } from "react";
import StarItem from "./StarItem";

type StarProps = {
  onChange: (score: number) => void;
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
    onChange(fixedScore);
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
