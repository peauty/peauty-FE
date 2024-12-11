import { useState } from "react";
import { Style } from "../index.styles";
import { CustomButton, Text } from "../../../../components";
import { AddImage } from "../../../../assets/svg";

interface CertificateInputSectionProps {
  onChange: (licenses: string[]) => void;
}

export default function CertificateInputSection({
  onChange,
}: CertificateInputSectionProps) {
  const [licenseImages, setLicenseImages] = useState<string[]>([]);

  const handleImageUpload = async () => {
    const uploadedUrl = "/logo.svg";
    const updatedLicenses = [...licenseImages, uploadedUrl];
    setLicenseImages(updatedLicenses);
    onChange(updatedLicenses);
  };

  return (
    <Style.SectionWrapper>
      <Style.TitleWrapper>
        <Text typo="subtitle300">자격증 및 기타서류</Text>
        <Text color="gray100" typo="body500">
          자격증을 등록하면 고객에게 신뢰를 줄 수 있어요
        </Text>
      </Style.TitleWrapper>

      <CustomButton variant="outline" onClick={handleImageUpload}>
        <Style.ColumnWrapper>
          <Text color="blue100" typo="body500">
            증빙 사진을 업로드 해주세요
          </Text>
          <AddImage width={15} />
        </Style.ColumnWrapper>
      </CustomButton>
    </Style.SectionWrapper>
  );
}
