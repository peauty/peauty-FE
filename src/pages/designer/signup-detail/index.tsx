import { AddImage } from "../../../assets/svg";
import {
  AppBar,
  CustomButton,
  CustomInput,
  GNB,
  Text,
} from "../../../components";
import { LocationButton } from "../../../components/button/LocationButton";
import { RadioSelectButton } from "../../../components/button/RadioSelectButton";
import { RadioSelectButtonProps } from "../../../components/button/RadioSelectButton/RadioSelectButton";
import { Payment } from "../../../components/button/RadioSelectButton/RadioSelectButton.stories";
import { Style } from "./index.styles";

export default function DesignerSignUpDetail() {
  const handleHowToPaySelect = (selectedPayIndex: number) => {
    console.log("Selected Payment:", selectedPayIndex);
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
          <Style.TitleWrapper>
            <Text typo="subtitle300">공지사항</Text>
            <Text color="gray100" typo="body500">
              매장 운영과 관련된 특이 사항이 있으시면 등록해 주세요
            </Text>
          </Style.TitleWrapper>

          <CustomInput placeholder="제목을 입력해주세요" />
          <CustomInput placeholder="내용을 입력해주세요" inputType="textarea" />
        </Style.SectionWrapper>
        <Style.SectionWrapper>
          <Style.TitleWrapper>
            <Text typo="subtitle300">이벤트</Text>

            <Text color="gray100" typo="body500">
              현재 진행 중인 이벤트가 있다면 등록해 주세요
            </Text>
          </Style.TitleWrapper>

          <CustomInput placeholder="제목을 입력해주세요" />
          <CustomInput placeholder="내용을 입력해주세요" inputType="textarea" />
        </Style.SectionWrapper>

        <Style.SectionWrapper>
          <Style.TitleWrapper>
            <Text typo="subtitle300"> 매장 정보 </Text>
            <Text color="gray100" typo="body500">
              고객님들이 쉽게 찾아갈 수 있도록 매장 정보를 정확하게 등록해
              주세요
            </Text>
          </Style.TitleWrapper>

          <CustomInput
            error=""
            hint=""
            label="매장 이름"
            placeholder="매장 이름을 입력해주세요"
            variant="outlined"
          />

          <LocationButton />

          <CustomInput
            error=""
            hint=""
            label="영업 시간"
            placeholder="영업 시간을 입력해주세요"
            variant="outlined"
          />

          <CustomInput
            error=""
            hint=""
            label="대표 전화번호"
            placeholder="대표 전화번호를 입력해주세요"
            variant="outlined"
          />

          <Style.RadioWrapper>
            <Text typo="subtitle300" color="gray100">
              결제 방식
            </Text>

            <RadioSelectButton
              {...(Payment.args as RadioSelectButtonProps)}
              selectedIndex={0}
              onSelect={handleHowToPaySelect}
            />
          </Style.RadioWrapper>
        </Style.SectionWrapper>

        <Style.SectionWrapper>
          <Style.TitleWrapper>
            <Text typo="subtitle300">경력</Text>
            <Text color="gray100" typo="body500">
              경력을 등록하면 고객에게 전문성을 어필할 수 있어요
            </Text>
          </Style.TitleWrapper>
          <Style.RowWrapper>
            <CustomInput
              error=""
              hint=""
              label=""
              placeholder="예) 22"
              variant="outlined"
            />
            <Text color="gray100" typo="body100">
              년
            </Text>
          </Style.RowWrapper>
        </Style.SectionWrapper>

        <Style.SectionWrapper>
          <Style.TitleWrapper>
            <Text typo="subtitle300">자격증 및 기타서류</Text>
            <Text color="gray100" typo="body500">
              자격증을 등록하면 고객에게 신뢰를 줄 수 있어요
            </Text>
          </Style.TitleWrapper>
          <CustomButton variant="outline">
            <Style.ColumnWrapper>
              <Text color="blue100" typo="body500">
                증빙 사진을 업로드 해주세요
              </Text>
              <AddImage width={15} />
            </Style.ColumnWrapper>
          </CustomButton>
        </Style.SectionWrapper>
      </Style.RegisterPageWrapper>
      <GNB buttonText="확인" />
    </>
  );
}
