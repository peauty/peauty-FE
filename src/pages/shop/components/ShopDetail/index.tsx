import ShopInfo from "./ShopInfo";
import Career from "./Career";
import License from "./License";
import { forwardRef } from "react";
import styled from "styled-components";

const StyledShopDetail = styled.div`
  display: flex;
  flex-direction: column;
  scroll-margin-top: 140px;
  /* AppBar와 StickyContainer의 높이를 고려하여 더 크게 설정 */
  margin: 20px 0 0;
  padding: 0 20px;
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
