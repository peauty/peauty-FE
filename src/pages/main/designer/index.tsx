import { AppBar, GNB, Divider } from "../../../components";
import Carousel from "../../../components/carousel/Carousel";
import ProposalItem from "../components/ProposalItem";
import Temp from "../../../assets/images/배너.png";
import AD from "../components/AD";
import Utilization from "./components/Utilization";
import { HomeWrapper } from "./index.styles";
import { useUserDetails } from "../../../hooks/useUserDetails";

const images = [Temp, Temp, Temp];

export default function DesignerHome() {
  const user = useUserDetails();
  console.log(user.userId);

  // ProposalItem에 전달할 type 객체 설정
  const type = {
    title: "요청", // 예시로 "요청"을 넣었으나, 이 값을 조건에 맞게 변경 가능
    firstNav: "받은 요청",
    secendNav: "진행중인 견적",
  };

  return (
    <>
      <AppBar prefix="logo" />
      <HomeWrapper>
        <ProposalItem type={type} />
        <Carousel images={images} />
        <AD />
        <Utilization />
      </HomeWrapper>
      <GNB type="designer" />
    </>
  );
}
