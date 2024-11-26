import { Layout } from "../../../../components";
import { HighlightedText } from "../../../../components/global/texts/HighlightedText/HighlightedText.styles";
import { Text } from "../../../../components/global/texts/Text/Text";

export default function Edit() {
  return (
    <>
      <Layout>
        <Text typo="subtitle300" color="blue100">
          이름
        </Text>
        <Text typo="subtitle300">견종</Text>
        <Text typo="subtitle300">성별</Text>
        <Text typo="subtitle300">나이</Text>
        <Text typo="subtitle300">몸무게</Text>
        <Text typo="subtitle300">생년월일</Text>
        <Text typo="subtitle300">
          질병 이력 <Text typo="body400">(중복 선택도 가능해요)</Text>
        </Text>
        <Text typo="subtitle300">기타</Text>
        <Text typo="subtitle300">참고</Text>

        <HighlightedText>ddd</HighlightedText>
      </Layout>
    </>
  );
}
