import { Layout, GNB, AppBar, Wrapper } from "../../components";
import Carousel from "../../components/carousel/Carousel";
const userType = "user";
import ProposalItem from "./components/ProposalItem";
// import
export default function Main() {
  const images = [
    "assets/images/main/배너.png",
    "assets/images/main/배너.png",
    "assets/images/main/배너.png",
  ];
  return (
    <Layout>
      <AppBar prefix="logo" />
      <Wrapper>
        <ProposalItem />
        <div style={{ margin: "15px 0px" }}>
          <Carousel images={images} />
        </div>
      </Wrapper>
      <GNB type={userType} />
    </Layout>
  );
}
