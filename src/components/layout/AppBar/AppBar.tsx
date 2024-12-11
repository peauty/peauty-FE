import { Logo } from "../../../assets/svg";
import { StyledAppBarBack, StyledHeader, Title } from "./AppBar.styles";
import { Text } from "../../texts/Text";
import { useNavigate } from "react-router-dom"; // navigate 함수 사용을 위해 import

interface Props {
  prefix?: "backButton" | "logo";
  title?: string; // 중앙 제목
  onclick?: () => void; // 뒤로가기 버튼 클릭 시 실행할 함수
}

export default function AppBar({ prefix, title, onclick }: Props) {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <StyledHeader>
      {prefix ? (
        prefix === "backButton" ? (
          <StyledAppBarBack
            onClick={onclick || handleBackButtonClick}
            height={20}
          />
        ) : (
          <Logo width="94px" height="24px" onClick={onclick} />
        )
      ) : null}
      {title && (
        <Title>
          <Text typo="subtitle400">{title}</Text>
        </Title>
      )}
    </StyledHeader>
  );
}
