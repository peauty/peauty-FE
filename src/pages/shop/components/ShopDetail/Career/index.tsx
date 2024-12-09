import { Text } from "../../../../../components";
import { CareerIcon } from "../../../../../assets/svg";
import { CareerWrapper, ContentContain } from "./index.styles";
interface CareerProps {
  yearOfExperience: number;
}
export default function Career({ yearOfExperience }: CareerProps) {
  return (
    <CareerWrapper>
      <Text typo="subtitle300">경력</Text>
      <ContentContain>
        <CareerIcon height={14} style={{ marginRight: "5px" }} />
        <Text typo="body400" color="blue100">
          총 경력 {yearOfExperience}년
        </Text>
      </ContentContain>
    </CareerWrapper>
  );
}
