import { useState } from "react";
import { AddImage } from "../../../../assets/svg";
import { CustomButton, Text } from "../../../../components";
import { Style } from "../index.styles";

interface CoverPhotoUploadSectionProps {
  onChange: (url: string) => void;
}

export default function CoverPhotoUploadSection({
  onChange,
}: CoverPhotoUploadSectionProps) {
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleImageUpload = async () => {
    const uploadedUrl = ""; // 예시 URL
    setImageUrl(uploadedUrl);
    onChange(uploadedUrl); // 상위 컴포넌트에 이미지 URL 전달
  };

  return (
    <Style.SectionWrapper>
      <Style.TitleWrapper>
        <Text typo="subtitle300">대표 사진</Text>
        <Text color="gray100" typo="body500">
          이미지 등록은 최대 3장까지 가능해요
        </Text>

        <Style.AddWrapper>
          <CustomButton variant="secondary" onClick={handleImageUpload}>
            <AddImage width={15} />
          </CustomButton>
        </Style.AddWrapper>
      </Style.TitleWrapper>
    </Style.SectionWrapper>
  );
}
