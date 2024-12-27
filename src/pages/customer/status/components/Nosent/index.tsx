import { useEffect, useState } from "react";
import { Text } from "../../../../../components/texts/Text";
import { colors } from "../../../../../style/color";
import { NoReceived } from "../../../../../assets/svg";

import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../../constants/routes";
import {
  Button,
  Wrapper,
  ContentsWrapper,
  IconTextWrapper,
  IconWrapper,
} from "./index.styles";

export default function Nosend() {
  const navigate = useNavigate();
  const handleStatus = () => {
    navigate(ROUTE.customer.status);
  };
  return (
    <Wrapper>
      <ContentsWrapper>
        <IconTextWrapper>
          <IconWrapper>
            <NoReceived width={90} />
          </IconWrapper>
          <Text typo="subtitle300">요청한 견적이 없어요</Text>
          <Text typo="body400">견적은 반려견별로 요청할 수 있어요</Text>
        </IconTextWrapper>
        <Button onClick={handleStatus}>견적 요청하기</Button>
      </ContentsWrapper>
    </Wrapper>
  );
}
