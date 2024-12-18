import styled from "styled-components";
import { Text } from "../../../../../components/texts/Text";
import { colors } from "../../../../../style/color";
import { Divider } from "../../../../../components";
import Rating from "../../../../../components/rating/Rating";

interface ReviewProps {
  reviewDate: string;
  groomingStyle: string;
  puppyName: string;
  address: string;
  totalCost: number;
  rating: number;
  reviewText: string;
  reviewImage: string;
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
    reviewImage,
    onEdit,
    onDelete,
  }: ReviewProps) {
    return (
      <CardContainer>
        <Divider />
        <Date>
          <Text typo="body300" color="gray100">작성일 {reviewDate}</Text>
        </Date>
  
        <div>
          <Info>
            <Text typo="body100" color="blue100">{groomingStyle}</Text>
            <Text typo="body500" color="blue100">총금액</Text>
          </Info>
        </div>
  
        <Header>
          <div>
            <div>
              <Text typo="subtitle100">{puppyName}</Text>
            </div>
            <Text typo="body500" color="gray100">{address}</Text>
            <Rating score={rating} fontsize="body300" />
          </div>
  
          <Text typo="subtitle200" color="gray100">{totalCost.toLocaleString()}원</Text>
        </Header>
  
        <Text typo="body400">{reviewText}</Text>
        <ImageContainer>
          <ReviewImage src={reviewImage} alt="Review" />
          <ReviewImage src={reviewImage} alt="Review" />
        </ImageContainer>
  
        <Footer>
          <ActionButton onClick={onEdit} bgColor={colors.blue300} color={colors.blue100} width="200px">수정</ActionButton>
          <ActionButton onClick={onDelete} bgColor={colors.gray400} color={colors.gray100} width="200px">삭제</ActionButton>
        </Footer>
      </CardContainer>
    );
  }
  




  

const CardContainer = styled.div`
  //padding: 5px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  // margin-bottom: 10px;
  width: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 10px;
  width: 100%;
  height: 80px;
`;

const Date = styled.div`
  margin-left: 330px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const ReviewImage = styled.img`
  height: 100%;
  border-radius: 8px;
  gap: 10px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 8px;
`;

const ActionButton = styled.button<{ width: string; bgColor: string; color: string }>`
  width: ${({ width }) => width};
  height: 37px;
  font-size: 14px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: #f0f0f0;
    color: #ccc;
    cursor: not-allowed;
  }
`;

const DateTextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;