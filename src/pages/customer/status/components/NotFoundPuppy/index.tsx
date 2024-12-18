import { Text } from "../../../../../components";
import {
  Button,
  Wrapper,
  ContentsWrapper,
  IconTextWrapper,
  IconWrapper,
} from "./index.styles";
import { Dog2 } from "../../../../../assets/svg";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../../constants/routes";
export default function NotFoundPuppy() {
  const navigate = useNavigate();
  const handlePetRegist = () => {
    navigate(ROUTE.customer.pets.signup);
  };
  return (
    <Wrapper>
      <ContentsWrapper>
        <IconTextWrapper>
          <IconWrapper>
            <Dog2 width={150} />
          </IconWrapper>
          <Text typo="subtitle200"> 등록된 반려견이 없어요</Text>
          <Text typo="body100">반려견을 등록해볼까요?</Text>
        </IconTextWrapper>
        <Button onClick={handlePetRegist}>등록하러가기</Button>
      </ContentsWrapper>
    </Wrapper>
  );
}
