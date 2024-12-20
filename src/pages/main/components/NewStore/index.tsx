import { Text } from "../../../../components";
import { Badge } from "../../../../components/category/Badge";
import { HomeContentsWrapper } from "../../customer/index.styles";
import {
  NewStoreWrapper,
  NewStoreItem,
  NewStoreImage,
  NewStoreTextWrap,
  NewStoreBadgeWrap,
} from "./index.styles";
import Bara from "../../../../assets/images/baraum.png";
import All from "../../../../assets/images/all.png";
export default function NewStore() {
  return (
    <HomeContentsWrapper>
      <Text typo="subtitle300">새로 오픈한 신규 매장</Text>
      <NewStoreWrapper>
        <NewStoreItem>
          <NewStoreImage src={Bara} />
          <NewStoreTextWrap>
            <Text typo="body200">바우라움 그루밍 애견미용</Text>
            <Text typo="body600">
              서울특별시시 강남구 논현로 132길 37 메인캠퍼스
            </Text>
            <NewStoreBadgeWrap>
              <Badge type="general" text="행동교정 전문" />
              <Badge type="general" text="행동교정 전문" />
            </NewStoreBadgeWrap>
          </NewStoreTextWrap>
        </NewStoreItem>
        <NewStoreItem>
          <NewStoreImage src={All} />
          <NewStoreTextWrap>
            <Text typo="body200">엘리스펫</Text>
            <Text typo="body600">서울특별시 강남구 선릉로76길 40 1층</Text>
            <NewStoreBadgeWrap>
              <Badge type="general" text="행동교정 전문" />
            </NewStoreBadgeWrap>
          </NewStoreTextWrap>
        </NewStoreItem>
      </NewStoreWrapper>
    </HomeContentsWrapper>
  );
}
