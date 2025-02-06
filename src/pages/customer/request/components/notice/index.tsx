import { Letter, Pin } from "../../../../../assets/svg";
import { AppBar, GNB, Text } from "../../../../../components";
import { colors } from "../../../../../style/color";
import {
  IconBox,
  NoticeBox,
  NoticeContent,
  NoticeContentBox,
  Wrapper,
} from "./index.styles";

type Notice = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string[];
};

const notices: Notice[] = [
  {
    id: 1,
    icon: <Pin width={22} />,
    title: "반려견당 한번",
    description: ["반려견당 한 번만 가능해요! \n최대한 신중하게 작성해주세요!"],
  },
  {
    id: 2,
    icon: <Pin width={22} />,
    title: "수락은 1번",
    description: [
      "한 견적서에 대한 수락은 다수로 불가능해요! \n 미용사들이 보낸 견적서를 꼼꼼히 읽고 선택하세요.",
    ],
  },
  {
    id: 3,
    icon: <Pin width={22} />,
    title: "수정은 불가능해요",
    description: ["요청이 완료된 견적서는 수정이 어려워요."],
  },
  {
    id: 4,
    icon: <Pin width={22} />,
    title: "견적서 검토 시간",
    description: ["견적서 검토는 디자이너별로 달라요."],
  },
];

interface NoticeStepProps {
  onNext: () => void;
}

export default function CustomerRequestNotice({ onNext }: NoticeStepProps) {
  return (
    <>
      <AppBar prefix="backButton" />
      <Wrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Letter width={90} />
          <Text typo="subtitle200" color="blue100">
            요청 전에 확인해주세요
          </Text>
        </div>

        <NoticeBox>
          {notices.map((notice) => (
            <NoticeContentBox key={notice.id}>
              <IconBox>{notice.icon}</IconBox>
              <NoticeContent>
                <Text typo="subtitle300">{notice.title}</Text>
                <Text typo="body100" color="gray100">
                  {notice.description.map((line, index) => (
                    <div key={index}>
                      {line}
                      {index < notice.description.length - 1 && <br />}
                    </div>
                  ))}
                </Text>
              </NoticeContent>
            </NoticeContentBox>
          ))}
        </NoticeBox>
      </Wrapper>

      <GNB buttonText="이해했어요" onLargeButtonClick={onNext} />
    </>
  );
}
