import { Camera } from "../../../assets/svg";
import { StyleProfileImg } from "./ProfileImg.styles";

interface Props {
  src: string;
  alt: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  borderRadius?: string; 
  
}

export default function ProfileImg({
  src,
  alt,
  onClick,
  width,
  height,
  borderRadius,
}: Props) {
  return (
    <StyleProfileImg.Wrapper>
      <StyleProfileImg.RoundImg
        src={src}
        alt={alt}
        width={width}
        height={height}
        borderRadius={borderRadius} 
      />
      {onClick && (
        <StyleProfileImg.EditButton onClick={onClick}>
          <Camera width={35} height={35} />
        </StyleProfileImg.EditButton>
      )}
    </StyleProfileImg.Wrapper>
  );
}
