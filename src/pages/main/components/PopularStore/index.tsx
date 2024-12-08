import { Text } from "../../../../components";
import { Badge } from "../../../../components/category/Badge";
import { colors } from "../../../../style/color";
import { HomeContentsWrapper } from "../../index.styles";
import { PopularStoreItem, PopularStoreWrap,PopularStoreImg, PopularStoreText } from "./index.styles";
import {  NewStoreBadgeWrap } from "../NewStore/index.styles";
export default function PopularStore() {
  return (
    <HomeContentsWrapper>
      <Text typo="subtitle200">
        우리동네 <span style={{ color: `${colors.red100}` }}>HOT</span>한 매장
      </Text>
      <PopularStoreWrap>
        <PopularStoreItem>
        <PopularStoreImg/>
        <PopularStoreText>
          <Text typo="subtitle300">몽뜨의 아뜰리네</Text>
          <Text typo="body400" color="gray100">
            몽뜨의 아뜰리네
          </Text>
          <NewStoreBadgeWrap>
            <Badge type="general" text="말티즈 전문가" />
            <Badge type="general" text="반려견 구조 자격증" />
          </NewStoreBadgeWrap>
        </PopularStoreText>
      </PopularStoreItem>
      <PopularStoreItem
        >
        <PopularStoreImg/>
        <PopularStoreText>
          <Text typo="subtitle300">몽뜨의 아뜰리네</Text>
          <Text typo="body400" color="gray100">
            몽뜨의 아뜰리네
          </Text>
          <NewStoreBadgeWrap>
            <Badge type="general" text="말티즈 전문가" />
            <Badge type="general" text="반려견 구조 자격증" />
          </NewStoreBadgeWrap>
        </PopularStoreText>
      </PopularStoreItem>
      </PopularStoreWrap>
    </HomeContentsWrapper>
  );
}
