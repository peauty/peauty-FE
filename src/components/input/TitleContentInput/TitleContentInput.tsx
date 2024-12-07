import { Text } from "../../texts/Text";
import { CustomInput } from "../CustomInput";
import { Style } from "./TitleContentInput.styles";

type TitleContentInputProps = {
  title: string;
  description: string;
  inputPlaceholders: string[];
};

export default function TitleContentInput({
  title,
  description,
  inputPlaceholders,
}: TitleContentInputProps) {
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
            inputType={index === 1 ? "textarea" : undefined}
          />
        ))}
      </Style.InputsWrapper>
    </Style.Wrapper>
  );
}
