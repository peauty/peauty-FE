import { Letter, Pin } from "../../../../assets/svg";
import { GNB, Text } from "../../../../components";
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
    icon: <Pin width={30} />,
    title: "하루에 3번",
    description: [
      "견적서 요청은 하루에 최대 3번까지 가능해요.",
      "최대한 신중하게 작성해주세요!",
    ],
  },
  {
    id: 2,
    icon: <Pin width={30} />,
    title: "수락은 1번",
    description: [
      "한 견적서에 대한 수락은 다수로 불가능해요!",
      "미용사들이 보낸 견적서를 꼼꼼히 읽고 선택하세요.",
    ],
  },
  {
    id: 3,
    icon: <Pin width={30} />,
    title: "수정은 불가능해요",
    description: [
      "요청이 완료된 견적서는 수정이 어려워요.",
      "새로운 요청을 원한다면 다시 견적서를 작성해주세요.",
    ],
  },
  {
    id: 4,
    icon: <Pin width={30} />,
    title: "견적서 검토 시간",
    description: [
      "견적서 검토는 약 24시간이 소요될 예정이에요.",
      "빠르게 검토를 완료할게요!",
    ],
  },
];

export default function CustomerRequestNotice() {
  return (
    <>
      <Wrapper>
        <Letter width={90} />

        <Text typo="subtitle200">요청 전에 확인해주세요</Text>

        <NoticeBox>
          {notices.map((notice) => (
            <NoticeContentBox key={notice.id}>
              <IconBox>{notice.icon}</IconBox>
              <NoticeContent>
                <Text typo="subtitle200">{notice.title}</Text>
                <Text typo="body100" color="gray200">
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

      <GNB buttonText="이해했어요" />
    </>
  );
}
