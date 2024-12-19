import { AppBar, GNB, Divider } from "../../../components";
//import EstimateStauts from "./components/EstimateStatus";
import Carousel from "../../../components/carousel/Carousel";
import ProposalItem from "../components/ProposalItem";
import Banner1 from "../../../assets/images/banner.png";
import Banner2 from "../../../assets/images/banner2.png";
import Banner3 from "../../../assets/images/banner3.png";
import PopularStore from "../components/PopularStore";
import NewStore from "../components/NewStore";
import { HomeWrapper } from "./index.styles";
import { useUserDetails } from "../../../hooks/useUserDetails";
const images = [Banner1, Banner2, Banner3];
export default function CustomerHome() {
  const user = useUserDetails();
  console.log(user.userId);
  const type = {
    title: "견적", // 예시로 "요청"을 넣었으나, 이 값을 조건에 맞게 변경 가능
    firstNav: "견적 받는중",
    secendNav: "받은 견적",
  };
  return (
    <>
      <AppBar prefix="logo" />
      <HomeWrapper>
        <ProposalItem type={type} />
        <Carousel images={images} />
        <PopularStore />
        <NewStore />
      </HomeWrapper>
      <GNB type="customer" />
    </>
  );
}
