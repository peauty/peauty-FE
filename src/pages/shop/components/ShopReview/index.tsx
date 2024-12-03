import { Text } from "../../../../components";
import BottomSheet from "../../../../components/buttom-sheet/BottomSheet";
export default function ShopReview() {
  return (
    <div style={{ padding: "0 20px" }}>
      <div style={{ position: "relative", display: "flex" }}>
        <div style={{ flex: "1" }}>
          <Text typo="subtitle300">고객 리뷰</Text>
        </div>
        <BottomSheet options={["1", "2"]} />
      </div>
    </div>
  );
}
