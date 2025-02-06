import React from "react";
import { Text } from "../../../../../components";
import CustomModal from "../../../../../components/modal/CustomModal";
import {
  BoxWrapper,
  InnerBox,
  BadgeContetsWrapper,
  BadgeExplainBox,
  BadgeModalWrapper,
  CancelWrapper,
  InterContentStyled,
} from "./index.styles";

interface BadgeModalProps {
  badge: {
    badgeId?: number;
    badgeName?: string;
    badgeContent?: string;
    badgeColor?: string;
    badgeType?: string;
    badgeImageUrl?: string; // React.ReactElement 대신 string으로 수정
  };
  onClose: () => void; // 모달 닫기 함수
  iconSize?: number; // 아이콘 크기
}

export default function BadgeModal({
  badge,
  onClose,
  iconSize = 60,
}: BadgeModalProps) {
  return (
    <CustomModal onClose={onClose}>
      <BadgeModalWrapper>
        <CancelWrapper onClick={onClose}>×</CancelWrapper>
        <BadgeContetsWrapper>
          <InterContentStyled>
            <BoxWrapper>
              <InnerBox>
                {/* 이미지 URL을 직접 사용 */}
                <img
                  src={badge.badgeImageUrl}
                  alt={badge.badgeName}
                  width={iconSize}
                  height={iconSize}
                />
              </InnerBox>
            </BoxWrapper>
          </InterContentStyled>
          <InterContentStyled>
            <Text typo="body100">{badge.badgeName}</Text>
          </InterContentStyled>
          <BadgeExplainBox>
            <Text typo="body400" color="gray100">
              {badge.badgeContent}
            </Text>
          </BadgeExplainBox>
        </BadgeContetsWrapper>
      </BadgeModalWrapper>
    </CustomModal>
  );
}
