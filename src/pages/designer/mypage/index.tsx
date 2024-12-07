import {  ContentWrapper, InfoWrapper, PageWrapper, ProfileImageWrapper, ProfileMenuWrapper, ProfileWrapper, MyInfoWrapper } from "./index.styles";
import { AppBar, Divider, GNB, SubMenuButton, Text } from "../../../components";
import ProfileImg from "../../../components/profile-img/ProfileImg";


export default function DesignerMyPage() {
  return (
    <>
        <AppBar prefix="backButton" title="회원정보"/>
        <PageWrapper>
            <ContentWrapper>
                <ProfileWrapper>
                    <ProfileImageWrapper>
                        <ProfileImg src={"https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785"} alt={"프로필사진"} width={'75'} height={"75"}/>
                    </ProfileImageWrapper>
                    <ProfileMenuWrapper>
                        <MyInfoWrapper>
                            <Text typo={"subtitle100"} color={"blue100"} font-weight="bold">화난거아니다<Text typo={"subtitle100"}> 님</Text>
                            </Text>
                            <Text typo={"subtitle300"} color={"gray100"}>내 정보 수정하기</Text>
                        </MyInfoWrapper>
                        <SubMenuButton text="" to={"/"}/>
                    </ProfileMenuWrapper>
                </ProfileWrapper>
                
               <Divider/>
                <InfoWrapper>
                <Text typo="subtitle200" color="black">나의 매장 정보</Text>
                </InfoWrapper>
                <SubMenuButton text="매장 정보 수정/인증 " to="/"/>
                <Divider/>
                <Text typo="subtitle200" color="black">나의 뱃지</Text>
                <SubMenuButton text="뱃지 내역" to="/designer/mypage/badges"/>
                <Divider/>
                <Text typo="subtitle200" color="black">고객지원</Text>
                <SubMenuButton text="공지사항" to="/"/>
                <SubMenuButton text="이용약관" to="/"/>
                <SubMenuButton text="퓨티안내" to="/"/>
            </ContentWrapper>
        </PageWrapper>
        <GNB type={"designer"}/>
    </>
)
}