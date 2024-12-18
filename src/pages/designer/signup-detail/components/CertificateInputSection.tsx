import { useState, useEffect } from "react";
import { Style } from "../index.styles";
import { CustomButton, Text } from "../../../../components";
import { AddImage } from "../../../../assets/svg";
import { uploadImage } from "../../../../apis/designer/resources/internal";

interface CertificateInputSectionProps {
  onChange: (licenses: string[]) => void;
  initialValues: string[];
}

export default function CertificateInputSection({
  onChange,
  initialValues,
}: CertificateInputSectionProps) {
  const [licenseImages, setLicenseImages] = useState<string[]>(initialValues);

  useEffect(() => {
    if (initialValues && initialValues.length > 0) {
      setLicenseImages(initialValues);
    }
  }, [initialValues]);

  useEffect(() => {
    onChange(licenseImages);
  }, [licenseImages, onChange]);

  const handleImageUpload = async (file: File) => {
    try {
      const response = await uploadImage(file); // Ensure uploadImage is working
      if (response.uploadedImageUrl) {
        const updatedLicenses = [...licenseImages, response.uploadedImageUrl];
        setLicenseImages(updatedLicenses);
        onChange(updatedLicenses);
      }
    } catch (error) {
      console.error("이미지 업로드 실패:", error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    } else {
      console.log("파일이 선택되지 않았습니다.");
  // 실제 파일 업로드 처리 (파일을 받아서 서버로 업로드하는 함수)
  // const handleImageUpload = async (
  //   event: React.ChangeEvent<HTMLInputElement>,
  // ) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     try {
  //       // 서버에 파일 업로드 (업로드된 URL 반환)
  //       const response = await uploadImage(file);
  //       if (response.uploadedImageUrl) {
  //         const updatedLicenses = [...licenseImages, response.uploadedImageUrl];
  //         setLicenseImages(updatedLicenses);
  //         onChange(updatedLicenses); // 부모에게 값 전달
  //       }
  //     } catch (error) {
  //       console.error("이미지 업로드 실패", error);
  //     }
    }
  };

  const handleImageDelete = (url: string) => {
    const updatedImageUrls = licenseImages.filter(
      (licenseImage) => licenseImage !== url,
    );
    setLicenseImages(updatedImageUrls);
  };

  return (
    <Style.SectionWrapper>
      <Style.TitleWrapper>
        <Text typo="subtitle300">자격증 및 기타서류</Text>
        <Text color="gray100" typo="body500">
          자격증을 등록하면 고객에게 신뢰를 줄 수 있어요
        </Text>
      </Style.TitleWrapper>

      {/* 전체 영역을 클릭할 수 있도록 개선 */}
      <Style.ColumnWrapper>
        <CustomButton variant="outline" size="fullWidth">
          <label
            htmlFor="certificate-upload"
            style={{
              cursor: "pointer",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {/* 클릭 영역을 label로 만들어서 그 안에 텍스트와 아이콘을 넣음 */}
            <Text color="blue100" typo="body500">
              증빙 사진을 업로드 해주세요
            </Text>
            <AddImage width={15} />
          </label>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="certificate-upload"
            onChange={handleFileChange}
          />
        </CustomButton>
      </Style.ColumnWrapper>

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
