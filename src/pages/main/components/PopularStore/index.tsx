import { Text } from "../../../../components";
import { Badge } from "../../../../components/category/Badge";
import { colors } from "../../../../style/color";
import { HomeContentsWrapper } from "../../customer/index.styles";
import {
  PopularStoreItem,
  PopularStoreWrap,
  PopularStoreImg,
  PopularStoreText,
} from "./index.styles";
import { NewStoreBadgeWrap } from "../NewStore/index.styles";
import Alo from "../../../../assets/images/alo.png";
import MyBE from "../../../../assets/images/mybeauty.png";
export default function PopularStore() {
  return (
    <HomeContentsWrapper>
      <Text typo="subtitle200">
        우리동네 <span style={{ color: `${colors.red100}` }}>HOT</span>한 매장
      </Text>
      <PopularStoreWrap>
        <PopularStoreItem>
          <PopularStoreImg src={Alo} />
          <PopularStoreText>
            <Text typo="subtitle300">알로하</Text>
            <Text typo="body400">서울 강남구 논현동</Text>
            <NewStoreBadgeWrap>
              <Badge type="general" text="말티즈 전문가" />
              <Badge type="general" text="반려견 구조 자격증" />
            </NewStoreBadgeWrap>
          </PopularStoreText>
        </PopularStoreItem>
        <PopularStoreItem>
          <PopularStoreImg src={MyBE} />
          <PopularStoreText>
            <Text typo="subtitle300">마이뷰티독 강남정</Text>
            <Text typo="body400">서울 강남구 역삼동동</Text>
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
