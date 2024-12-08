import { Text } from "../../../../components";
import { Badge } from "../../../../components/category/Badge";
import { HomeContentsWrapper } from "../../index.styles";
import { NewStoreWrapper,NewStoreItem ,NewStoreImage, NewStoreTextWrap,NewStoreBadgeWrap} from "./index.styles";
export default function NewStore() {
  return (
    <HomeContentsWrapper>
      <Text typo="subtitle300">새로 오픈한 신규 매장</Text>
      <NewStoreWrapper>
        <NewStoreItem>
          <NewStoreImage/>
          <NewStoreTextWrap>
            <Text typo="body200">몬도서울 위례신도시점</Text>
            <Text typo="body600" color="gray100">
              남위례역 3번 출구 대진건물 3층
            </Text>
            <NewStoreBadgeWrap>
              <Badge type="general" text="행동교정 전문" />
              <Badge type="general" text="행동교정 전문" />
            </NewStoreBadgeWrap>
          </NewStoreTextWrap>
        </NewStoreItem>
        <NewStoreItem>
          <NewStoreImage/>
          <NewStoreTextWrap>
              <Text typo="body200">몬도서울 위례신도시점</Text>
              <Text typo="body600" color="gray100">
                남위례역 3번 출구 대진건물 3층
              </Text>
              <NewStoreBadgeWrap>
                <Badge type="general" text="행동교정 전문" />
              </NewStoreBadgeWrap>
          </NewStoreTextWrap>
        </NewStoreItem>
      </NewStoreWrapper>
    </HomeContentsWrapper>
  );
}
