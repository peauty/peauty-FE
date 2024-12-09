import React from "react";
import { Divider } from "../../../../components";
import OverviewInfo from "./OverviewInfo";
import ShopEvent from "./ShopEvent";
import { ShopOverviewProps } from "../../../../types/customer/request";

export default function ShopOverview({
  workspaceName,
  reviewRating,
  reviewsCount,
  introduceTitle,
  introduce,
  noticeTitle,
  notice,
  address,
}: ShopOverviewProps) {
  return (
    <div>
      <OverviewInfo
        workspaceName={workspaceName}
        reviewRating={reviewRating}
        reviewsCount={reviewsCount}
        introduceTitle={introduceTitle}
        introduce={introduce}
        address={address}
      />
      <ShopEvent noticeTitle={noticeTitle} notice={notice} />
      <Divider thickness={3} />
    </div>
  );
}
