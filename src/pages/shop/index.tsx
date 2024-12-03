import { AppBar, GNB } from "../../components";
import Carousel from "../../components/carousel/Carousel";
import Temp from "../../../public/assets/images/main/temp.png";
import ShopInfo from "./components/ShopInfo";
export default function Shop() {
  const images = [Temp, Temp, Temp];
  return (
    <>
      <AppBar prefix="backButton" />
      <Carousel images={images} height={300} rounded={false} />
      <ShopInfo />
      <GNB type="user" />
    </>
  );
}
