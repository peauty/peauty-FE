import { AppBar, Wrapper } from "../../components";
import EstimateStauts from "./components/EstimateStatus";

export default function Main() {
  return (
    <>
      <AppBar prefix="logo" />
      <Wrapper>
        <EstimateStauts />
      </Wrapper>
    </>
  );
}
