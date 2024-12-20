import { IoIosFemale, IoIosMale } from "react-icons/io";
import { FemaleIcon, MaleIcon } from "../../../../../assets/svg";

interface GenderProps {
  gender: string;
}

export default function Gender({ gender }: GenderProps) {
  if (gender == "M") {
    return <MaleIcon width={15} fill="#6D82FF" />;
  } else {
    return <FemaleIcon width={15} fill="#F56570" />;
  }
}
