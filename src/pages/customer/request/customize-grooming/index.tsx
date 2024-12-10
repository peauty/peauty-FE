import { useState } from "react";
import { AppBar, DropButton, Text } from "../../../../components";
import { RadioSelectButton } from "../../../../components/button/RadioSelectButton";
import { RadioSelectButtonProps } from "../../../../components/button/RadioSelectButton/RadioSelectButton";
import {
  GroomingBodyType,
  GroomingType,
} from "../../../../components/button/RadioSelectButton/RadioSelectButton.stories";
import { ContentWrapper, SectionWrapper } from "./index.styles";

export default function CustomizeGrooming() {
  const handleSelectGroomingType = (selectedGroomingType: number) => {
    console.log("Selected GroomingType:", selectedGroomingType);
  };
  const handleSelectGroomingBodyType = (selectedGroomingBodyType: number) => {
    console.log("Selected GroomingBodyType:", selectedGroomingBodyType);
  };

  const [selectedFaceStyle, setSelectedFaceStyle] = useState<string>("");
  const [selectedLength, setSelectedLength] = useState<string>("");

  const dummyFaceStyle = [
    "곰돌이컷",
    "스포츠컷",
    "팬시컷",
    "스포티컷",
    "전체 밀기",
  ];
  const dummyLength = ["3mm", "6mm", "9mm"];
  const handleFaceStyleSelect = (value: string) => {
    setSelectedFaceStyle(value);
    console.log("Selected FaceStyle:", selectedFaceStyle);
  };
  const handleLengthSelect = (value: string) => {
    setSelectedLength(value);
    console.log("Selected Length:", selectedLength);
  };

  return (
    <>
      <AppBar prefix="backButton" />
      <div
        style={{ display: "flex", flexDirection: "column", padding: "30px 0",}}
      >
        <Text typo="subtitle100">
          <Text typo="subtitle100" color="blue100">
            꼬미
          </Text>
          의 구체적인 미용 시술정보와
          <br />
          원하는 사항을 알려주세요!
        </Text>

        <ContentWrapper>
          <SectionWrapper>
            <Text typo="subtitle300" color="gray100">
              미용 종류
            </Text>
            <RadioSelectButton
              {...(GroomingType.args as RadioSelectButtonProps)}
              selectedIndex={0}
              onSelect={handleSelectGroomingType}
            />
          </SectionWrapper>

          <SectionWrapper>
            <DropButton
              label="얼굴"
              placeholder="스타일을 선택해주세요"
              options={dummyFaceStyle}
              onSelect={handleFaceStyleSelect}
            />
          </SectionWrapper>

          <SectionWrapper>
            <Text typo="subtitle300" color="gray100">
              몸
            </Text>
            <RadioSelectButton
              {...(GroomingBodyType.args as RadioSelectButtonProps)}
              selectedIndex={0}
              onSelect={handleSelectGroomingBodyType}
            />
            <DropButton
              label=""
              placeholder="mm를 선택해주세요"
              options={dummyLength}
              onSelect={handleLengthSelect}
            />
          </SectionWrapper>
        </ContentWrapper>
      </div>
    </>
  );
}
