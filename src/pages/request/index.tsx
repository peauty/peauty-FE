import { useState } from "react";
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
} from "./index.styles";

const dummyData = [
  {
    id: 1,
    name: "너는 작은 솔씨 하나지만",
    experience: "5년",
    score: "4.32",
    badges: ["네 안에는 아름드리", "금강송이 들어있다"],
  },
  {
    id: 2,
    name: "너는 작은 도토리알이지만",
    experience: "7년",
    score: "4.75",
    badges: ["네 안에는 우람한", "참나무가 들어있다"],
  },
  {
    id: 3,
    name: "너는 지금 작지만 이미 크다",
    experience: "3년",
    score: "4.15",
    badges: ["너는 지금 모르지만", "너의 때가 오고 있다"],
  },
  {
    id: 4,
    name: "믿음직한 손길",
    experience: "6년",
    score: "4.50",
    badges: ["중형견 전문가", "털 관리 전문가"],
  },
];

export default function Request() {
  const [isSelecting, setIsSelecting] = useState(false);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    Array(dummyData.length).fill(false),
  );

  const handleSelectClick = () => {
    setIsSelecting(!isSelecting);
    if (!isSelecting) {
      setCheckedItems(Array(dummyData.length).fill(false)); // 초기화
    }
  };

  const handleCheckboxChange = (index: number) => {
    setCheckedItems((prev) =>
      prev.map((checked, idx) => (idx === index ? !checked : checked)),
    );
  };

  return (
    <>
      <AppBar prefix="backButton" title="요청하기" />
      <ContentWrapper>
        <InfoBox>에디</InfoBox>
        <LocationWrapper>
          <LocationInfo>
            <Maker height={15} />
            <Text typo="body100">강남구 대치동</Text>
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
              <SelectIcon
                height={15}
                color={isSelecting ? "blue100" : "gray300"}
              />
              <Text typo="subtitle300" color="blue100">
                {isSelecting ? "완료" : "선택"}
              </Text>
            </SelectButton>
          </SelectWrapper>
        </FilterWrapper>
        <DesignerList>
          {dummyData.map((data, idx) => (
            <DesignerItem
              key={data.id}
              isSelecting={isSelecting}
              isChecked={checkedItems[idx]}
              onCheckboxChange={() => handleCheckboxChange(idx)}
              name={data.name}
              experience={data.experience}
              score={data.score}
              badges={data.badges}
            />
          ))}
        </DesignerList>
      </ContentWrapper>
      {isSelecting ? (
        <GNB
          onLargeButtonClick={() => console.log("견적서 작성하기 클릭")}
          buttonText="견적서 작성하기"
        />
      ) : (
        <GNB type="customer" />
      )}
    </>
  );
}
