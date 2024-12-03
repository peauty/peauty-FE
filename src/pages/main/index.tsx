import { AppBar, Wrapper } from "../../components";
import EstimateStauts from "./components/EstimateStatus";
import Carousel from "../../components/carousel/Carousel";
const userType = "user";

export default function Main() {
  const images = [
    "assets/images/main/temp.png",
    "assets/images/main/temp.png",
    "assets/images/main/temp.png",
  ];
  return (
    <>
      <AppBar prefix="logo" />
      <Wrapper>
        <EstimateStauts />
        <Carousel
          fullWidth={true}
          autoPlay={false}
          images={images}
          height={300}
        />
      </Wrapper>
    </>
  );
}
