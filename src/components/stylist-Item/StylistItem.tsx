import {
  ItemWrapper,
  ContentsWrapper,
  ItemImg,
  TextWrapper,
} from "./StylistItem.styles";
import { Text } from "../texts/Text";
import { Star } from "../../assets/svg";
import Badge from "../category/Badge/Badge";
import { BadgeContainer } from "../category/Badge/Badge.styles";
import { typography } from "../../style/typography";
import { useNavigate } from "react-router-dom";
type GeneralVariant = "blue" | "green" | "disease";
type ScissorsVariant = "gold" | "silver" | "bronze";

export interface StyledBadgeProps {
  type: "general" | "scissors" | "normal";
  variant: GeneralVariant | ScissorsVariant;
  text: string;
  typo?: keyof typeof typography;
}

export interface StyledItemProps {
  name: string;
  imageUrl: string;
  location: string;
  star: string;
  starCount: number;
  career: number;
  badges?: StyledBadgeProps[];
  showButton?: string;
}

export default function StylistItem({
  name,
  imageUrl,
  location,
  star,
  starCount,
  career,
  badges,
  showButton,
}: StyledItemProps) {
  const navigate = useNavigate();
  const handleWorkspaceClick = () => {
    // 스타일리스트의 workspace 페이지로 이동
    navigate(`/workspace/${name}`); // 스타일리스트의 ID를 URL에 추가하여 이동
  };

  const handleRequestClick = () => {
    if (showButton === "내 요청보기") {
      // 요청서 페이지로 이동
      navigate("/request");
    } else if (showButton === "견적서 보기") {
      // 견적서 페이지로 이동
      navigate("/estimate");
    }
  };

  return (
    <ItemWrapper>
      <div
        style={{ display: "flex", gap: "15px", cursor: "pointer" }}
        onClick={handleWorkspaceClick}
      >
        <ItemImg></ItemImg>
        <div>
          <ContentsWrapper>
            <Text typo="subtitle200" color="black">
              {name}
            </Text>
            <Text typo="body700" color="black">
              {location}
            </Text>
          </ContentsWrapper>

          <TextWrapper>
            <Star width={14} />{" "}
            <Text typo="body600" color="gray100">
              <TextWrapper>
                <span>
                  {star}({starCount})
                </span>
                <span>|</span>
                <span>경력 {career}년</span>
              </TextWrapper>
            </Text>
          </TextWrapper>
          <BadgeContainer>
            {badges?.map((badge, index) => (
              <Badge
                key={index}
                type={badge.type}
                variant={badge.variant}
                text={badge.text}
                typo={badge.typo}
              />
            ))}
          </BadgeContainer>
        </div>
      </div>
      {showButton && (
        <div
          style={{ margin: "5px auto 0", cursor: "pointer" }}
          onClick={handleRequestClick}
        >
          <Text typo="body200" color="blue100">
            {showButton}
          </Text>
        </div>
      )}
    </ItemWrapper>
  );
}
