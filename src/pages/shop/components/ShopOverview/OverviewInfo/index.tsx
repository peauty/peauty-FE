import { Divider, Text } from "../../../../../components";
import { Shop } from "../../../../../assets/svg";
import { Badge } from "../../../../../components/category/Badge";
import ShopEvent from "../ShopEvent";
import { Maker } from "../../../../../assets/svg";
import { InfoWrapper, TextWrapper } from "./index.styles";
import { IconContain } from "../../ShopDetail/ShopInfo/index.styles";
import { ShopOverviewinfoProps } from "../../../../../types/customer/request";
import Rating from "../../../../../components/rating";

export default function OverviewInfo({
  workspaceName,
  reviewRating,
  reviewsCount,
  introduceTitle,
  introduce,
  address,
}: ShopOverviewinfoProps) {
  return (
    <InfoWrapper>
      <div>
        <div style={{ display: "flex", alignContent: "center", gap: "3px" }}>
          <Text typo="subtitle100">{workspaceName}</Text>
          <Rating score={reviewRating} />
          <Text typo="body400" color="gray100">
            ({reviewsCount})
          </Text>
        </div>

        <IconContain>
          <Maker height={12} />
          <Text typo="body400">{address}</Text>
        </IconContain>
      </div>
      <TextWrapper>
        <div>
          <IconContain>
            <Shop height={10} style={{ marginRight: "5px" }} />
            <Text typo="body300">{introduceTitle}</Text>
          </IconContain>
          <Text typo="body400">{introduce}</Text>
        </div>
        <IconContain>
          <Badge type="general" text="사업자 등록 인증" variant="green" />
          <Badge type="general" text="말티즈 전문가" />
        </IconContain>
      </TextWrapper>
    </InfoWrapper>
  );
}
