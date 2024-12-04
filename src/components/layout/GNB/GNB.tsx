import React from "react";
import { Nav, ContentWrapper } from "./GNB.styles"; // 추가된 LargeButton 스타일
import { CustomButton } from "../../button/CustomButton";
import { Text } from "../../texts/Text";
import MenuItem, { CustomerMenuKey, StylistMenuKey } from "../MenuItem/MenuItem";

interface GNBProps {
  type?: "customer" | "designer"; // GNB 타입 (회원/미용사)
  onLargeButtonClick?: () => void; // 큰 버튼 클릭 이벤트
  children?: React.ReactNode;
  buttonText?: string;
  disabled?: boolean;
}

const CUSTOMER_MENU_KEYS: CustomerMenuKey[] = ["home", "search", "bookMark", "mypage"];
const STYLIST_MENU_KEYS: StylistMenuKey[] = ["home", "schedule", "propose", "mypage"];

export function GNB({ type, onLargeButtonClick, buttonText, disabled }: GNBProps) {
  return (
    <>
      <Nav>
        {/* GNB 메뉴 */}
        {type && (
          <ContentWrapper>
            {(type === "customer" ? CUSTOMER_MENU_KEYS : STYLIST_MENU_KEYS).map((key) => (
              <MenuItem user={type} ele={key}/>
          ))}
          </ContentWrapper>
        )}

        {/* 큰 버튼 */}
        {!type && (
          <ContentWrapper>
            <CustomButton
              fullwidth
              variant="primary"
              onClick={onLargeButtonClick}
              disabled={disabled}
            >
              <Text typo="body200" color="white">
                {buttonText}
              </Text>
            </CustomButton>
          </ContentWrapper>
        )}
      </Nav>
    </>
  );
}

export default GNB;
