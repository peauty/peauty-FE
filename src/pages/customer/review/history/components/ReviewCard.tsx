import styled from "styled-components";
import { Text } from "../../../../../components/texts/Text";
import { colors } from "../../../../../style/color";
import { Divider } from "../../../../../components";
import Rating from "../../../../../components/rating/Rating";
import theme from "../../../../../style/theme";

interface ReviewProps {
  reviewDate: string;
  groomingStyle: string;
  puppyName: string;
  address: string;
  totalCost: number;
  rating: number;
  reviewText: string;
  reviewImages: string[];
  onEdit: () => void;
  onDelete: () => void;
}

export default function ReviewCard({
  reviewDate,
  groomingStyle,
  puppyName,
  address,
  totalCost,
  rating,
  reviewText,
  reviewImages,
  onEdit,
  onDelete,
}: ReviewProps) {
  return (
    <div style={{ border: `2px solid  ${theme.colors.background}` }}>
      <CardContainer>
        <Date>
          <Text typo="body400" color="gray100">
            작성일 {reviewDate}
          </Text>
        </Date>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            lineHeight: "1.4",
            gap: "5px",
          }}
        >
          <Text typo="body100" color="blue100">
            {groomingStyle}
          </Text>
          <RatingContainer>
            <Rating score={rating} fontsize="body100" />
          </RatingContainer>
        </div>
        <div>
          <Info>
            <div>
              <Text typo="subtitle100">{puppyName}</Text>
            </div>
            <Text typo="body300" color="blue100">
              총 금액
            </Text>
          </Info>
        </div>

        <Header>
          <Text typo="subtitle200">{totalCost.toLocaleString()}원</Text>
        </Header>

        <div style={{ lineHeight: "1.2", marginTop: "10px" }}>
          <Text typo="body400">{reviewText}</Text>
        </div>
        <ImageContainer>
          {reviewImages.map((image, index) => (
            <ReviewImage
              key={`${image}-${index}`}
              src={image}
              alt={`Review image ${index + 1}`}
            />
          ))}
        </ImageContainer>

        <Footer>
          <ActionButton
            onClick={onEdit}
            bgColor={colors.blue300}
            color={colors.blue100}
          >
            수정
          </ActionButton>
          <ActionButton
            onClick={onDelete}
            bgColor={colors.gray400}
            color={colors.gray100}
          >
            삭제
          </ActionButton>
        </Footer>
      </CardContainer>
    </div>
  );
}

const RatingContainer = styled.div`
  display: flex;
  margin-bottom: 2px;
`;

const CardContainer = styled.div`
  padding: 25px;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  line-height: 0.9;
`;

const ImageContainer = styled.div`
  display: flex;
  margin: 15px 0px;
  gap: 10px;
  width: 100%;
  height: 80px;
  overflow-x: auto;
`;

const Date = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: flex-end; */
  /* margin-left: 330px; */
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const ReviewImage = styled.img`
  height: 100%;
  border-radius: 8px;
  flex-shrink: 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  margin-top: 10px;
`;

const ActionButton = styled.button<{
  bgColor: string;
  color: string;
}>`
  flex: 1;
  height: 37px;
  font-size: 14px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: #f0f0f0;
    color: #ccc;
    cursor: not-allowed;
  }
`;
