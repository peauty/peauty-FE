import { useState } from "react";
import { AppBar, CustomInput, GNB, Text } from "../../../components";
import { TitleContentInput } from "../../../components/input/TitleContentInput";
import { Style } from "./index.styles";
import CoverPhotoUploadSection from "./components/CoverPhotoUploadSection";
import { useUserDetails } from "../../../hooks/useUserDetails";
import { CreateDesignerWorkspaceRequest } from "../../../types/designer";
import { createDesignerWorkspace } from "../../../apis/resources/designer";
import ShopInfoInputSection from "./components/ShopInfoInputSection";
import CertificateInputSection from "./components/CertificateInputSection";

interface validateRulesType {
  workspaceName: string;
  address: string;
  addressDetail: string;
  openHours: string;
  phoneNumber: string;
  paymentOptions: string;
}

export default function DesignerSignUpDetail() {
  const { userId } = useUserDetails();

  const [shopDetailInfo, setShopDetailInfo] =
    useState<CreateDesignerWorkspaceRequest>({
      bannerImageUrl: "",
      workspaceName: "",
      introduceTitle: "",
      introduce: "",
      noticeTitle: "",
      notice: "",
      address: "",
      addressDetail: "",
      yearOfExperience: undefined,
      licenses: [],
      paymentOptions: [],
      openHours: "",
      closeHours: "",
      openDays: "",
      directionGuide: "",
      phoneNumber: "",
    });

  const handleInputChange = (
    field: keyof CreateDesignerWorkspaceRequest,
    value: any,
  ) => {
    setShopDetailInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleSubmit = async () => {
    const validationRules: {
      key: keyof validateRulesType;
      message: string;
    }[] = [
      { key: "workspaceName", message: "매장 이름을 입력해주세요." },
      { key: "address", message: "매장 위치를 입력해주세요." },
      { key: "addressDetail", message: "매장의 상세 위치를 입력해주세요." },
      { key: "openHours", message: "매장 영업 시간을 입력해주세요." },
      { key: "phoneNumber", message: "매장 대표 전화번호를 입력해주세요." },
      { key: "paymentOptions", message: "결제 방식을 선택해주세요." },
    ];

    for (const { key, message } of validationRules) {
      if (!shopDetailInfo[key]) {
        alert(message);
        return;
      }
    }

    try {
      await createDesignerWorkspace(Number(userId), shopDetailInfo);
      alert("워크스페이스가 성공적으로 등록되었습니다.");
    } catch (error) {
      console.error("제출 실패", error);
      alert("제출에 실패했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <>
      <AppBar prefix="backButton" title="추가 정보 등록" />

      <Style.RegisterPageWrapper>
        <CoverPhotoUploadSection
          onChange={(url) => handleInputChange("bannerImageUrl", url)}
        />

        <Style.SectionWrapper>
          <TitleContentInput
            title="공지사항"
            description="매장 운영과 관련된 특이 사항이 있으시면 등록해 주세요"
            inputPlaceholders={["제목을 입력해주세요", "내용을 입력해주세요"]}
            onChange={(index, value) => {
              const fieldName = index === 0 ? "noticeTitle" : "notice";
              handleInputChange(fieldName, value);
            }}
          />
          <TitleContentInput
            title="이벤트"
            description="현재 진행 중인 이벤트가 있다면 등록해 주세요"
            inputPlaceholders={["제목을 입력해주세요", "내용을 입력해주세요"]}
            onChange={(index, value) => {
              const fieldName = index === 0 ? "introduceTitle" : "introduce";
              handleInputChange(fieldName, value);
            }}
          />
        </Style.SectionWrapper>

        <ShopInfoInputSection
          onChange={(field, value) => handleInputChange(field, value)}
        />

        <Style.SectionWrapper>
          <Style.TitleWrapper>
            <Text typo="subtitle300">경력</Text>
            <Text color="gray100" typo="body500">
              경력을 등록하면 고객에게 전문성을 어필할 수 있어요
            </Text>
          </Style.TitleWrapper>

          <CustomInput
            placeholder="예) 22"
            extraText="년"
            onChange={(e) =>
              handleInputChange("yearOfExperience", Number(e.target.value))
            }
          />
        </Style.SectionWrapper>

        <CertificateInputSection
          onChange={(licenses) => handleInputChange("licenses", licenses)}
        />
      </Style.RegisterPageWrapper>

      <GNB buttonText="확인" onLargeButtonClick={handleSubmit} />
    </>
  );
}
