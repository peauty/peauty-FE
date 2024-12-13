// Tag.tsx
import { TagWrapper } from "./Tag.styles";
import { Text } from "../../texts/Text";

interface TagProps {
  text: string;
}

export default function Tag({ text }: TagProps) {
  return (
    <TagWrapper>
      <Text typo="body300" color={"blue100"}>
        {text}
      </Text>
    </TagWrapper>
  );
}
