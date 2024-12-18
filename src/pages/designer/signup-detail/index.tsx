import { useState, useEffect } from "react";
import { AppBar, CustomInput, GNB, Text } from "../../../components";
import { TitleContentInput } from "../../../components/input/TitleContentInput";
import { Style } from "./index.styles";
import { useUserDetails } from "../../../hooks/useUserDetails";
import ShopInfoInputSection from "./components/ShopInfoInputSection";
import {
  createDesignerWorkspace,
  getDesignerWorkspace,
  updateDesignerWorkspace,
} from "../../../apis/designer/resources/designer";
import {
  CreateDesignerWorkspaceRequest,
  PaymentOptionType,
} from "../../../types/designer/designer";
import { PaymentMethodMap } from "../../../constants/payment";
import CoverPhotoUploadSection from "./components/CoverPhotoUploadSection";
import CertificateInputSection from "./components/CertificateInputSection";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../constants/routes";

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
  const navigate = useNavigate();

  const [shopDetailInfo, setShopDetailInfo] =
    useState<CreateDesignerWorkspaceRequest>({
      bannerImageUrls: [],
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

  useEffect(() => {
    const fetchWorkspaceData = async () => {
      if (!userId) return;

      const response = await getDesignerWorkspace(Number(userId));
      // Map the response to the form state
      setShopDetailInfo({
        bannerImageUrls: response.bannerImageUrls || [],
        workspaceName: response.workspaceName || "",
        introduceTitle: response.introduceTitle || "",
        introduce: response.introduce || "",
        noticeTitle: response.noticeTitle || "",
        notice: response.notice || "",
        address: response.address || "",
        addressDetail: response.addressDetail || "",
        yearOfExperience: response.yearOfExperience,
        licenses: response.licenses || [],
        paymentOptions: (response.paymentOptions as PaymentOptionType[]) || [],
        openHours: response.openHours || "",
        closeHours: response.closeHours || "",
        openDays: response.openDay || "", // Note: API returns openDay but request needs openDays
        directionGuide: response.directionGuide || "",
        phoneNumber: response.phoneNumber || "",
      });
    };

    fetchWorkspaceData();
  }, [userId]);

  const handleInputChange = <K extends keyof CreateDesignerWorkspaceRequest>(
    field: K,
    value: CreateDesignerWorkspaceRequest[K],
  ) => {
    setShopDetailInfo((prev) => {
      // Only update if the value has changed
      if (prev[field] === value) return prev;
      return {
        ...prev,
        [field]: value,
      };
    });
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

    // Validation
    for (const { key, message } of validationRules) {
      if (!shopDetailInfo[key]) {
        alert(message);
        return;
      }
    }

    // Ensure paymentOptions is always an array
    const mappedPaymentOptions: PaymentOptionType[] = (
      shopDetailInfo.paymentOptions || []
    ).map((option) => {
      return PaymentMethodMap[option] || option; // Ensure that the value exists in the map
    });

    const updatedShopDetailInfo = {
      ...shopDetailInfo,
      paymentOptions: mappedPaymentOptions,
    };

    try {
      // Try creating the designer workspace with the mapped payment options
      await createDesignerWorkspace(Number(userId), updatedShopDetailInfo);
      navigate(ROUTE.designer.signupDetailComplete);
    } catch (error) {
      try {
        // If creation fails, attempt to update the workspace
        await updateDesignerWorkspace(Number(userId), updatedShopDetailInfo);
        alert("수정 완료했습니다.");
        navigate(ROUTE.designer.mypage.home);
      } catch (error) {
        console.error("제출 실패", error);
        alert("제출에 실패했습니다. 다시 시도해 주세요.");
      }
    }
  };

  return (
    <>
      <AppBar prefix="backButton" title="추가 정보 등록" />

      <Style.RegisterPageWrapper>
        <CoverPhotoUploadSection
          onChange={(url) => handleInputChange("bannerImageUrls", url)}
          initialValue={shopDetailInfo.bannerImageUrls || []}
        />

        <Style.SectionWrapper>
          <TitleContentInput
            title="공지사항"
            description="매장 운영과 관련된 특이 사항이 있으시면 등록해 주세요"
            inputPlaceholders={["제목을 입력해주세요", "내용을 입력해주세요"]}
            initialValues={[
              shopDetailInfo.noticeTitle || "",
              shopDetailInfo.notice || "",
            ]}
            onChange={(index, value) => {
              const fieldName = index === 0 ? "noticeTitle" : "notice";
              handleInputChange(fieldName, value);
            }}
          />
          <TitleContentInput
            title="이벤트"
            description="현재 진행 중인 이벤트가 있다면 등록해 주세요"
            inputPlaceholders={["제목을 입력해주세요", "내용을 입력해주세요"]}
            initialValues={[
              shopDetailInfo.introduceTitle || "",
              shopDetailInfo.introduce || "",
            ]}
            onChange={(index, value) => {
              const fieldName = index === 0 ? "introduceTitle" : "introduce";
              handleInputChange(fieldName, value);
            }}
          />
        </Style.SectionWrapper>

        <ShopInfoInputSection
          onChange={(field, value) => handleInputChange(field, value)}
          initialValues={{
            address: shopDetailInfo.address || "",
            addressDetail: shopDetailInfo.addressDetail || "",
            openHours: shopDetailInfo.openHours || "",
            phoneNumber: shopDetailInfo.phoneNumber || "",
            workspaceName: shopDetailInfo.workspaceName || "",
            paymentOptions: shopDetailInfo.paymentOptions || [],
          }}
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
            value={shopDetailInfo.yearOfExperience}
            onChange={(e) =>
              handleInputChange("yearOfExperience", Number(e.target.value))
            }
          />
        </Style.SectionWrapper>

        <CertificateInputSection
          onChange={(licenses) => handleInputChange("licenses", licenses)}
          initialValues={shopDetailInfo.licenses || []}
        />
      </Style.RegisterPageWrapper>

      <GNB buttonText="확인" onLargeButtonClick={handleSubmit} />
    </>
  );
}
