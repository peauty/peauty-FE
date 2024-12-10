import { useState } from "react";
import { AddImage } from "../../../../assets/svg";
import { CustomButton, Text } from "../../../../components";
import { Style } from "../index.styles";
import { uploadImage } from "../../../../apis/designer/resources/internal";

interface CoverPhotoUploadSectionProps {
  onChange: (url: string) => void;
}

export default function CoverPhotoUploadSection({
  onChange,
}: CoverPhotoUploadSectionProps) {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const handleImageUpload = async (file: File) => {
    try {
      const response = await uploadImage(file);
      if (response.uploadedImageUrl) {
        const updatedImageUrls = [...imageUrls, response.uploadedImageUrl];
        setImageUrls(updatedImageUrls);
        onChange(response.uploadedImageUrl); // 상위 컴포넌트에 최신 이미지 URL 전달
      }
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  return (
    <Style.SectionWrapper>
      <Style.TitleWrapper>
        <Text typo="subtitle300">대표 사진</Text>
        <Text color="gray100" typo="body500">
          이미지 등록은 최대 3장까지 가능해요
        </Text>

        <Style.ImageContainer>
          {/* 추가 버튼 */}
          {imageUrls.length < 3 && (
            <Style.AddWrapper>
              <CustomButton variant="secondary">
                <label htmlFor="image-upload" style={{ cursor: "pointer" }}>
                  <AddImage width={15} />
                </label>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </CustomButton>
            </Style.AddWrapper>
          )}
          {/* 업로드된 이미지 */}
          {imageUrls.map((url, index) => (
            <Style.AddWrapper key={index}>
              <Style.ImageUnit src={url} alt={`Uploaded image ${index + 1}`} />
            </Style.AddWrapper>
          ))}
        </Style.ImageContainer>
      </Style.TitleWrapper>
    </Style.SectionWrapper>
  );
}
