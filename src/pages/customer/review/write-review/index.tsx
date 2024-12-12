import { useNavigate } from "react-router-dom";
import { AddImage } from "../../../../assets/svg";
import SvgPen from "../../../../assets/svg/Pen";
import {
  AppBar,
  CustomButton,
  CustomInput,
  Divider,
  GNB,
  Text,
} from "../../../../components";
import ReviewableService from "./components/ReviewableService";
import StarChanger from "./components/Star/StarChanger";
import TagList from "./components/TagList";
import {
  FirstQuestionBox,
  HintWrapper,
  ImgUploadWrapper,
  SecondQuestionBox,
  Wrapper,
  WriteReviewBox,
} from "./index.styles";
import { ROUTE } from "../../../../constants/routes";

export default function WriteReview() {
  const navigate = useNavigate();
  const handleImageUpload = () => {};

  const handleStarChange = (score: number) => {
    console.log("고정된 별점: ", score);
  };

  const handleSubmit = () => {
    navigate(ROUTE.customer.mypage.reviewHistory);
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
          <Text typo="body500" color="gray100">
            만족하신 부분에 대해서 이야기 해주세요
          </Text>
          <TagList />
        </SecondQuestionBox>
        <Divider />

        <WriteReviewBox>
          <HintWrapper>
            <SvgPen width={14} />
            <Text typo="subtitle300">리뷰를 작성해 주세요</Text>
          </HintWrapper>
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
        </WriteReviewBox>
      </Wrapper>
      <GNB buttonText="등록하기" onLargeButtonClick={handleSubmit} />
    </>
  );
}
