import { useState } from "react";
import { AddImage } from "../../../assets/svg";
import {
  AppBar,
  CustomButton,
  CustomInput,
  GNB,
  Text,
} from "../../../components";
import { TitleContentInput } from "../../../components/input/TitleContentInput";
import { CertificateInputSection } from "./components/CertificateInputSection";
import { ShopInfoInputSection } from "./components/ShopInfoInputSection";
import { Style } from "./index.styles";

export default function DesignerSignUpDetail() {
  const [inputValues, setInputValues] = useState<string[][]>([[], []]); // 각 TitleContentInput의 입력값을 관리

  const handleInputChange = (
    index: number,
    subIndex: number,
    value: string,
  ) => {
    const updatedValues = [...inputValues];
    if (!updatedValues[index]) updatedValues[index] = [];
    updatedValues[index][subIndex] = value;
    setInputValues(updatedValues);
  };

  const handleSubmit = () => {
    console.log(inputValues); // 전체 입력값을 콘솔에 출력
  };

  return (
    <>
      <AppBar prefix="backButton" title="추가 정보 등록" />

      <Style.RegisterPageWrapper>
        <Style.SectionWrapper>
          <Style.TitleWrapper>
            <Text typo="subtitle300">대표 사진</Text>
            <Text color="gray100" typo="body500">
              이미지 등록은 최대 3장까지 가능해요
            </Text>

            <Style.AddWrapper>
              <CustomButton variant="secondary">
                <AddImage width={15} />
              </CustomButton>
            </Style.AddWrapper>
          </Style.TitleWrapper>
        </Style.SectionWrapper>

        <Style.SectionWrapper>
          <TitleContentInput
            title="공지사항"
            description="매장 운영과 관련된 특이 사항이 있으시면 등록해 주세요"
            inputPlaceholders={["제목을 입력해주세요", "내용을 입력해주세요"]}
            onChange={(index, value) => handleInputChange(0, index, value)} // 첫 번째 TitleContentInput의 값 변경 처리
          />
          <TitleContentInput
            title="이벤트"
            description="현재 진행 중인 이벤트가 있다면 등록해 주세요"
            inputPlaceholders={["제목을 입력해주세요", "내용을 입력해주세요"]}
            onChange={(index, value) => handleInputChange(1, index, value)} // 두 번째 TitleContentInput의 값 변경 처리
          />
        </Style.SectionWrapper>

        <Style.SectionWrapper>
          <ShopInfoInputSection />
        </Style.SectionWrapper>

        <Style.SectionWrapper>
          <Style.TitleWrapper>
            <Text typo="subtitle300">경력</Text>
            <Text color="gray100" typo="body500">
              경력을 등록하면 고객에게 전문성을 어필할 수 있어요
            </Text>
          </Style.TitleWrapper>
          <Style.RowWrapper>
            <CustomInput placeholder="예) 22" extraText="년" />
          </Style.RowWrapper>
        </Style.SectionWrapper>

        <Style.SectionWrapper>
          <CertificateInputSection />
        </Style.SectionWrapper>
      </Style.RegisterPageWrapper>

      <GNB buttonText="확인" onLargeButtonClick={handleSubmit} />
    </>
  );
}
