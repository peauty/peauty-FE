import { useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IconButton, Tooltip } from "./InfoButton.styles";
import { Text } from "../../texts/Text";

interface InfoButtonProps {
  title?: string;
  message: string; // 표시할 정보 메시지
}

function InfoButton({ message, title }: InfoButtonProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        alignContent: "center",
      }}
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
    >
      <IconButton>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <FaRegQuestionCircle style={{ width: "13px" }} />
          <Text typo="body200">{title}</Text>
        </div>
      </IconButton>
      {isTooltipVisible && (
        <Tooltip>
          <Text typo="body700">{message}</Text>
        </Tooltip>
      )}
    </div>
  );
}

export default InfoButton;
