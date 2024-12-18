import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil"; // Recoil 상태를 읽어오는 훅
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
import {
  ContentsType,
  RegisterReviewRequest,
} from "../../../../types/customer/review";
import { registerReview } from "../../../../apis/customer/resources/review";
import { uploadImages } from "../../../../apis/designer/resources/internal";
import { AddImage } from "../../../../assets/svg";
import SvgPen from "../../../../assets/svg/Pen";
import { ReviewRatingType } from "../../../../types/customer/review";
import ReviewableService from "./components/ReviewableService";
import { ReviewAtom } from "../../../../atoms/reviewAtom";

export default function WriteReview() {
  const navigate = useNavigate();
  const { userId } = useUserDetails();

  // Recoil에서 ReviewAtom 상태 가져오기
  const reviewData = useRecoilValue(ReviewAtom);

  // 상태 관리
  const [score, setScore] = useState<ReviewRatingType>("ZERO");
  const [reviewText, setReviewText] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]); // 태그 value를 저장
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
  const handleTagChange = (selectedTags: string[]) => setTags(selectedTags); // 부모에서 전달된 value 값 처리

  const handleSubmit = async () => {
    if (!reviewData) {
      alert("리뷰 데이터를 찾을 수 없습니다.");
      return;
    }

    const { puppyId, processId, threadId } = reviewData; // Recoil에서 불러온 값 사용

    const data: RegisterReviewRequest = {
      reviewRating: score,
      contentDetail: reviewText,
      contentGenerals: tags as ContentsType[], // 선택된 태그의 value 값을 전달
      reviewImages: uploadedImageUrls,
    };

    try {
      await registerReview(Number(userId), puppyId, processId, threadId, data);
      console.log("리뷰가 성공적으로 등록되었습니다.");
      navigate(ROUTE.customer.mypage.review.history);
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
          <StarChanger onChange={(newScore) => setScore(newScore)} />
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
