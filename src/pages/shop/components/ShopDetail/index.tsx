import ShopInfo from "./ShopInfo";
import Career from "./Career";
import License from "./License";
import { forwardRef } from "react";
import styled from "styled-components";

const StyledShopDetail = styled.div`
  margin: 20px 0 0;
  padding: 0 20px;
  scroll-margin-top: 130px; /* AppBar 높이만큼 스크롤 마진 추가 */
`;

const ShopDetail = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  return (
    <StyledShopDetail ref={ref} {...props}>
      <ShopInfo />
      <Career />
      <License />
    </StyledShopDetail>
  );
});

export default ShopDetail;
