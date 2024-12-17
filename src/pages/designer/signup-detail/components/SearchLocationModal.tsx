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
      let updatedAddress = data.address;

      // "서울 "로 시작하는 주소일 경우 "서울특별시 "로 변경
      if (updatedAddress.startsWith("서울 ")) {
        updatedAddress = updatedAddress.replace("서울 ", "서울특별시 ");
      }
      if (updatedAddress.startsWith("경기")) {
        updatedAddress = updatedAddress.replace("경기", "경기도");
      }

      onLocationSelect(updatedAddress); // 선택된 주소를 부모 컴포넌트로 전달
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
