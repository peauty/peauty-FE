import {
  FaThumbsUp,
  FaCheckCircle,
  FaSmile,
  FaHandshake,
} from "react-icons/fa"; // 예시 아이콘
import { SelectTagWrapper, TagWrapper } from "../index.styles";
import { Text } from "../../../../../components";

const dummyTag = [
  { id: 1, icon: <FaThumbsUp />, text: "서비스가 좋아요" },
  { id: 2, icon: <FaCheckCircle />, text: "견적서대로 해줘요" },
  { id: 3, icon: <FaSmile />, text: "다음에 또 오고싶어요" },
  { id: 4, icon: <FaHandshake />, text: "친절해요" },
];

export default function TagList() {
  return (
    <SelectTagWrapper>
      {dummyTag.map((item) => (
        <TagWrapper
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <div>{item.icon}</div>
          <Text typo="body500" color="gray200">
            {item.text}
          </Text>
        </TagWrapper>
      ))}
    </SelectTagWrapper>
  );
}
