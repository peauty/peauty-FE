import { Text } from "../../../../../components";
import { colors } from "../../../../../style/color";
import { HomeContentsWrapper } from "../../index.styles";
import {
  UtilWrapper,
  UtilImage,
  TextWrapper,
} from "./index.styles";
import { ScissorsIcon, Medal } from "../../../../../assets/svg";

export default function Utilization() {
  return (
    <HomeContentsWrapper>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Text typo="subtitle300">
          퓨티{" "}
          <Text typo="subtitle200" color="blue100">
            200%{" "}
          </Text>
          활용하기
        </Text>
        <Text typo="body600">다양한 퓨티 신뢰제도를 만나보세요!</Text>
      </div>
      <UtilWrapper>
        <UtilImage color={`${colors.green200}`}>
          <TextWrapper>
            <Text typo="body300">
              퓨티 시저등급에 {"\n"}따른 신뢰성 받는 방법
            </Text>
          </TextWrapper>
          <ScissorsIcon width={40} />
        </UtilImage>
        <UtilImage color={`${colors.blue300}`}>
          <TextWrapper>
            <Text typo="body300">
              뱃지등급은 {"\n"}
              어떻게 활용해야하나요?
            </Text>
          </TextWrapper>
          <Medal width={35} />
        </UtilImage>
      </UtilWrapper>
    </HomeContentsWrapper>
  );
}
