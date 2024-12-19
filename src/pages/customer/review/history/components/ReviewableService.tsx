import { colors } from "../../../../../style/color";
import CustomerInfo from "../../../status/components/CustomerInfo";

export default function ReviewableService() {
  const statusItemData = {
    store: "움칫둠칫",
    location: "서울특별시 강남구 대치동",
    reservation: "예약완료",
    score: 4.5,
    review: 120,
    payment: 35000,
    date: "2021.11.12",
    badges: [
      { name: "친절함", color: "blue" },
      { name: "전문성", color: "green" },
      { name: "전문성", color: "green" },
    ],
    thumbnailUrl:
      "https://item.kakaocdn.net/do/5c5d49e3cf96b8556201270d137a761f8f324a0b9c48f77dbce3a43bd11ce785",
    onCheckboxChange: () => console.log("Checkbox changed"),
    onClick: () => console.log("StatusListItem clicked"),
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat().format(amount); // 1000 단위로 쉼표 추가
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <CustomerInfo
          date={statusItemData.date}
          location={statusItemData.location}
          store={statusItemData.store}
          score={statusItemData.score}
          review={statusItemData.review}
          reservation={statusItemData.reservation}
          thumbnailUrl={statusItemData.thumbnailUrl}
          buttons={[
            {
              title: "리뷰 작성",
              bgColor: colors.blue300,
              color: colors.blue100,
              width: "100%",
              onClick: () => console.log("리뷰작성클릭"),
            },
          ]}
          status="가윗컷 + 곰돌이컷"
          payment={statusItemData.payment}
          onClick={statusItemData.onClick}
        />
      </div>
    </>
  );
}
