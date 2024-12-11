import { AddImage } from "../../../../assets/svg";
import {
  AppBar,
  CustomButton,
  CustomInput,
  GNB,
  Text,
} from "../../../../components";
import StarRating from "../../../../components/star-rating/StarRating";
import ReviewableService from "./components/ReviewableService";
import { ImgUploadWrapper } from "./index.styles";

export default function WriteReview() {
  const initialRating = 3;

  const handleImageUpload = () => {};

  return (
    <>
      <AppBar prefix="backButton" title="리뷰 작성" />

      <ReviewableService />

      <Text typo="subtitle300">서비스에 만족하셨나요?</Text>
      <StarRating rating={initialRating} />

      <Text typo="subtitle300">어떤 점이 좋았나요?</Text>
      <Text typo="body500">만족하신 부분에 대해서 이야기 해주세요</Text>

      <Text typo="subtitle300">리뷰를 작성해 주세요</Text>
      <CustomButton variant="outline" onClick={handleImageUpload}>
        <ImgUploadWrapper>
          <Text color="gray200" typo="body500">
            사진은 최대 3장까지 가능해요
          </Text>
          <AddImage width={15} />
        </ImgUploadWrapper>
      </CustomButton>
      <CustomInput
        placeholder="리뷰 작성 시 유의사항을 확인해주세요"
        inputType="textarea"
        maxLength={400}
      />

      <GNB buttonText="등록하기" />
    </>
  );
}
