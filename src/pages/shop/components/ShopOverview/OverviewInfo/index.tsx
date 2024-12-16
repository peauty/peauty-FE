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
  representativeBadges,
}: ShopOverviewinfoProps) {
  console.log("뱃지 데이터:" + representativeBadges);
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
          {representativeBadges && representativeBadges.length > 0 ? (
            representativeBadges.map((badge, index) => (
              <Badge
                key={index}
                type={badge.badgeType?.toLowerCase() || "default"} // badgeType이 없을 경우 기본값 설정
                text={badge.badgeName || "Unknown"} // badgeName이 없을 경우 기본값 설정
                variant={badge.badgeColor?.toLowerCase() || "gray"} // badgeColor가 없을 경우 기본값 설정
              />
            ))
          ) : (
            <Text typo="body400" color="gray100">
              {""}
            </Text>
          )}
        </IconContain>
      </TextWrapper>
    </InfoWrapper>
  );
}
