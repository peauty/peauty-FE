import { Camera } from "../../../assets/svg";
import { StyleProfileImg } from "./ProfileImg.styles";

interface Props {
  src: string;
  alt: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  borderRadius?: string;
  isDarkened?: boolean;
}

export default function ProfileImg({
  src,
  alt,
  onClick,
  width,
  height,
  borderRadius,
  isDarkened = false,
}: Props) {
  return (
    <StyleProfileImg.Wrapper>
      <StyleProfileImg.RoundImg
        src={src}
        alt={alt}
        width={width}
        height={height}
        borderRadius={borderRadius}
        style={{
          filter: isDarkened ? "brightness(0.5)" : "none", // 어둡게 처리
          transition: "filter 0.3s ease", // 부드럽게 전환
        }}
      />
      {onClick && (
        <StyleProfileImg.EditButton onClick={onClick}>
          <Camera width={35} height={35} />
        </StyleProfileImg.EditButton>
      )}
    </StyleProfileImg.Wrapper>
  );
}
