import { SelectTagWrapper, TagWrapper } from "../index.styles";
import { Text } from "../../../../../components";
import { useState } from "react";
import SvgHeartTag from "../../../../../assets/svg/HeartTag";
import SvgQuoteTag from "../../../../../assets/svg/QuoteTag";
import SvgPinTag from "../../../../../assets/svg/PinTag";
import SvgTeddyTag from "../../../../../assets/svg/TeddyTag";
import SvgMoneyTag from "../../../../../assets/svg/MoneyTag";

const dummyTag = [
  { id: 1, icon: <SvgHeartTag />, text: "서비스가 좋아요" },
  { id: 2, icon: <SvgQuoteTag />, text: "견적서대로 해줘요" },
  { id: 3, icon: <SvgPinTag />, text: "다음에 또 오고싶어요" },
  { id: 4, icon: <SvgTeddyTag />, text: "친절해요" },
  { id: 5, icon: <SvgMoneyTag />, text: "가성비 좋아요" },
];

export default function TagList() {
  const [selectedTagIds, setSelectedTagIds] = useState<number[]>([]);

  const handleTagClick = (id: number) => {
    setSelectedTagIds((prevSelectedTagIds) => {
      if (prevSelectedTagIds.includes(id)) {
        return prevSelectedTagIds.filter((tagId) => tagId !== id);
      } else {
        return [...prevSelectedTagIds, id];
      }
    });
  };

  return (
    <SelectTagWrapper>
      {dummyTag.map((item) => (
        <TagWrapper
          key={item.id}
          selected={selectedTagIds.includes(item.id)}
          onClick={() => handleTagClick(item.id)}
        >
          <div>{item.icon}</div>
          <Text
            typo="body500"
            color={selectedTagIds.includes(item.id) ? "blue100" : "gray200"}
          >
            {item.text}
          </Text>
        </TagWrapper>
      ))}
    </SelectTagWrapper>
  );
}
