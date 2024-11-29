import { useState } from "react";
import {
  CustomButton,
  CustomInput,
  DropButton,
  Layout,
  MultiSelectButton,
  Wrapper,
} from "../../../../components";
import { MultiSelectButtonProps } from "../../../../components/global/button/MultiSelectButton/MultiSelectButton";
import { Text } from "../../../../components/global/texts/Text";
import { Style } from "./index.styles";
import { RadioSelectButton } from "../../../../components/global/button/RadioSelectButton";
import {
  Default,
  Gender,
} from "../../../../components/global/button/RadioSelectButton/RadioSelectButton.stories";
import { RadioSelectButtonProps } from "../../../../components/global/button/RadioSelectButton/RadioSelectButton";
import ProfileImg from "../../../../components/global/ProfileImg";
import { LargeGrid } from "../../../../components/global/button/MultiSelectButton/MultiSelectButton.stories";
import DatePicker from "../../../../components/page/pet-edit/DatePicker";

export default function Edit() {
  const dogBreeds = ["말티즈", "푸들", "말티푸", "비숑", "시츄"]; // 더미 데이터 (나중에 api로 get 해올 것)
  const [selectedBreed, setSelectedBreed] = useState<string>("");

  const handleBreedSelect = (value: string) => {
    setSelectedBreed(value);
    console.log("Selected Breed:", selectedBreed);
  };

  const handleDiseaseSelect = (selectedDiseaseIndexes: number[]) => {
    console.log("Selected Diseases:", selectedDiseaseIndexes);
  };

  const handleSizeSelect = (selectedSizeIndex: number) => {
    console.log("Selected Size:", selectedSizeIndex);
  };

  const handleGenderSelect = (selectedGenderIndex: number) => {
    console.log("Selected Gender:", selectedGenderIndex);
  };

  const handleEditProfile = () => {
    console.log("이미지 변경");
  };

  const generateYearOptions = (startYear: number, range: number): number[] => {
    return Array.from({ length: range }, (_, i) => startYear + i);
  };

  const generateMonthOptions = (): number[] => {
    return Array.from({ length: 12 }, (_, i) => i + 1);
  };

  const getDaysInMonth = (year: number, month: number): number[] => {
    const daysInMonth = new Date(year, month, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  };

  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const yearOptions = generateYearOptions(1994, 31);
  const monthOptions = generateMonthOptions();
  const dayOptions =
    selectedYear !== null && selectedMonth !== null
      ? getDaysInMonth(selectedYear, selectedMonth)
      : [];

  const handleYearSelect = (year: number) => {
    console.log("Selected Year:", year); // 디버깅용 로그
    setSelectedYear(year);
    setSelectedMonth(null);
    setSelectedDay(null);
  };

  const handleMonthSelect = (month: number) => {
    console.log("Selected Month:", month); // 디버깅용 로그
    setSelectedMonth(month);
    setSelectedDay(null);
  };
  const handleDaySelect = (day: number) => {
    setSelectedDay(day);
  };

  return (
    <>
      <Layout>
        <Wrapper>
          <ProfileImg
            width="120px"
            height="120px"
            src="/svg/default-profile.svg"
            alt="프로필"
            onClick={handleEditProfile}
          />

          <Style.EditPageWrapper>
            <Style.Wrapper>
              <CustomInput
                error=""
                hint=""
                label="이름"
                placeholder="이름을 입력해주세요"
                variant="outlined"
              />
            </Style.Wrapper>

            <DropButton
              label="견종"
              placeholder="견종을 선택해주세요"
              options={dogBreeds}
              onSelect={handleBreedSelect}
            />
            <Text typo="subtitle300">
              성별
              <RadioSelectButton
                {...(Gender.args as RadioSelectButtonProps)}
                selectedIndex={0}
                onSelect={handleGenderSelect}
              />
            </Text>

            <Text typo="subtitle300">
              분류
              <RadioSelectButton
                {...(Default.args as RadioSelectButtonProps)}
                selectedIndex={0}
                onSelect={handleSizeSelect}
              />
            </Text>

            <Style.Wrapper>
              <Style.HalfWrapper>
                <CustomInput
                  error=""
                  hint=""
                  label="나이"
                  placeholder="예) 4"
                  variant="outlined"
                />
                <Text color="gray100" typo="body100">
                  살
                </Text>
              </Style.HalfWrapper>

              <Style.HalfWrapper>
                <CustomInput
                  error=""
                  hint=""
                  label="몸무게"
                  placeholder="예) 22"
                  variant="outlined"
                />
                <Text color="gray100" typo="body100">
                  kg
                </Text>
              </Style.HalfWrapper>
            </Style.Wrapper>

            <DatePicker
              yearOptions={yearOptions.map((year) => year.toString())}
              monthOptions={monthOptions.map((month) => month.toString())}
              dayOptions={dayOptions.map((day) => day.toString())}
              selectedYear={selectedYear}
              selectedMonth={selectedMonth}
              selectedDay={selectedDay}
              onYearSelect={handleYearSelect}
              onMonthSelect={handleMonthSelect}
              onDaySelect={handleDaySelect}
            />

            <Text typo="subtitle300">
              질병 이력 <Text typo="body400">(중복 선택도 가능해요)</Text>
              <MultiSelectButton
                {...(LargeGrid.args as MultiSelectButtonProps)}
                selectedIndexes={[0]}
                onSelect={handleDiseaseSelect}
              />
            </Text>

            <CustomInput
              error=""
              hint=""
              label="기타"
              placeholder="기타 건강상태를 알려주세요"
              variant="outlined"
            />

            <CustomInput
              error=""
              hint=""
              label="참고"
              placeholder="미용 시 참고해야 할 내용이 있다면 알려주세요"
              variant="outlined"
            />
          </Style.EditPageWrapper>
        </Wrapper>
        <Style.ConfirmButtonWrapper>
          <CustomButton fullwidth variant="primary">
            확인
          </CustomButton>
        </Style.ConfirmButtonWrapper>
      </Layout>
    </>
  );
}
