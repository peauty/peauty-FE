import React from "react";
import styled from "styled-components";
import { NavWrapper, NavItem } from "./index.styles";
interface ShopNavProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export default function ShopNav({ activeSection, onNavigate }: ShopNavProps) {
  const navItems = [
    { id: "detail", label: "홈" },
    { id: "review", label: "리뷰" },
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
