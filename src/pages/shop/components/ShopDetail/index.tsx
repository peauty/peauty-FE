import ShopInfo from "./ShopInfo";
import Career from "./Career";
import License from "./License";
import { forwardRef } from "react";
import { TabWrapper } from "../index.styles";



const ShopDetail = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  return (
    <TabWrapper ref={ref} {...props}>
      <ShopInfo />
      <Career />
      <License />
    </TabWrapper>
  );
});

export default ShopDetail;
