import React, { useEffect, useState } from "react";
import { ToastWrapper, CheckIcon } from "./Toast.styles";
import { Check } from "../../assets/svg";
import { Text } from "../texts/Text";

interface ToastProps {
  children: React.ReactNode; // children 타입 명시
  style?: React.CSSProperties; // 추가: 스타일을 외부에서 전달할 수 있게
}

export default function Toast({ children, style }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 2초 후에 토스트를 숨깁니다.
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
    return () => clearTimeout(timer);
  }, []);

  // 토스트가 사라지면 null을 반환하여 더 이상 렌더링되지 않도록 처리
  if (!isVisible) return null;

  return (
    <ToastWrapper style={style}>
      {" "}
      {/* style props을 ToastWrapper에 전달 */}
      <CheckIcon>
        <Check width="20px" height="20px" />
      </CheckIcon>
      <Text typo="body400" color="white">
        {children}
      </Text>
    </ToastWrapper>
  );
}
