import { Layout, GNB, AppBar, Wrapper } from "../../components";
import EstimateStauts from "../../components/page/main/EstimateStatus";
import StylistItem from "../../components/global/stylist-Item/StylistItem";
import { colors } from "../../style/color";
const userType = "user";

export default function Main() {
  return (
    <Layout>
      <AppBar prefix="logo" />
      <Wrapper>
        <EstimateStauts />
        <StylistItem />;
      </Wrapper>
      <GNB type={userType} />
    </Layout>
  );
}
