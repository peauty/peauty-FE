import { useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IconButton, Tooltip } from "./InfoButton.styles";

interface InfoButtonProps {
  message: string; // 표시할 정보 메시지
}

function InfoButton({ message }: InfoButtonProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleToggleTooltip = () => {
    setIsTooltipVisible((prev) => !prev);
  };

  return (
    <div style={{ position: "relative", display: "inline-block", alignContent: "center"}}>
      <IconButton onClick={handleToggleTooltip}>
        <FaRegQuestionCircle />
      </IconButton>
      {isTooltipVisible && <Tooltip>{message}</Tooltip>}
    </div>
  );
}

export default InfoButton;