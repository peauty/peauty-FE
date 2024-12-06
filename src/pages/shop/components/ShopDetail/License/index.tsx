import { Text } from "../../../../../components";
import { ContentsWrapper } from "../../index.styles";
import { ImageWrapper, ImageItem } from "./index.styles";
export default function License() {
  return (
    <ContentsWrapper>
      <Text typo="subtitle300">자격증 및 기타 서류</Text>
      <ImageWrapper>
        <ImageItem
        ></ImageItem>
        <ImageItem
        ></ImageItem>
      </ImageWrapper>
    </ContentsWrapper>
  );
}
