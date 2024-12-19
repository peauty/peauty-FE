import { useState, useEffect } from "react";
import { MultiSelectButton } from "../../../../../../components/button/MultiSelectButton";
import { CustomInput } from "../../../../../../components/input/CustomInput";
import { ColumnWrapper, SectionWrapper } from "../../index.styles";
import { Text } from "../../../../../../components/texts/Text";
import { RegisterPuppyRequest } from "../../../../../../types/customer/puppy";
import { diseaseMap } from "../../../../../../constants/puppy";
import { ContentsWrapper } from "../../index.styles";
import { GNB } from "../../../../../../components";
import Modal from "../../../../../../components/modal/Modal/Modal";

interface Step2Props {
  onNext: () => void;
  inputData: RegisterPuppyRequest;
  handleChange: (key: string, value: string) => void;
  handleDiseaseChange: (diseaseValue: string[]) => void;
}

export default function Step2({
  onNext,
  inputData,
  handleChange,
  handleDiseaseChange,
}: Step2Props) {
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [modalMessage, setModalMessage] = useState(""); // Modal message state
  const diseases = Object.keys(diseaseMap);
  const [isNextDisabled, setIsNextDisabled] = useState(true); // Track if "Next" button is disabled

  const handleDiseaseSelect = (indexes: number[]) => {
    setSelectedIndexes(indexes); // Save the selected indexes to the state
    const selectedDiseases = indexes.map(
      (index) => diseaseMap[diseases[index]],
    );
    handleDiseaseChange(selectedDiseases); // Pass the selected diseases to parent
  };

  const handleDiseaseDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    handleChange("diseaseDescription", event.target.value);
  };

  const handleNextClick = () => {
    if (selectedIndexes.length === 0) {
      // Show warning if no disease is selected
      setModalMessage("질병 이력을 선택해주세요.");
      setIsModalOpen(true); // Open the modal
    } else {
      onNext(); // Proceed to the next step if validation passes
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };
  useEffect(() => {
    setIsNextDisabled(selectedIndexes.length === 0);
  }, [selectedIndexes]);

  return (
    <SectionWrapper>
      <ContentsWrapper>
        <Text typo="subtitle100">반려견의 건강상태를 알려주세요</Text>

        <ColumnWrapper style={{ gap: "10px" }}>
          <ColumnWrapper>
            <Text typo="subtitle300">질병 이력</Text>
            <Text typo="body400" color="blue100">
              중복 선택도 가능해요
            </Text>
          </ColumnWrapper>
          <MultiSelectButton
            row={3}
            col={3}
            buttonNames={diseases}
            selectedIndexes={selectedIndexes} // Managed by state
            onSelect={handleDiseaseSelect}
          />
        </ColumnWrapper>

        <CustomInput
          label="기타"
          placeholder="기타 건강상태를 알려주세요"
          fullwidth={true}
          variant="outlined"
          value={inputData.diseaseDescription}
          onChange={handleDiseaseDescriptionChange}
        />
      </ContentsWrapper>

      <GNB
        buttonText="다음"
        onLargeButtonClick={handleNextClick}
        disabled={isNextDisabled}
      />

      {/* Modal for validation warning */}
      {isModalOpen && (
        <Modal
          message={modalMessage}
          buttons={[{ label: "확인", onClick: closeModal }]}
          onClose={closeModal}
        />
      )}
    </SectionWrapper>
  );
}
