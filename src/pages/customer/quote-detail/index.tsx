import { CareerIcon, CheckIcon2, Maker } from "../../../assets/svg";
import { AppBar, GNB, Text } from "../../../components";
import Rating from "../../../components/rating";
import { colors } from "../../../style/color";
import {
  PageContainer,
  InfoContainer,
  InfoCard,
  ProfileImage,
  ProfileTextContainer,
  ProfileRow,
  DashedDivider,
  QuoteDetailsCard,
  DetailRow,
  DetailLabel,
  DetailText,
  AgreementContainer,
  AgreementItem,
  TextSectionWrapper,
} from "./index.styles"; // 스타일 컴포넌트 임포트

export default function QuoteDetail() {
  return (
    <PageContainer>
      <AppBar prefix="backButton" title="견적서 보기" />
      <InfoContainer>
        <InfoCard>
          <ProfileImage />
          <div>
            <Text typo="subtitle200">수석실장 시언</Text>
            <ProfileTextContainer>
              <ProfileRow>
                <Rating score={4.5} />
                <Text typo="body300" color="gray100">
                  &nbsp;(12)
                </Text>
              </ProfileRow>
              <ProfileRow>
                <Maker width={10} />
                <Text typo="body400">서울 특별시 강남구 대치동</Text>
              </ProfileRow>
              <ProfileRow>
                <CareerIcon width={13} />
                <Text typo="body400">경력 5년</Text>
              </ProfileRow>
            </ProfileTextContainer>
          </div>
        </InfoCard>
      </InfoContainer>

      <div style={{ padding: "10px 40px 30px" }}>
        <QuoteDetailsCard>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "3px" }}
          >
            <Text typo="subtitle100" color="blue100">
              꼬미
            </Text>
            <Text typo="subtitle100">견적서</Text>
          </div>

          <DashedDivider />

          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <DetailRow>
              <DetailLabel>
                <Text typo="body300">예약 날짜</Text>
              </DetailLabel>
              <Text typo="body300">2024.12.24 12:30</Text>
            </DetailRow>
            <DetailRow>
              <DetailLabel>
                <Text typo="body300">미용 종류</Text>
              </DetailLabel>
              <Text typo="body300">곰돌이컷 + 가위컷</Text>
            </DetailRow>
            <DetailRow>
              <DetailLabel>
                <Text typo="body300">예상 소요 시간</Text>
              </DetailLabel>
              <Text typo="body300">2시간 30분</Text>
            </DetailRow>
            <DetailRow>
              <DetailLabel>
                <Text typo="body300">첨부사진</Text>
              </DetailLabel>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "5px",
                  backgroundColor: `${colors.gray300}`,
                }}
              />
            </DetailRow>
            <DetailRow>
              <DetailLabel>
                <Text typo="body300">상세 설명</Text>
              </DetailLabel>
              <DetailText>
                <Text typo="body300">
                  해당 사진은 곰돌이 컷이 아니라 알머리컷입니다! 알머리 컷으로
                  진행하겠습니다.
                </Text>
              </DetailText>
            </DetailRow>
          </div>

          <DashedDivider />

          <DetailRow>
            <DetailLabel>
              <Text typo="subtitle200" color="blue100">
                총 결제 비용
              </Text>
            </DetailLabel>
            <Text typo="subtitle200">35,000원</Text>
          </DetailRow>

          <DashedDivider />

          <AgreementContainer>
            <div style={{ marginBottom: "15px" }}>
              <Text typo="body100" color="gray100">
                이용 약관
              </Text>
            </div>
            <TextSectionWrapper style={{ gap: "15px" }}>
              <Text typo="body400" color="gray100">
                필수 동의사항
              </Text>
              <TextSectionWrapper>
                <AgreementItem>
                  <CheckIcon2 width={10} />
                  <Text typo="body700" color="gray100">
                    원활한 미용 서비스 제공을 위해 최초 1회 확인 및 동의가
                    필요한 사항입니다.
                  </Text>
                </AgreementItem>
                <AgreementItem>
                  <CheckIcon2 width={10} />
                  <Text typo="body700" color="gray100">
                    마케팅 활용 및 개인정보 수집에 활용 될 수 있습니다.
                  </Text>
                </AgreementItem>
              </TextSectionWrapper>
              <Text typo="body400" color="gray100">
                결제 및 취소 환불 정책
              </Text>
              <TextSectionWrapper>
                <AgreementItem>
                  <CheckIcon2 width={10} />
                  <Text typo="body700" color="gray100">
                    요금 결제 시 예약금 결제 후 나머지 비용은 현장결제로
                    결제됩니다.
                  </Text>
                </AgreementItem>
                <AgreementItem>
                  <CheckIcon2 width={10} />
                  <Text typo="body700" color="gray100">
                    서비스 시작 이후에는 서비스 요금 환불이 불가능 합니다.
                  </Text>
                </AgreementItem>
              </TextSectionWrapper>
            </TextSectionWrapper>
          </AgreementContainer>
        </QuoteDetailsCard>
      </div>

      <GNB buttonText="35,000원 결제하기" />
    </PageContainer>
  );
}
