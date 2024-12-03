import { Text } from "../../../../../components";
import Rating from "../../../../../components/rating";
import { colors } from "../../../../../style/color";
export default function ReviewItem() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        whiteSpace: "pre-line",
        gap: "10px",
      }}
    >
      <Text typo="body400" color="gray200">
        2024.11.30
      </Text>
      <div>
        <Text typo="subtitle300">먼지가 먼지</Text>
        <div style={{ display: "flex", gap: "3px" }}>
          <Text typo="body300" color="blue100">
            가위컷+곰돌이
          </Text>
          <Rating score="4.0" />
        </div>
      </div>
      <div
        style={{
          width: "100px",
          aspectRatio: "1/1",
          backgroundColor: `${colors.gray400}`,
          borderRadius: "10px",
        }}
      ></div>
      <div style={{ lineHeight: "1.3" }}>
        <Text typo="body300">
          컨셉사진 보고 바로 견적받아서 애기 미용진행했는데 너무 만족입니다!
          우선 강아지 케어를 정말 잘해주셔서 스트레스 받지 않고 미용한 것에
          대만족인데... 컷까지 최고셔서 여기 단골 될 것 같습니당!!
        </Text>
        <span style={{ marginLeft: "5px", cursor: "pointer" }}>
          <Text typo="body300" color="gray200">
            ... 더보기
          </Text>
        </span>
      </div>
    </div>
  );
}
