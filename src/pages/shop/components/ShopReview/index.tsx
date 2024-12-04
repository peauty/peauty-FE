import { Text } from "../../../../components";
import BottomSheet from "../../../../components/buttom-sheet/BottomSheet";
import StarRating from "../../../../components/star-rating/StarRating";
import ReviewPhotos from "./ReviewPhotos";
import ReviewItem from "./ReviewItem";
import { forwardRef } from "react";

const ShopReview = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  return (
    <div ref={ref} {...props} style={{ padding: "30px 20px" }}>
      <div style={{ display: "flex", marginTop: "25px 0 10px" }}>
        <div style={{ flex: "1" }}>
          <Text typo="subtitle300">고객 리뷰</Text>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Text typo="subtitle100">5.0</Text>
        <StarRating rating={5.0} size={17} />
      </div>
      <ReviewPhotos />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <BottomSheet options={["최신순", "평점 높은순"]} />
      </div>
      <ReviewItem />
    </div>
  );
});

export default ShopReview;
