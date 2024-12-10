import { useState } from "react";
import { AddImage } from "../../../../assets/svg";
import { CustomButton, Text } from "../../../../components";
import { Style } from "../index.styles";
import { uploadImage } from "../../../../apis/designer/resources/internal";

interface CoverPhotoUploadSectionProps {
  onChange: (url: string[]) => void; // 여러 이미지 URL을 전달하도록 수정
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
        onChange(updatedImageUrls); // 상위 컴포넌트에 전체 이미지 URL 목록 전달
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

  const handleImageDelete = (url: string) => {
    const updatedImageUrls = imageUrls.filter((imageUrl) => imageUrl !== url);
    setImageUrls(updatedImageUrls);
    onChange(updatedImageUrls); // 상위 컴포넌트에 삭제된 목록 전달
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
            <Style.AddWrapper key={index} style={{ position: "relative" }}>
              <Style.ImageUnit src={url} alt={`Uploaded image ${index + 1}`} />
              {/* 삭제 버튼 */}
              <Style.DeleteButton onClick={() => handleImageDelete(url)}>
                &minus;
              </Style.DeleteButton>
            </Style.AddWrapper>
          ))}
        </Style.ImageContainer>
      </Style.TitleWrapper>
    </Style.SectionWrapper>
  );
}
