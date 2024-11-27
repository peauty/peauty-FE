import { Layout, GNB, AppBar } from "../../components";
const userType = "user";
export default function Main() {
  return (
    <Layout>
      <AppBar />
      <GNB type={userType} />
    </Layout>
  );
}
