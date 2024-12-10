import { AppBar, GNB,Divider } from "../../components";
//import EstimateStauts from "./components/EstimateStatus";
import Carousel from "../../components/carousel/Carousel";
import ProposalItem from "./components/ProposalItem";
import Temp from "../../assets/images/배너.png"
import AD from "./components/AD";
import PopularStore from "./components/PopularStore";
import NewStore from "./components/NewStore";
import { HomeWrapper} from "./index.styles";

const images = [
  Temp,Temp,Temp
];
export default function CustomerHome() {
  return (
  <>
    <AppBar prefix="logo" />
    <HomeWrapper>
      <ProposalItem/>
      <Carousel
        images={images}
        />
      <AD/>
      <PopularStore/>
      <NewStore/>
    </HomeWrapper>
    <GNB type="customer" />
  </>
  );
}
