import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
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
  DeleteButton,
  ImageContainer,
  AddWrapper,
  ImageUnit,
} from "./index.styles";
import { ROUTE } from "../../../../constants/routes";
import { useUserDetails } from "../../../../hooks/useUserDetails";
import {
  ContentsType,
  UpdateReviewRequest,
  ReviewRatingType,
} from "../../../../types/customer/review";
import {
  registerReview,
  updateReview,
} from "../../../../apis/customer/resources/review";
import { uploadImages } from "../../../../apis/designer/resources/internal";
import { AddImage } from "../../../../assets/svg";
import SvgPen from "../../../../assets/svg/Pen";
import ReviewableService from "./components/ReviewableService";
import { ReviewAtom } from "../../../../atoms/reviewAtom";
import { getReviewDetail } from "../../../../apis/customer/resources/review";
import Loading from "../../../../components/page/sign-up/Loading";

const tagMapping: { [key: string]: string } = {
  "서비스가 좋아요": "GOOD_SERVICE",
  "견적서대로 해줘요": "MYPICK",
  "다음에 또 오고 싶어요": "COME_AGAIN",
  친절해요: "KIND",
  "가성비 좋아요": "GOOD_COST",
};
export default function WriteReview(props: { isEdit: boolean }) {
  const navigate = useNavigate();
  const { userId } = useUserDetails();
  const reviewData = useRecoilValue(ReviewAtom);

  const [score, setScore] = useState<ReviewRatingType>("ZERO");
  const [reviewText, setReviewText] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]); // 업로드된 이미지 파일 상태
  const [uploadedImageUrls, setUploadedImageUrls] = useState<string[]>([]); // 업로드된 이미지 URL 상태
  const [loading, setLoading] = useState<boolean>(true);

  const ratingMap: { [key: number]: ReviewRatingType } = {
    0: "ZERO",
    0.5: "ZERO_POINT_FIVE",
    1: "ONE",
    1.5: "ONE_POINT_FIVE",
    2: "TWO",
    2.5: "TWO_POINT_FIVE",
    3: "THREE",
    3.5: "THREE_POINT_FIVE",
    4: "FOUR",
    4.5: "FOUR_POINT_FIVE",
    5: "FIVE",
  };

  useEffect(() => {
    if (props.isEdit && reviewData) {
      const fetchReviewDetails = async () => {
        if (reviewData.reviewId) {
          try {
            const response = await getReviewDetail(
              Number(userId),
              reviewData.puppyId,
              reviewData.processId,
              reviewData.threadId,
              reviewData.reviewId,
            );

            if (response) {
              setScore(
                (response.reviewRating && ratingMap[response.reviewRating]) ||
                  "ZERO",
              );
              setReviewText(response.contentDetail ?? "");
              const initialTags =
                response.contentGenerals?.map(
                  (tag) => tagMapping[tag] ?? tag,
                ) ?? [];
              setTags(initialTags);
              setUploadedImageUrls(response.reviewImages ?? []);
            }
          } catch (error) {
            console.error("Error fetching review details", error);
            alert("리뷰 정보를 불러오는 데 실패했습니다.");
          } finally {
            setLoading(false);
          }
        }
      };

      fetchReviewDetails();
    } else {
      setLoading(false);
    }
  }, [props.isEdit, userId, reviewData]);

  const handleImageDelete = (url: string) => {
    const updatedImageUrls = uploadedImageUrls.filter(
      (imageUrl) => imageUrl !== url,
    );
    setUploadedImageUrls(updatedImageUrls);
  };

  useEffect(() => {
    if (!props.isEdit) {
      setUploadedImageUrls([]); // 업로드된 이미지 URL 초기화
    }
  }, [props.isEdit]);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);

      try {
        const response = await uploadImages(fileArray);
        const imageUrls = response.uploadedImageUrl;

        if (imageUrls && imageUrls.length > 0) {
          setUploadedImageUrls((prevUrls) => [...prevUrls, ...imageUrls]);
        } else {
          console.warn("No image URLs returned from uploadImages API");
        }
      } catch (error) {
        console.error("이미지 업로드 실패: ", error);
        alert("이미지 업로드 중 오류가 발생했습니다.");
      }
    }
  };

  const handleTagChange = (selectedTags: string[]) => setTags(selectedTags);

  const handleSubmit = async () => {
    if (!reviewData) {
      alert("리뷰 데이터를 찾을 수 없습니다.");
      return;
    }

    const { puppyId, processId, threadId } = reviewData;

    const data: UpdateReviewRequest = {
      reviewRating: score,
      contentDetail: reviewText,
      contentGenerals: tags as ContentsType[],
      reviewImageUrls: uploadedImageUrls,
    };

    try {
      if (props.isEdit && reviewData.reviewId) {
        await updateReview(Number(userId), Number(reviewData.reviewId), data);
      } else {
        await registerReview(
          Number(userId),
          puppyId,
          processId,
          threadId,
          data,
        );
      }
      navigate(ROUTE.customer.mypage.review.history);
    } catch (error) {
      console.error("리뷰 등록/수정 중 오류 발생: ", error);
      alert("리뷰 등록/수정에 실패했습니다.");
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <AppBar prefix="backButton" title="리뷰 작성" />
      <Wrapper>
        <ReviewableService />
        <Divider />

        <FirstQuestionBox>
          <Text typo="subtitle300">서비스에 만족하셨나요?</Text>
          <StarChanger
            value={score}
            onChange={(newScore) => setScore(newScore)}
          />
        </FirstQuestionBox>

        <SecondQuestionBox>
          <Text typo="subtitle300">어떤 점이 좋았나요?</Text>
          <TagList value={tags} onTagChange={handleTagChange} />
        </SecondQuestionBox>
        <Divider />

        <WriteReviewBox>
          <HintWrapper>
            <SvgPen width={14} />
            <Text typo="subtitle300">리뷰를 작성해 주세요</Text>
          </HintWrapper>

          {uploadedImageUrls.length === 0 ? (
            <ImgUploadWrapper
              onClick={() => document.getElementById("fileInput")?.click()}
              style={{ cursor: "pointer" }}
            >
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <Text color="gray100" typo="body600">
                  사진은 최대 3장까지 가능해요
                </Text>
              </div>
              <input
                type="file"
                accept="image/*"
                multiple
                value={uploadedImageUrls.length ? undefined : ""}
                onChange={handleImageUpload}
                style={{ display: "none" }}
                id="fileInput"
              />
              <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
                <AddImage width={15} />
              </label>
            </ImgUploadWrapper>
          ) : (
            <ImageContainer>
              {/* Image upload button - only shown if less than 3 images */}
              {uploadedImageUrls.length < 3 && (
                <AddWrapper>
                  <CustomButton variant="secondary" size="full">
                    <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
                      <AddImage width={15} />
                    </label>
                    <input
                      id="fileInput"
                      type="file"
                      accept="image/*"
                      multiple
                      value={uploadedImageUrls.length ? undefined : ""}
                      onChange={handleImageUpload}
                      style={{ display: "none" }}
                    />
                  </CustomButton>
                </AddWrapper>
              )}

              {/* Uploaded images preview */}
              {uploadedImageUrls.map((imageUrl, index) => (
                <AddWrapper key={index} style={{ position: "relative" }}>
                  <ImageUnit src={imageUrl} alt={`uploaded-image-${index}`} />
                  <DeleteButton onClick={() => handleImageDelete(imageUrl)}>
                    &minus;
                  </DeleteButton>
                </AddWrapper>
              ))}
            </ImageContainer>
          )}

          <CustomInput
            placeholder="리뷰를 작성해주세요."
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
