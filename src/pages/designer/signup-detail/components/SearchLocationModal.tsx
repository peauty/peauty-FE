import CustomModal from "../../../../components/modal/CustomModal";
import DaumPostcode from "react-daum-postcode";
import { FULL_ADDRESS_MAP } from "../../../../constants/address";
interface SearchLocationModalProps {
  onClose: () => void;
  onLocationSelect: (location: string) => void; // 부모 컴포넌트로 주소를 전달할 콜백
}

export default function SearchLocationModal({
  onClose,
  onLocationSelect,
}: SearchLocationModalProps) {
  const handleAddressChange = (data: { sido: string; address: string }) => {
    let region = FULL_ADDRESS_MAP[data.sido] || data.sido; // 전체 이름으로 변환
    const updatedAddress = `${region} ${data.address.replace(data.sido, "").trim()}`;

    onLocationSelect(updatedAddress);
    onClose();
  };
  return (
    <CustomModal onClose={onClose}>
      <DaumPostcode onComplete={handleAddressChange} />
    </CustomModal>
  );
}
