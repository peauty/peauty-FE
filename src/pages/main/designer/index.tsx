import { AppBar, GNB, Divider } from "../../../components";
import Carousel from "../../../components/carousel/Carousel";
import ProposalItem from "../components/ProposalItem";
import Banner1 from "../../../assets/images/banner.png";
import Banner2 from "../../../assets/images/banner2.png";
import Banner3 from "../../../assets/images/banner3.png";
import Utilization from "./components/Utilization";
import { HomeWrapper } from "./index.styles";
import { useUserDetails } from "../../../hooks/useUserDetails";

const images = [Banner1, Banner2, Banner3];

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
        <Utilization />
      </HomeWrapper>
      <GNB type="designer" />
    </>
  );
}
