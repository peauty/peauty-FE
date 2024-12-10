import { useState } from "react";
import { Text } from "../../texts/Text";
import { CustomInput } from "../CustomInput";
import { Style } from "./TitleContentInput.styles";

type TitleContentInputProps = {
  title: string;
  description: string;
  inputPlaceholders: string[];
  onChange: (index: number, value: string) => void; // 값 변경을 부모에게 전달하는 함수
};

export default function TitleContentInput({
  title,
  description,
  inputPlaceholders,
  onChange, // onChange 함수 추가
}: TitleContentInputProps) {
  const [inputValues, setInputValues] = useState<string[]>(
    new Array(inputPlaceholders.length).fill(""),
  );

  const handleChange = (index: number, value: string) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = value;
    setInputValues(updatedValues);
    onChange(index, value); // 부모로 값 전달
  };

  return (
    <Style.Wrapper>
      <Style.InputNoticeWrapper>
        <Text typo="subtitle300">{title}</Text>
        <Text color="gray100" typo="body500">
          {description}
        </Text>
      </Style.InputNoticeWrapper>

      <Style.InputsWrapper>
        {inputPlaceholders.map((placeholder, index) => (
          <CustomInput
            key={index}
            placeholder={placeholder}
            value={inputValues[index]}
            onChange={(e) => handleChange(index, e.target.value)} // onChange 처리
            inputType={index === 1 ? "textarea" : undefined}
          />
        ))}
      </Style.InputsWrapper>
    </Style.Wrapper>
  );
}
