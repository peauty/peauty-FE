import { Text } from "../../../../../components";
import ImageGallery from "../ImageGallery";
import Temp from "../../../../../assets/images/temp.png";
const images = [Temp, Temp, Temp, Temp];
export default function ReviewPhotos() {
  return (
    <div
      style={{
        margin: "20px 0",
        display: "flex",
        flexDirection: "column",
        gap: "7px",
      }}
    >
      <Text typo="body200">리뷰 사진</Text>
      <ImageGallery images={images} totalImages={10} />
    </div>
  );
}
