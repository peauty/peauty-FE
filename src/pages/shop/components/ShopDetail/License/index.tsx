import { Text } from "../../../../../components";
import { ContentsWrapper } from "../../index.styles";
import { ImageWrapper, ImageItem } from "./index.styles";

interface LicenseProps {
  licenses?: string[];
}

export default function License({ licenses = [] }: LicenseProps) {
  return (
    <ContentsWrapper>
      <Text typo="subtitle300">자격증 및 기타 서류</Text>
      {licenses.length > 0 ? (
        <ImageWrapper>
          {licenses.map((licenseUrl, index) => (
            <ImageItem key={index}>
              <img
                src={licenseUrl}
                alt={`license-${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </ImageItem>

            // </ImageItem>
          ))}
        </ImageWrapper>
      ) : (
        <div>
          <Text typo="body400" color="gray100">
            등록된 자격증이 없어요
          </Text>
        </div>
      )}
    </ContentsWrapper>
  );
}
