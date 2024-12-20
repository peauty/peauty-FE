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
        <ImageWrapper style={{ display: "flex", flexWrap: "wrap" }}>
          {licenses.map((licenseUrl, index) => (
            <ImageItem
              key={index}
              style={{
                width: licenses.length > 3 ? "30%" : "calc(33.33% - 10px)", // 3개 이상일 경우 30%로 설정
                marginBottom: "10px", // 이미지 간 간격
              }}
            >
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
