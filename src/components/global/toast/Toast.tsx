import React from "react";
import { ToastWrapper, CheckIcon } from "./Toast.styles";
import { Check } from "../../../assets/svg";
import { Text } from "../texts/Text";

interface ToastProps {
  children: React.ReactNode; // children 타입 명시
}

export default function Toast({ children }: ToastProps) {
  return (
    <ToastWrapper>
      <CheckIcon>
        <Check width="20px" height="20px" />
      </CheckIcon>
      <Text typo="body400" color="white">
        {children}
      </Text>
    </ToastWrapper>
  );
}
