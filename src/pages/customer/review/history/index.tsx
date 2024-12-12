import { AppBar, GNB } from "../../../../components";

export default function ReviewHistory() {
  return (
    <>
      <AppBar prefix="backButton" title="리뷰 내역" />

      <GNB type="customer" />
    </>
  );
}
