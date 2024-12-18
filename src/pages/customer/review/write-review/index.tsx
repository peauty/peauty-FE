import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  CustomButton,
  CustomInput,
  Divider,
  GNB,
  Text,
} from "../../../../components";
import StarChanger from "./components/Star/StarChanger";
import TagList from "./components/TagList";
import {
  Wrapper,
  FirstQuestionBox,
  SecondQuestionBox,
  WriteReviewBox,
  HintWrapper,
  ImgUploadWrapper,
} from "./index.styles";
import { ROUTE } from "../../../../constants/routes";
import { useUserDetails } from "../../../../hooks/useUserDetails";
import { RegisterReviewRequest } from "../../../../types/customer/review";
import { registerReview } from "../../../../apis/customer/resources/review";
import { uploadImages } from "../../../../apis/designer/resources/internal";
import { AddImage } from "../../../../assets/svg";
import SvgPen from "../../../../assets/svg/Pen";
import { ReviewRatingType } from "../../../../types/customer/review";
import ReviewableService from "./components/ReviewableService";
export default function WriteReview() {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    puppyId,
    processId,
    threadId,
    style,
    workspaceName,
    availableGroomingDate,
    estimatedCost,
    badgeImageUrl,
  } = location.state || {};
  const { userId } = useUserDetails();
  console.log("넘어온 데이터 확인:", {
    puppyId,
    processId,
    threadId,
    style,
    workspaceName,
    availableGroomingDate,
    estimatedCost,
    badgeImageUrl,
  });
  // 상태 관리
  const [score, setScore] = useState<ReviewRatingType>("ZERO");

  const handleStarChange = (newScore: ReviewRatingType) => {
    setScore(newScore);
    console.log("선택된 별점: ", newScore);
  };
  const [reviewText, setReviewText] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [uploadedImageUrls, setUploadedImageUrls] = useState<string[]>([]);

  // 이미지 업로드 처리
  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setImages((prevImages) => [...prevImages, ...fileArray]);

      try {
        const response = await uploadImages(fileArray); // 이미지 업로드 API 호출
        const imageUrls = response.uploadedImageUrl;

        if (imageUrls && imageUrls.length > 0) {
          setUploadedImageUrls((prevUrls) => [...prevUrls, ...imageUrls]);
          console.log("이미지 업로드 성공: ", imageUrls);
        } else {
          console.warn("업로드된 이미지 URL이 없습니다.");
        }
      } catch (error) {
        console.error("이미지 업로드 실패: ", error);
        alert("이미지 업로드 중 오류가 발생했습니다.");
      }
    }
  };

  // 태그 변경
  const handleTagChange = (selectedTags: string[]) => setTags(selectedTags);
  const handleSubmit = async () => {
    const data: RegisterReviewRequest = {
      reviewRating: score,
      contentDetail: reviewText,
      reviewImages: uploadedImageUrls,
    };

    try {
      await registerReview(Number(userId), puppyId, processId, threadId, data);
      console.log("리뷰가 성공적으로 등록되었습니다.");
      navigate(ROUTE.customer.mypage.reviewHistory);
    } catch (error) {
      console.error("리뷰 등록 중 오류 발생: ", error);
      alert("리뷰 등록에 실패했습니다.");
    }
  };

  return (
    <>
      <AppBar prefix="backButton" title="리뷰 작성" />
      <Wrapper>
        <ReviewableService />
        <Divider />

        <FirstQuestionBox>
          <Text typo="subtitle300">서비스에 만족하셨나요?</Text>
          <StarChanger onChange={handleStarChange} />
        </FirstQuestionBox>

        <SecondQuestionBox>
          <Text typo="subtitle300">어떤 점이 좋았나요?</Text>
          <TagList onTagChange={handleTagChange} />
        </SecondQuestionBox>
        <Divider />

        <WriteReviewBox>
          <HintWrapper>
            <SvgPen width={14} />
            <Text typo="subtitle300">리뷰를 작성해 주세요</Text>
          </HintWrapper>
          <CustomButton variant="outline">
            <ImgUploadWrapper>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                style={{ display: "none" }}
                id="fileInput"
              />
              <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
                <Text color="gray200" typo="body500">
                  사진은 최대 3장까지 가능해요
                </Text>
                <AddImage width={15} />
              </label>
            </ImgUploadWrapper>
          </CustomButton>
          <CustomInput
            placeholder="리뷰 작성"
            inputType="textarea"
            maxLength={400}
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </WriteReviewBox>
      </Wrapper>
      <GNB buttonText="등록하기" onLargeButtonClick={handleSubmit} />
    </>
  );
}
