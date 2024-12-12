import { useState, useEffect } from "react";
import { AppBar, GNB, Text } from "../../components";
import { Maker, Warning } from "../../assets/svg";
import { SelectIcon } from "../../assets/svg";
import BottomSheet from "../../components/bottom-sheet/BottomSheet";
import DesignerItem from "./components/DesignerListItem";
import {
  ContentWrapper,
  DesignerList,
  FilterWrapper,
  InfoBox,
  LocationInfo,
  LocationWrapper,
  SelectButton,
  SelectWrapper,
  VerificationWrapper,
  ShopWrapper,
} from "./index.styles";
import { getAroundWorkspaces } from "../../apis/customer/resources/customer";
import { Workspace } from "../../types/customer/customer";
import { useUserDetails } from "../../hooks/useUserDetails";
import { useNavigate } from "react-router-dom";

export default function Request() {
  const [isSelecting, setIsSelecting] = useState(false);
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]); // 작업 공간 데이터
  const [customerAddress, setCustomerAddress] = useState<string>(""); // 고객 주소
  const [loading, setLoading] = useState(true); // 로딩 상태
  const user = useUserDetails(); // 로그인한 유저 정보 가져오기
  const [isFetched, setIsFetched] = useState(false); // 요청 여부를 제어하는 상태
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!user || !user.userId || isFetched) {
        return; // 이미 요청한 경우 실행하지 않음
      }

      try {
        setLoading(true);
        const response = await getAroundWorkspaces(user.userId);
        console.log("API 응답 데이터:", response);
        setCustomerAddress(response.customerAddress || "알 수 없음");
        setWorkspaces(response.workspaces || []);
        setIsFetched(true); // 요청 완료 플래그 설정
      } catch (error) {
        console.error("데이터 로드 실패:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user, isFetched]);

  const handleSelectClick = () => {
    setIsSelecting(!isSelecting);
    if (!isSelecting) {
      setCheckedItems(Array(workspaces.length).fill(false)); // 초기화
    }
  };
  const handleQuote = () => {
    navigate("/customer/request/form");
  };

  const handleCheckboxChange = (index: number) => {
    setCheckedItems((prev) =>
      prev.map((checked, idx) => (idx === index ? !checked : checked)),
    );
  };

  if (!user || !user.userId) {
    return <Text typo="body100">로그인 정보가 없습니다.</Text>;
  }

  if (loading) {
    return <Text typo="body100">로딩 중...</Text>;
  }

  const handleDesignerClick = (workspaceId: number) => {
    navigate(`${workspaceId}`); // 이동 경로 설정
  };
  return (
    <>
      <AppBar prefix="backButton" title="요청하기" />
      <ContentWrapper>
        <InfoBox>에디</InfoBox>
        <LocationWrapper>
          <LocationInfo>
            <Maker height={15} />
            <Text typo="body100">{customerAddress}</Text>
          </LocationInfo>
          <VerificationWrapper>
            <Text typo="body600" color="gray100">
              퓨티와 함께하는 검증된 미용사
            </Text>
            <Warning height={12} />
          </VerificationWrapper>
        </LocationWrapper>
        <FilterWrapper>
          <BottomSheet options={["최신순", "평점 높은순"]} />
          <SelectWrapper>
            <SelectButton onClick={handleSelectClick}>
              <SelectIcon height={15} color="blue100" />
              <Text typo="subtitle300" color="blue100">
                {isSelecting ? "완료" : "선택"}
              </Text>
            </SelectButton>
          </SelectWrapper>
        </FilterWrapper>
        <DesignerList>
          {workspaces.length > 0 ? (
            workspaces.map((workspace, idx) => (
              <DesignerItem
                onClick={() => handleDesignerClick(workspace.workspaceId)}
                thumbnailUrl={workspace.bannerImageUrl}
                key={workspace.workspaceId}
                isSelecting={isSelecting}
                isChecked={checkedItems[idx]}
                onCheckboxChange={() => handleCheckboxChange(idx)}
                name={workspace.workspaceName}
                experience={workspace.yearOfExperience}
                review={workspace.reviewCount}
                score={workspace.reviewRating}
                address={workspace.address}
                badges={workspace.representativeBadges.map((badge) => ({
                  name: badge.badgeName,
                  color: badge.badgeColor,
                }))}
              />
            ))
          ) : (
            <ShopWrapper>
              <Text typo="body100" color="gray100">
                주변에 가게가 없어요.
              </Text>
            </ShopWrapper>
          )}
        </DesignerList>
      </ContentWrapper>
      {isSelecting ? (
        <GNB
          onLargeButtonClick={() => handleQuote()}
          buttonText="견적서 작성하기"
        />
      ) : (
        <GNB type="customer" />
      )}
    </>
  );
}
