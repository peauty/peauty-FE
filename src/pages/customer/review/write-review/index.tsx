import { AppBar, GNB, Text } from "../../../../components";
import ReviewableService from "./components/ReviewableService";
import Star from "./components/Star";

export default function WriteReview() {
  return (
    <>
      <AppBar prefix="backButton" title="리뷰 작성" />

      <ReviewableService />

      <Text typo="subtitle300">서비스에 만족하셨나요?</Text>
      <Star />

      <Text typo="subtitle300">어떤 점이 좋았나요?</Text>
      <Text typo="body500">만족하신 부분에 대해서 이야기 해주세요</Text>

      <GNB buttonText="등록하기" />
    </>
  );
}
