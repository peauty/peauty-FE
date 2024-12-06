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
    icon: React.ReactElement; // 아이콘 컴포넌트
    name: string; // 뱃지 이름
    description: string; // 뱃지 설명
  };
  onClose: () => void; // 모달 닫기 함수
  iconSize?: number; // 아이콘 크기
}

export default function BadgeModal({
  badge,
  onClose,
  iconSize = 60, // 모달에서는 크기 60 고정
}: BadgeModalProps) {
  return (
    <CustomModal onClose={onClose}>
      <BadgeModalWrapper>
        <CancelWrapper onClick={onClose}>×</CancelWrapper>
        <BadgeContetsWrapper>
          <InterContentStyled>
            <BoxWrapper>
              <InnerBox>
                {/* 크기 60으로 아이콘 변경 */}
                {React.cloneElement(badge.icon, { width: iconSize, height: iconSize })}
              </InnerBox>
            </BoxWrapper>
          </InterContentStyled>
          <InterContentStyled>
            <Text typo="body100">{badge.name}</Text>
          </InterContentStyled>
          <BadgeExplainBox>
            <Text typo="body400" color="gray100">{badge.description}</Text>
          </BadgeExplainBox>
        </BadgeContetsWrapper>
      </BadgeModalWrapper>
    </CustomModal>
  );
}
