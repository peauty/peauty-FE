import { useNavigate } from "react-router-dom";
import { Arrow } from "../../../assets/svg";
import { CiCirclePlus } from "react-icons/ci";
import { StyledSubMenuButton, Text } from "./SubMenuButton.styles";

export interface SubMenuButtonProps {
  /**
   * 공지사항 텍스트
   */
  text: string;
  /**
   * 이동할 페이지 URL
   */
  to: string;
  /**
   * 버튼에 표시할 아이콘 타입 ('arrow' 또는 'plus')
   */
  iconType?: "arrow" | "plus";
}

export default function SubMenuButton({ text, to, iconType = "arrow" }: SubMenuButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to); // to에 지정된 URL로 이동
  };

  const renderIcon = () => {
    switch (iconType) {
      case "arrow":
        return <Arrow width="15px" height="27px" />;
      case "plus":
        return <CiCirclePlus size="24px" />;
      default:
        return null;
    }
  };

  return (
    <StyledSubMenuButton onClick={handleClick}>
      <Text>{text}</Text>
      {renderIcon()}
    </StyledSubMenuButton>
  );
}