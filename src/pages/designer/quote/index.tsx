import React from "react";
import { AppBar, Divider, GNB, Text, CustomInput } from "../../../components";
import Card from "../../../components/cards/Card";
import { colors } from "../../../style/color";
import {
  Container,
  ContentWrapper,
  SectionWrapper,
  InputWrapper,
  PhotoAttachment,
  PhotoAttachmentContainer,
  RequestDetail,
  RequestSection,
} from "./index.styles";

export default function Quote() {
  return (
    <Container>
      <AppBar prefix="backButton" title="견적서 작성" />
      <ContentWrapper>
        <Card
          imageSrc={
            "https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785"
          }
          name={"꼬미"}
          age={3}
          gender={"암컷"}
          weight={"3.4"}
          breed={"말티즈"}
          tags={["피부병", "슬개골"]}
        />
      </ContentWrapper>
      <Divider thickness={3} color={`${colors.gray400}`} />
      <SectionWrapper>
        <RequestDetail>
          <Text typo="subtitle200">요청상세</Text>
          <RequestSection>
            <Text typo="body400" color="gray100">
              원하는 미용
            </Text>
            <Text typo="body100">곰돌이컷 + 가위컷</Text>
          </RequestSection>
          <RequestSection>
            <Text typo="body400" color="gray100">
              상세 설명
            </Text>
            <Text typo="body100">
              저희 강아지는 발에 예민한 편이예요! {"\n"}그러니 시술할때 발을
              많이 만지지 말아주세요
            </Text>
          </RequestSection>
          <RequestSection>
            <Text typo="body400" color="gray100">
              첨부한 사진
            </Text>
            <Text typo="body100">곰돌이컷 + 가위컷</Text>
          </RequestSection>
          <RequestSection>
            <Text typo="body400" color="gray100">
              희망 비용
            </Text>
            <Text typo="body100">35,000</Text>
          </RequestSection>
          <RequestSection>
            <Text typo="body400" color="gray100">
              희망 시간 및 날짜
            </Text>
            <Text typo="body100">6월 12일 오전 12시</Text>
          </RequestSection>
        </RequestDetail>
      </SectionWrapper>
      <Divider thickness={3} color={`${colors.gray400}`} />
      <SectionWrapper>
        <Text typo="subtitle200">견적 설명</Text>
        <InputWrapper>
          <CustomInput label="비용" placeholder="결제비용을 입력해주세요" />
          <CustomInput
            label="소요시간"
            placeholder="예상 소요시간을 입력해주세요"
          />
          <CustomInput
            label="상세설명"
            placeholder="견적서에 대한 추가 설명을 작성해주세요"
            inputType="textarea"
          />
          <PhotoAttachment>
            <div>
              <Text typo="body100">사진첨부</Text>
              <Text typo="body400" color="gray100">
                상세 설명에 대한 이해를 돕기 위해 사진을 첨부하면 좋아요
              </Text>
            </div>
            <PhotoAttachmentContainer>+</PhotoAttachmentContainer>
          </PhotoAttachment>
        </InputWrapper>
      </SectionWrapper>
      <GNB buttonText="견적서 보내기" />
    </Container>
  );
}
