import { useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IconButton, Tooltip, IconContainItem } from "./InfoButton.styles";
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
        display: "flex",
        alignItems: "center",
      }}
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
    >
      <IconButton>
        <IconContainItem>
          <div
            style={{ display: "flex", alignItems: "center", margin: "auto" }}
          >
            <FaRegQuestionCircle style={{ width: "13px" }} />
          </div>
          <Text typo="body300" color="gray100">
            {title}
          </Text>
        </IconContainItem>
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
