import { useState, useEffect, useRef } from "react";
import {
  AppBar,
  CustomInput,
  DropButton,
  GNB,
  MultiSelectButton,
  Text,
} from "../../../../components";
import { Style } from "./index.styles";
import { RadioSelectButton } from "../../../../components/button/RadioSelectButton";
import DatePicker from "./components/DatePicker";
import { RadioSelectButtonProps } from "../../../../components/button/RadioSelectButton/RadioSelectButton";
import {
  Default,
  Gender,
} from "../../../../components/button/RadioSelectButton/RadioSelectButton.stories";
import ProfileImg from "../../../../components/profile-img/ProfileImg";
import {
  getPuppyDetail,
  updatePuppyDetail,
} from "../../../../apis/customer/resources/puppy";
import { useNavigate, useParams } from "react-router-dom";
import { useUserDetails } from "../../../../hooks/useUserDetails";
import {
  GetPuppyDetailResponse,
  UpdatePuppyDetailRequest,
} from "../../../../types/customer/puppy";
import { uploadImage } from "../../../../apis/customer/resources/internal";
import { ROUTE } from "../../../../constants/routes";
import { breedMap, diseaseMap } from "../../../../constants/puppy";

export default function PetEdit() {
  const { userId } = useUserDetails();
  const { puppyId } = useParams(); // URL에서 puppyId 가져오기

  // 상태 선언
  const [puppyData, setPuppyData] = useState<GetPuppyDetailResponse | null>(
    null,
  );
  const [puppyName, setPuppyName] = useState<string>("");
  const [puppyWeight, setPuppyWeight] = useState<number>(0);
  const [puppyDetail, setPuppyDetail] = useState<string>("");
  const [diseaseDescription, setDiseaseDescription] = useState<string>("");

  const [selectedProfileImage, setSelectedProfileImage] = useState<string>("");
  const [selectedBreed, setSelectedBreed] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<number>(0); // 성별 선택 상태
  const [selectedSize, setSelectedSize] = useState<number>(0); // 분류 선택 상태
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedDiseases, setSelectedDiseases] = useState<number[]>([]);
  const [uploadLoading, setUploadLoading] = useState(false);
  const dieseases = Object.keys(diseaseMap);
  const dogBreeds = Object.keys(breedMap);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

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

  const yearOptions = generateYearOptions(1994, 31);
  const monthOptions = generateMonthOptions();
  const dayOptions =
    selectedYear !== null && selectedMonth !== null
      ? getDaysInMonth(selectedYear, selectedMonth)
      : [];

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !userId) return;

    try {
      setUploadLoading(true);
      const response = await uploadImage(file);
      if (response.uploadedImageUrl) {
        setSelectedProfileImage(response.uploadedImageUrl);
      }
    } catch (error) {
      console.error("Failed to upload image:", error);
    } finally {
      setUploadLoading(false);
    }
  };

  const [isloading, setIsloading] = useState(false);
  // 필수 입력값이 모두 채워졌는지 체크하는 함수
  const isFormValid =
    puppyName !== "" &&
    selectedBreed !== "" &&
    selectedGender !== null &&
    selectedSize !== null &&
    puppyWeight > 0 &&
    selectedYear !== null &&
    selectedMonth !== null &&
    selectedDay !== null &&
    selectedDiseases.length > 0;

  // API 호출 후 강아지 정보 로드
  useEffect(() => {
    const fetchPuppyDetail = async () => {
      if (!userId || !puppyId) return;
      try {
        setIsloading(true);
        const data = await getPuppyDetail(userId, Number(puppyId)); // API 호출

        setPuppyData(data);
        setPuppyName(data.name || "");
        setPuppyWeight(data.weight || 0);
        setPuppyDetail(data.detail || "");
        setDiseaseDescription(data.diseaseDescription || "");

        setSelectedDiseases(
          dieseases
            .map((_, index) => index)
            .filter((index) => (data.disease || []).includes(dieseases[index])),
        );

        setSelectedProfileImage(
          data.profileImageUrl || "/svg/default-profile.svg",
        );
        setSelectedBreed(data.breed || ""); // 강아지 견종 설정
        setSelectedGender(data.sex === "male" ? 0 : 1); // 성별 설정 (남성: 0, 여성: 1)
        setSelectedSize(data.puppySize === "small" ? 0 : 1); // 분류 설정 (작은 강아지: 0, 큰 강아지: 1)
        setSelectedYear(new Date(data.birthdate || "").getFullYear());
        setSelectedMonth(new Date(data.birthdate || "").getMonth() + 1); // 월은 0부터 시작하므로 1을 더함
        setSelectedDay(new Date(data.birthdate || "").getDate());
        setIsloading(false);
      } catch (error) {
        console.error("Failed to fetch puppy detail:", error);
      }
    };

    fetchPuppyDetail();
  }, [userId, puppyId]); // userId나 puppyId가 변경될 때마다 데이터 로드

  // 선택된 값 처리
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPuppyName(e.target.value);
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPuppyWeight(Number(e.target.value));
  };

  const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPuppyDetail(e.target.value);
  };

  const handleDiseaseSelect = (selectedIndexes: number[]) => {
    setSelectedDiseases(selectedIndexes);
  };

  const handleDiseaseDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDiseaseDescription(e.target.value);
  };

  const handleSubmit = async () => {
    if (!userId || !puppyId) return;
    try {
      const birthdate =
        selectedYear && selectedMonth && selectedDay
          ? `${selectedYear}-${String(selectedMonth).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`
          : undefined;

      const requestBody: UpdatePuppyDetailRequest = {
        name: puppyName,
        breed: breedMap[selectedBreed],
        weight: puppyWeight,
        sex: selectedGender === 0 ? "M" : "F",
        puppySize: selectedSize === 0 ? "SMALL" : "LARGE",
        birthdate,
        detail: puppyDetail,
        disease:
          selectedDiseases?.map((disease) => diseaseMap[dieseases[disease]]) ||
          [],
        diseaseDescription: diseaseDescription,
        profileImageUrl: selectedProfileImage,
      };

      await updatePuppyDetail(userId, Number(puppyId), requestBody);
      navigate(ROUTE.customer.pets.detail(puppyId), {
        state: { toastMessage: "반려견 수정이 완료됐어요" }, // 성공 메시지 전달
      }); // 수정 완료 후 이동
    } catch (error) {
      console.error("Failed to update puppy detail:", error);
    }
  };

  return (
    <>
      <AppBar prefix="backButton" title="반려견 정보 수정" />

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleImageChange}
      />
      <ProfileImg
        width="120px"
        height="120px"
        src={selectedProfileImage}
        alt="프로필"
        onClick={() => fileInputRef.current?.click()}
      />

      <Style.EditPageWrapper>
        <Style.Wrapper>
          <CustomInput
            label="이름"
            placeholder="이름을 입력해주세요"
            value={puppyName}
            onChange={handleNameChange}
          />
        </Style.Wrapper>

        <DropButton
          label="견종"
          placeholder="견종을 선택해주세요"
          options={dogBreeds}
          onSelect={setSelectedBreed}
          selected={selectedBreed}
        />

        <Style.SelectWrapper>
          <Text typo="subtitle300">성별</Text>
          <RadioSelectButton
            {...(Gender.args as RadioSelectButtonProps)}
            selectedIndex={selectedGender}
            onSelect={setSelectedGender}
          />
        </Style.SelectWrapper>

        <Style.SelectWrapper>
          <Text typo="subtitle300">분류</Text>
          <RadioSelectButton
            {...(Default.args as RadioSelectButtonProps)}
            selectedIndex={selectedSize}
            onSelect={setSelectedSize}
          />
        </Style.SelectWrapper>

        <Style.Wrapper>
          <CustomInput
            label="몸무게"
            placeholder="예) 22"
            extraText="kg"
            value={String(puppyWeight)}
            onChange={handleWeightChange}
          />
        </Style.Wrapper>

        <DatePicker
          yearOptions={yearOptions.map((year) => year.toString())}
          monthOptions={monthOptions.map((month) => month.toString())}
          dayOptions={dayOptions.map((day) => day.toString())}
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
          selectedDay={selectedDay}
          onYearSelect={setSelectedYear}
          onMonthSelect={setSelectedMonth}
          onDaySelect={setSelectedDay}
        />

        <Style.SelectWrapper>
          <Text typo="subtitle300">
            질병 이력 <Text typo="body400">(중복 선택도 가능해요)</Text>
          </Text>
          <MultiSelectButton
            row={3}
            col={4}
            selectedIndexes={selectedDiseases}
            buttonNames={dieseases}
            onSelect={handleDiseaseSelect}
          />
        </Style.SelectWrapper>

        <CustomInput
          label="기타"
          placeholder="기타 건강상태를 알려주세요"
          value={puppyDetail}
          onChange={handleDetailChange}
        />

        <CustomInput
          label="참고"
          placeholder="미용 시 참고해야 할 내용이 있다면 알려주세요"
          value={diseaseDescription}
          onChange={handleDiseaseDescriptionChange}
        />
      </Style.EditPageWrapper>

      <GNB
        buttonText="확인"
        onLargeButtonClick={handleSubmit}
        disabled={!isFormValid} // 버튼 비활성화 처리
      />
    </>
  );
}
