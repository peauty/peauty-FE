import { useState, useEffect } from "react";
import { SelectTagWrapper, TagWrapper } from "../index.styles";
import { Text } from "../../../../../components";
import SvgHeartTag from "../../../../../assets/svg/HeartTag";
import SvgQuoteTag from "../../../../../assets/svg/QuoteTag";
import SvgPinTag from "../../../../../assets/svg/PinTag";
import SvgTeddyTag from "../../../../../assets/svg/TeddyTag";
import SvgMoneyTag from "../../../../../assets/svg/MoneyTag";

const dummyTag = [
  {
    id: 1,
    icon: <SvgHeartTag />,
    text: "서비스가 좋아요",
    value: "GOOD_SERVICE",
  },
  {
    id: 2,
    icon: <SvgQuoteTag />,
    text: "견적서대로 해줘요",
    value: "MYPICK",
  },
  {
    id: 3,
    icon: <SvgPinTag />,
    text: "다음에 또 오고 싶어요",
    value: "COME_AGAIN",
  },
  { id: 4, icon: <SvgTeddyTag />, text: "친절해요", value: "KIND" },
  {
    id: 5,
    icon: <SvgMoneyTag />,
    text: "가성비 좋아요",
    value: "GOOD_COST",
  },
];

interface TagListProps {
  onTagChange?: (selectedTags: string[]) => void;
  value?: string[];
}

export default function TagList({ onTagChange, value = [] }: TagListProps) {
  const [selectedTagIds, setSelectedTagIds] = useState<number[]>([]);

  useEffect(() => {
    const initialSelectedTagIds = dummyTag
      .filter((tag) => value.includes(tag.value)) // 영어 value로 비교
      .map((tag) => tag.id);

    setSelectedTagIds(initialSelectedTagIds);
  }, [value]);

  const handleTagClick = (id: number) => {
    setSelectedTagIds((prevSelectedTagIds) => {
      const updatedTagIds = prevSelectedTagIds.includes(id)
        ? prevSelectedTagIds.filter((tagId) => tagId !== id)
        : [...prevSelectedTagIds, id];

      if (onTagChange) {
        const selectedValues = updatedTagIds.map(
          (tagId) => dummyTag.find((tag) => tag.id === tagId)?.value || "",
        );
        onTagChange(selectedValues); // 영어 값만 반환
      }

      return updatedTagIds;
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
          {item.icon}
          <Text
            typo="body600"
            color={selectedTagIds.includes(item.id) ? "blue100" : "gray200"}
          >
            {item.text}
          </Text>
        </TagWrapper>
      ))}
    </SelectTagWrapper>
  );
}
