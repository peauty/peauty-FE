import { Text } from "../../../../../components";
import ImageGallery from "../ImageGallery";
import Temp from "../../../../../assets/images/temp.png";
import { PhotosWrapper } from "./index.styles";
const images = [Temp, Temp, Temp, Temp];
export default function ReviewPhotos() {
  return (
    <PhotosWrapper>
      <Text typo="body200">리뷰 사진</Text>
      <ImageGallery images={images} totalImages={10} />
    </PhotosWrapper>
  );
}
