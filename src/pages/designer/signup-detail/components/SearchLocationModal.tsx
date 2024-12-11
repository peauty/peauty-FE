import CustomModal from "../../../../components/modal/CustomModal";
import DaumPostcode from "react-daum-postcode";

interface SearchLocationModalProps {
  onClose: () => void;
  onLocationSelect: (location: string) => void; // 부모 컴포넌트로 주소를 전달할 콜백
}

export default function SearchLocationModal({
  onClose,
  onLocationSelect,
}: SearchLocationModalProps) {
  const handleAddressChange = (data: { address: string }) => {
    if (data && data.address) {
      console.log(data.address);
      onLocationSelect(data.address); // 선택된 주소를 부모 컴포넌트로 전달
      onClose();
    } else {
      alert("주소를 다시 검색해주세요.");
    }
  };

  return (
    <CustomModal onClose={onClose}>
      <DaumPostcode onComplete={handleAddressChange} />
    </CustomModal>
  );
}
