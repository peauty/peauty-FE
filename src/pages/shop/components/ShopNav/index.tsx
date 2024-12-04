import React from "react";
import styled from "styled-components";
import { NavWrapper, NavItem } from "./index.styles";

// "detail", "review", "badge"와 같은 섹션 타입 정의
type Section = "detail" | "review" | "badge";

interface ShopNavProps {
  activeSection: Section; // 활성화된 섹션 ID
  onNavigate: (id: Section) => void; // 네비게이션 핸들러의 타입을 Section으로 수정
}

export default function ShopNav({ activeSection, onNavigate }: ShopNavProps) {
  const navItems: { id: Section; label: string }[] = [
    { id: "detail", label: "홈" },
    { id: "review", label: "리뷰" },
    { id: "badge", label: "뱃지" },
  ];

  return (
    <NavWrapper>
      {navItems.map((item) => (
        <NavItem
          key={item.id}
          active={activeSection === item.id}
          onClick={() => onNavigate(item.id)}
        >
          {item.label}
        </NavItem>
      ))}
    </NavWrapper>
  );
}
