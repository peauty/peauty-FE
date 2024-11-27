import { Layout, GNB, AppBar } from "../../components";
import EstimateStauts from "../../components/page/main/EstimateStatus";
const userType = "user";
export default function Main() {
  return (
    <Layout>
      <AppBar />
      <main>
        <EstimateStauts />
      </main>
      <GNB type={userType} />
    </Layout>
  );
}
