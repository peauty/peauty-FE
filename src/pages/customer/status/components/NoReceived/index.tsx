import { useEffect, useState } from "react";
import { Text } from "../../../../../components/texts/Text";
import { colors } from "../../../../../style/color";
import { NoStatus } from "../../../../../assets/svg";

import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../../constants/routes";
import {
  Button,
  Wrapper,
  ContentsWrapper,
  IconTextWrapper,
  IconWrapper,
} from "./index.styles";

export default function NoReceived() {
  const navigate = useNavigate();
  const handleStatus = () => {
    navigate(ROUTE.customer.status);
  };
  return (
    <Wrapper>
        <ContentsWrapper>
    <IconTextWrapper>
      <IconWrapper>
        <NoStatus width={101} />
      </IconWrapper>
      <Text typo="subtitle200">받은 견적이 없어요</Text>
      <Text typo="body100">아직 견적을 요청하지 않으셨다면 요청해보세요</Text>
    </IconTextWrapper>
    <Button onClick={handleStatus}>견적 요청하기</Button>
    </ContentsWrapper>
  </Wrapper>
  
  );
}