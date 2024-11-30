import { Camera } from "../../assets/svg";
import { StyleProfileImg } from "./ProfileImg.styles";

interface Props {
  src: string;
  alt: string;
  onClick?: () => void;
  width?: string;
  height?: string;
}

export default function ProfileImg({
  src,
  alt,
  onClick,
  width,
  height,
}: Props) {
  return (
    <StyleProfileImg.Wrapper>
      <StyleProfileImg.RoundImg
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      {onClick && (
        <StyleProfileImg.EditButton onClick={onClick}>
          <Camera width={35} height={35} />
        </StyleProfileImg.EditButton>
      )}
    </StyleProfileImg.Wrapper>
  );
}
