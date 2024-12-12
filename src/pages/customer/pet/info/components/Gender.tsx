import { IoIosFemale, IoIosMale } from "react-icons/io";

interface GenderProps {
  gender: string;
}

export default function Gender({ gender }: GenderProps) {
  if (gender == "M") {
    return <IoIosMale width={15} color="blue" />;
  } else {
    return <IoIosFemale width={15} color="red" />;
  }
}
