import React from "react";
import ReviewCard from "./ReviewCard";

export default function ReviewedService() {
  // 예시 데이터
  const reviewData = {
    reviewDate: "2024-12-18",
    groomingStyle: "가윗컷+곰돌이컷",
    puppyName: "초코",
    address: "서울특별시 강남구",
    totalCost: 45000,
    rating: 4.5,
    reviewText: "친절한 서비스와 꼼꼼한 손질로 만족스러웠습니다! 나중에 또오고싶어요",
    reviewImage: "https://via.placeholder.com/80",
    onEdit: () => alert("리뷰 수정 클릭!"),
    onDelete: () => alert("리뷰 삭제 클릭!"),
  };

  return (
    <div>
      <ReviewCard {...reviewData} />
    </div>
  );
}
