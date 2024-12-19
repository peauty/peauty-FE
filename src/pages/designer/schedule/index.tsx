import React, { useEffect, useState } from "react";
import {
  PageWrapper,
  IconWithText,
  TextWrapper,
  ManageContentItem,
  GrayBox,
  SectionHeader,
} from "./index.styles";
import { AppBar, GNB, Text } from "../../../components";
import Rating from "../../../components/rating";
import { colors } from "../../../style/color";
import Dashboard from "./components/Dashboard";
import CustomerInfo from "../../customer/status/components/CustomerInfo";
import { Badge } from "../../../components/category/Badge";
import { getDesignerSchedule } from "../../../apis/designer/resources/designer-bidding-api";
import {
  CompleteGroomingResponse,
  GetDesignerScheduleResponse,
} from "../../../types/designer/designer-bidding-api";
import { useUserDetails } from "../../../hooks/useUserDetails";
import Basic from "../../../assets/images/basic.png";
import { useNavigate } from "react-router-dom";
import PetInfo from "../../../components/petInfo/Info";
import { formatDate } from "../../../utils/dataformat";
import Modal from "../../../components/modal/Modal/Modal";
import { DesignerAPI } from "../../../apis/designer/api";
import Loading from "../../../components/page/sign-up/Loading";

export const completeGrooming = async (
  userId: number,
  processId: number,
  threadId: number,
): Promise<CompleteGroomingResponse> => {
  const res = await DesignerAPI.post<CompleteGroomingResponse>(
    `/v1/users/${userId}/bidding/processes/${processId}/threads/${threadId}/complete`,
  );
  return res.data;
};
export default function Schedule() {
  const { userId } = useUserDetails();
  const [scheduleData, setScheduleData] =
    useState<GetDesignerScheduleResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [isAlreadyCompleteDialogOpen, setIsAlreadyCompleteDialogOpen] =
    useState(false); // 완료된 미용 모달 상태
  const [currentThread, setCurrentThread] = useState<{
    processId: number;
    threadId: number;
  } | null>(null);
  const handleQuoteDatail = (processId: number, threadId: number) => {
    navigate(`/designer/status/quote/${processId}`, {
      state: { userId, processId, threadId },
    });
  };
  const handelWorkspace = () => {
    navigate(`/customer/request/shops/${workspace?.designerId}`);
  };
  useEffect(() => {
    const fetchScheduleData = async () => {
      if (!userId) {
        console.log("유저 ID 없음:", userId);
        setError("User ID가 없습니다.");
        setLoading(false);
        return;
      }

      try {
        const data = await getDesignerSchedule(userId);
        console.log("API 응답 데이터:", data);
        setScheduleData(data);
      } catch (err) {
        console.error("Error fetching schedule data:", err);
        setError("스케줄 데이터를 가져오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchScheduleData();
    }
  }, [userId]);
  const handleModalOpen = (
    processId: number,
    threadId: number,
    threadStep: string,
  ) => {
    if (threadStep === "미용완료") {
      setIsAlreadyCompleteDialogOpen(true); // 이미 완료된 미용 모달 열기
    } else {
      setCurrentThread({ processId, threadId });
      setIsConfirmDialogOpen(true);
    }
  };

  const handleCompleteGrooming = async (
    processId: number,
    threadId: number,
  ) => {
    if (!userId || !processId || !threadId) {
      console.error("미용 완료를 위한 필수 데이터가 없습니다.");
      return;
    }

    try {
      const response = await completeGrooming(userId, processId, threadId);
      setIsConfirmDialogOpen(false);
      window.location.reload();
    } catch (error) {
      console.error("미용 완료 실패:", error);
    }
  };

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;

  const workspace = scheduleData?.workspace;
  const groomingSummary = scheduleData?.groomingSummary;
  const threads = scheduleData?.threads || [];

  return (
    <div>
      <AppBar prefix="backButton" title="스케줄" />
      <PageWrapper>
        <ManageContentItem>
          <div style={{ display: "flex", gap: "20px" }}>
            <GrayBox src={workspace?.designerProfileImageUrl || Basic} />
            <TextWrapper>
              <IconWithText>
                <Text typo="subtitle300">
                  {workspace?.workspaceName || "알 수 없음"}
                </Text>
                <Rating score={workspace?.reviewRating || 0} starSize="12" />
                <Text typo="body400">({workspace?.reviewCount || 0})</Text>
              </IconWithText>
              <Text typo="body400">{workspace?.address}</Text>
              <Text
                typo="body400"
                color="gray100"
                onClick={handelWorkspace}
                style={{ cursor: "pointer" }}
              >
                마이샵 관리 이동 {">"}
              </Text>
              <div style={{ display: "flex", gap: "5px" }}>
                {workspace?.badges?.map((badge, index) => (
                  <Badge
                    key={index}
                    type="general"
                    variant={badge.badgeColor as "blue" | "green" | "red"}
                    text={badge.badgeName || ""}
                    typo="body300"
                  />
                ))}
              </div>
            </TextWrapper>
          </div>
          <Dashboard
            total={groomingSummary?.endGroomingCount || 0}
            today={groomingSummary?.todayGroomingCount || 0}
            upcomming={groomingSummary?.nextGroomingCount || 0}
          />
        </ManageContentItem>

        <SectionHeader>
          <Text typo="subtitle300">
            오늘의{" "}
            <Text typo="subtitle300" color="blue100">
              예약{" "}
            </Text>
            {groomingSummary?.todayGroomingCount || 0}개
          </Text>
        </SectionHeader>

        {threads.map((thread, index) => (
          <PetInfo
            processStatus={thread.processStatus}
            key={thread.threadId}
            date={formatDate(thread.threadStepModifiedAt)} // 날짜 포맷팅 적용
            imageSrc={thread.puppy?.profileImageUrl || Basic}
            name={thread.puppy?.name || "강아지"}
            age={thread.puppy?.age || 3}
            gender={thread.puppy?.sex || "수컷"}
            weight={thread.puppy?.weight || 3.4}
            breed={thread.puppy?.breed || "품종 미제공"}
            status={thread.threadStep}
            tags={thread.puppy?.diseases || []}
            style={thread.style}
            price={thread?.depositPrice}
            buttons={[
              {
                title: "견적서 보기",
                bgColor: colors.blue300,
                color: colors.blue100,
                onClick: () => {
                  if (thread.processId && thread.threadId) {
                    handleQuoteDatail(thread.processId, thread.threadId);
                  } else {
                    console.error("processId 또는 threadId가 없습니다.");
                  }
                },
              },
              {
                title: "미용 완료",
                bgColor: colors.background,
                color: colors.gray100,
                onClick: () => {
                  if (thread.processId && thread.threadId) {
                    handleModalOpen(
                      thread.processId,
                      thread.threadId,
                      thread.threadStep || "",
                    );
                  } else {
                    console.error("processId 또는 threadId가 없습니다.");
                  }
                },
              },
            ]}
          />
        ))}
      </PageWrapper>
      {isConfirmDialogOpen && currentThread && (
        <Modal
          title="해당 미용이 완료됐나요?"
          message="확정 상태는 변경할 수 없어요"
          buttons={[
            {
              label: "네",
              onClick: () =>
                handleCompleteGrooming(
                  currentThread.processId,
                  currentThread.threadId,
                ),
            },
            { label: "아니오", onClick: () => setIsConfirmDialogOpen(false) },
          ]}
          onClose={() => setIsConfirmDialogOpen(false)}
        />
      )}
      {isAlreadyCompleteDialogOpen && (
        <Modal
          message="이미 완료된 미용이에요"
          buttons={[
            {
              label: "닫기",
              onClick: () => setIsAlreadyCompleteDialogOpen(false),
            },
          ]}
          onClose={() => setIsAlreadyCompleteDialogOpen(false)}
        />
      )}
      <GNB type="designer" />
    </div>
  );
}
