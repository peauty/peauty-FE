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
import { GetDesignerScheduleResponse } from "../../../types/designer/designer-bidding-api";
import { useUserDetails } from "../../../hooks/useUserDetails";
import Basic from "../../../assets/images/basic.png";
import { useNavigate } from "react-router-dom";
export default function Schedule() {
  const { userId } = useUserDetails();
  const [scheduleData, setScheduleData] =
    useState<GetDesignerScheduleResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

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

  if (loading) return <div>Loading...</div>;
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
              예약
            </Text>
            {groomingSummary?.todayGroomingCount || 0}개
          </Text>
        </SectionHeader>

        {threads.map((thread, index) => (
          <CustomerInfo
            key={index}
            date={thread.desiredGroomingDateTime || "날짜 정보 없음"}
            location={workspace?.address || "주소 정보 없음"}
            store={workspace?.workspaceName || "가게 정보 없음"}
            score={workspace?.reviewRating || 0}
            review={workspace?.reviewCount || 0}
            reservation={thread.threadStatus || "예약 상태 없음"}
            thumbnailUrl={thread.puppy?.profileImageUrl || "기본 이미지 URL"}
            onClick={() => console.log(`Thread ID: ${thread.threadId}`)}
            buttons={[
              {
                title: "견적서 보기",
                bgColor: colors.blue300,
                color: colors.blue100,
                width: "100%",
                onClick: () => console.log("견적서 보기 클릭"),
              },
            ]}
            status={thread.threadStep || "알 수 없음"}
            payment={`(thread.depositPrice || 0).toLocaleString() 원`}
          />
        ))}
      </PageWrapper>
      <GNB type="designer" />
    </div>
  );
}
