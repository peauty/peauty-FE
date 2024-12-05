//index.tsx
import Card from "../../../components/cards/Card";
import {
  BoldText,
  CardWrapper,
  ContentWrapper,
  InfoWrapper,
  PageWrapper,
  ProfileImageWrapper,
  ProfileMenuWrapper,
  ProfileWrapper,
  MyInfoWrapper,
} from "./index.styles";
import { AppBar, Divider, GNB, SubMenuButton, Text } from "../../../components";
import InfoButton from "../../../components/button/InfoButton";
import ProfileImg from "../../../components/profile-img/ProfileImg";

export default function CustomerMyPage() {
  return (
    <>
      <AppBar prefix="backButton" title="회원정보" />
      <PageWrapper>
        <ContentWrapper>
          <ProfileWrapper>
            <ProfileImageWrapper>
              <ProfileImg
                src={
                  "https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785"
                }
                alt={"프로필사진"}
                width={"75"}
                height={"75"}
              />
            </ProfileImageWrapper>
            <ProfileMenuWrapper>
              <MyInfoWrapper>
                <Text typo={"subtitle100"} color={"blue100"} font-weight="bold">
                  화난거아니다<Text typo={"subtitle100"}> 님</Text>
                </Text>
                <Text typo={"subtitle300"} color={"gray100"}>
                  내 정보 수정하기
                </Text>
              </MyInfoWrapper>
              <SubMenuButton text="" to={"/"} />
            </ProfileMenuWrapper>
          </ProfileWrapper>
          <Divider thickness={2} />
          <SubMenuButton text="우리집 퓨티들" iconType="plus" to="/" />
          <CardWrapper>
            <Card
              imageSrc={
                "https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785"
              }
              name={"꼬미"}
              age={3}
              gender={"암컷"}
              weight={"3.4kg"}
              breed={"말티즈"}
              tags={[
                {
                  text: "피부병",
                  tagProps: {
                    backgroundColor: "blue300",
                    fontColor: "blue100",
                  },
                },
                {
                  text: "슬개골",
                  tagProps: {
                    backgroundColor: "red300",
                    fontColor: "red100",
                  },
                },
              ]}
            />
            <Card
              imageSrc={
                "https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785"
              }
              name={"꼬미"}
              age={3}
              gender={"암컷"}
              weight={"3.4kg"}
              breed={"말티즈"}
              tags={[
                {
                  text: "피부병",
                  tagProps: {
                    backgroundColor: "blue300",
                    fontColor: "blue100",
                  },
                },
                {
                  text: "슬개골",
                  tagProps: {
                    backgroundColor: "red300",
                    fontColor: "red100",
                  },
                },
              ]}
            />
          </CardWrapper>

          <Divider />
          <InfoWrapper>
            <BoldText>미용내역</BoldText>
            <InfoButton message={"미용내역스"} />
          </InfoWrapper>
          <SubMenuButton text="퓨티 미용 내역" to="/" />
          <Divider />
          <BoldText>리뷰</BoldText>
          <SubMenuButton text="리뷰 내역" to="/" />
          <Divider />
          <BoldText>고객지원</BoldText>
          <SubMenuButton text="공지사항" to="/" />
          <SubMenuButton text="이용약관" to="/" />
          <SubMenuButton text="퓨티안내" to="/" />
        </ContentWrapper>
      </PageWrapper>
      <GNB type={"customer"} />
    </>
  );
}
