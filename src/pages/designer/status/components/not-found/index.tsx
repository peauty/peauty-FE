import { NoneComfirm, NoneQuote, NoneRequset } from "../../../../../assets/svg";
import { NotFoundWrapper, ContentWrapper } from "./index.styled";
import { Text } from "../../../../../components";
export interface NotFoundProps {
  type: "request" | "quote" | "comfirm"; // type 정의
}

export default function NotFound({ type }: NotFoundProps) {
  // SVG 아이콘을 type에 따라 선택
  const renderIcon = () => {
    switch (type) {
      case "request":
        return (
          <ContentWrapper>
            <NoneRequset width={100} />;
              <Text typo="body100" color="gray100">
                받은 요청이 없어요
              </Text>
          </ContentWrapper>
        );
      case "quote":
        return (
          <ContentWrapper>
            <NoneQuote width={100} />
            <ContentWrapper style={{ gap: "3px" }}>
              <Text typo="body100" color="gray100">
                보낸 견적이 없어요
              </Text>
              <Text typo="body400" color="gray100">
                아직 견적서를 보내지 않으섰다면 요청을 확인해보세요
              </Text>
            </ContentWrapper>
          </ContentWrapper>
        );
      case "comfirm":
        return (
          <ContentWrapper>
            <NoneComfirm width={100} />
            <Text typo="body100" color="gray100">
              확정된 견적이 없어요
            </Text>
          </ContentWrapper>
        );
      default:
        return null; // 기본적으로 아무것도 렌더링하지 않음
    }
  };

  return (
    <NotFoundWrapper>
      <div>{renderIcon()}</div>{" "}
    </NotFoundWrapper>
  );
}
