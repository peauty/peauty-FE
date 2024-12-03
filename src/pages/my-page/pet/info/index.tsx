import { AppBar, GNB, Text } from "../../../../components";
import { Layout } from "../../../../components/layout/Layout";
import {InfoWrapper,PageWrapper, ContentWrapper, ButtonWrapper ,MyInfoWrapper} from "./index.styles";
import ProfileImg from "../../../../components/profile-img/ProfileImg";
import OptionButton from "./components/OptionButton";
import SvgBirthDay from "../../../../assets/svg/BirthDay";
import SvgMale from "../../../../assets/svg/Male";

export default function PetInfoPage() {
  const handleSelect = (index: number) => {
    if (index === 0) {
      console.log("삭제하기 클릭");
    } else if (index === 1) {
      console.log("수정하기 클릭");
    }
  };

  return (
    <Layout>
      <PageWrapper>
        <AppBar prefix="backButton" />
        <ContentWrapper>
          <Text typo="body100" color="gray100">
            태어난지
            <Text typo="body100" color="blue100">
              4년 1개월
            </Text>
          </Text>

          <ProfileImg
            src="https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785"
            alt="프로필사진"
            width="200"
            height="200"
          />

          <MyInfoWrapper>
            <Text typo="title100" color="black">
              꼬미
            </Text>
            <SvgMale width={15} />
          </MyInfoWrapper>

          <Text typo="body300" color="blue100">
            말티즈
            <Text typo="body300" color="gray100">
              3.5kg
            </Text>
          </Text>

          <MyInfoWrapper>
            <SvgBirthDay width={15} />
            <Text typo="body300" color="gray100">
              2020년 10월 07일
              <Text typo="body300" color="blue100">
                4살
              </Text>
            </Text>
          </MyInfoWrapper>

          <InfoWrapper>
            <Text typo="body100" color="blue100">
              슬개골& 외이염
              <Text typo="body100" color="black">이 있어요</Text>
            </Text>
          </InfoWrapper>

          <ButtonWrapper>
            <OptionButton
              buttonNames={["삭제하기", "수정하기"]}
              selectedIndex={0}
              onSelect={handleSelect}
            />
          </ButtonWrapper>
        </ContentWrapper>
      </PageWrapper>
      <GNB type="user" />
    </Layout>
  );
}
