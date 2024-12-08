import CustomModal from "../../../../components/modal/CustomModal";
import DaumPostcode from "react-daum-postcode";

interface SearchLocationModalProps {
  onClose: () => void;
}

export default function SearchLocationModal({
  onClose,
}: SearchLocationModalProps) {
  const handleAddressChange = (data: { address: string }) => {
    if (data && data.address) {
      console.log(data.address);

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
