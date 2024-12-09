import ShopInfo from "./ShopInfo";
import Career from "./Career";
import License from "./License";
import { forwardRef } from "react";
import { TabWrapper } from "../index.styles";
import { ShopDetailProps } from "../../../../types/customer/request";

const ShopDetail = forwardRef<HTMLDivElement, ShopDetailProps>(
  (
    {
      workspaceName,
      address,
      addressDetail,
      yearOfExperience,
      openHours,
      closeHours,
      openDay,
      paymentOption,
      phoneNumber,
      ...rest
    },
    ref,
  ) => {
    return (
      <TabWrapper ref={ref} {...rest}>
        <ShopInfo
          workspaceName={workspaceName}
          address={address}
          addressDetail={addressDetail}
          openHours={openHours}
          closeHours={closeHours}
          openDay={openDay}
          paymentOption={paymentOption}
          phoneNumber={phoneNumber}
        />
        <Career yearOfExperience={yearOfExperience} />
        <License />
      </TabWrapper>
    );
  },
);

export default ShopDetail;
