import { Layout, GNB, AppBar, Wrapper } from "../../components";
import EstimateStauts from "../../components/page/main/EstimateStatus";
const userType = "user";
export default function Main() {
  return (
    <Layout>
      <AppBar />
      <Wrapper>
        <EstimateStauts />
      </Wrapper>
      <GNB type={userType} />
    </Layout>
  );
}
