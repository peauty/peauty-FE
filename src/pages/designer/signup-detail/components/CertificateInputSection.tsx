import { useState, useEffect } from "react";
import { Style } from "../index.styles";
import { CustomButton, Text } from "../../../../components";
import { AddImage } from "../../../../assets/svg";
import { uploadImage } from "../../../../apis/designer/resources/internal";

interface CertificateInputSectionProps {
  onChange: (licenses: string[]) => void;
  initialValues: string[]; // 초기값을 받는 prop 추가
}

export default function CertificateInputSection({
  onChange,
  initialValues, // initialValues prop 추가
}: CertificateInputSectionProps) {
  const [licenseImages, setLicenseImages] = useState<string[]>(initialValues); // 초기값 설정

  // 초기값이 변경될 때마다 상태를 업데이트하도록 useEffect 추가
  useEffect(() => {
    setLicenseImages(initialValues);
  }, [initialValues]);

  // 실제 파일 업로드 처리 (파일을 받아서 서버로 업로드하는 함수)
  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        // 서버에 파일 업로드 (업로드된 URL 반환)
        const response = await uploadImage(file);
        if (response.uploadedImageUrl) {
          const updatedLicenses = [...licenseImages, response.uploadedImageUrl];
          setLicenseImages(updatedLicenses);
          onChange(updatedLicenses); // 부모에게 값 전달
        }
      } catch (error) {
        console.error("이미지 업로드 실패", error);
      }
    }
  };

  const handleImageDelete = (url: string) => {
    const updatedLicenses = licenseImages.filter(
      (imageUrl) => imageUrl !== url,
    );
    setLicenseImages(updatedLicenses);
    onChange(updatedLicenses); // 부모에게 값 전달
  };

  return (
    <Style.SectionWrapper>
      <Style.TitleWrapper>
        <Text typo="subtitle300">자격증 및 기타서류</Text>
        <Text color="gray100" typo="body500">
          자격증을 등록하면 고객에게 신뢰를 줄 수 있어요
        </Text>
      </Style.TitleWrapper>

      <CustomButton variant="outline">
        <Style.ColumnWrapper>
          <Text color="blue100" typo="body500">
            증빙 사진을 업로드 해주세요
          </Text>
          <AddImage width={15} />
        </Style.ColumnWrapper>
        {/* 파일 선택 input */}
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="certificate-upload"
          onChange={handleImageUpload}
        />
        <label htmlFor="certificate-upload" style={{ cursor: "pointer" }}>
          {/* <Text color="blue100" typo="body500">
            파일 선택
          </Text> */}
        </label>
      </CustomButton>

      {/* 업로드된 이미지 목록 표시 */}
      <Style.ImageList>
        {licenseImages.map((url, index) => (
          <Style.ImageItem key={index}>
            <img src={url} alt={`License ${index + 1}`} />
            <Style.DeleteButton onClick={() => handleImageDelete(url)}>
              &minus;
            </Style.DeleteButton>
          </Style.ImageItem>
        ))}
      </Style.ImageList>
    </Style.SectionWrapper>
  );
}
