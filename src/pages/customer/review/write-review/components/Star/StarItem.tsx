import SvgStarBlue from "../../../../../../assets/svg/StarBlue";
import SvgStarGray from "../../../../../../assets/svg/StarGray";

type StarItemProps = {
  index: number;
  score: number;
  onHover: (index: number) => void;
  onClick: () => void;
};

export default function StarItem({
  index,
  score,
  onHover,
  onClick,
}: StarItemProps) {
  const isFilledStar = index + 1 <= score;

  return (
    <div
      style={{ cursor: "pointer" }}
      onMouseEnter={() => onHover(index + 1)}
      onClick={onClick}
    >
      {isFilledStar ? (
        <SvgStarBlue width={40} height={40} />
      ) : (
        <SvgStarGray width={40} height={40} />
      )}
    </div>
  );
}
