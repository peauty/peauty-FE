import { Divider, Text } from "../../../../components";
import { Shop } from "../../../../assets/svg";
import { Badge } from "../../../../components/category/Badge";
import ShopEvent from "./ShopEvent";
import { Maker } from "../../../../assets/svg";
import Rating from "../../../../components/rating";
import OverviewInfo from "./OverviewInfo";
export default function ShopOverview() {
  return (
  <div>
    <OverviewInfo/>
    <ShopEvent />
    <Divider thickness={3} />
  </div>
  );
}
