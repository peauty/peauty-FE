import { Wrapper } from "./BackDrop.styles";

interface BackDropProps {
  fullScreen?: boolean; // fullScreen 여부
  onClick?: () => void; // 클릭 이벤트
}

export default function BackDrop({
  fullScreen = false,
  onClick,
}: BackDropProps) {
  return <Wrapper fullScreen={fullScreen} onClick={onClick} />;
}
