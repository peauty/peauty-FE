import { AppBar, GNB, Divider } from "../../../components";
//import EstimateStauts from "./components/EstimateStatus";
import Carousel from "../../../components/carousel/Carousel";
import ProposalItem from "../components/ProposalItem";
import Temp from "../../../assets/images/배너.png";
import AD from "../components/AD";
import PopularStore from "../components/PopularStore";
import NewStore from "../components/NewStore";
import { HomeWrapper } from "./index.styles";
import { useUserDetails } from "../../../hooks/useUserDetails";
const images = [Temp, Temp, Temp];
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
        <AD />
        <PopularStore />
        <NewStore />
      </HomeWrapper>
      <GNB type="customer" />
    </>
  );
}
