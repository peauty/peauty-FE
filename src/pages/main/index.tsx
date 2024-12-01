import { Layout, GNB, AppBar, Wrapper } from "../../components";
const userType = "user";
import ProposalItem from "./components/ProposalItem";
// import 
export default function Main() {
  return (
    <Layout>
      <AppBar prefix="logo" />
      <Wrapper>
        <ProposalItem />
      </Wrapper>
      <GNB type={userType} />
    </Layout>
  );
}
