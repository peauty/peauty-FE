import React, { useState, useRef, useEffect } from "react";
import { AppBar, GNB } from "../../components";
import Carousel from "../../components/carousel/Carousel";
import ShopOverview from "./components/ShopOverview";
import ShopNav from "./components/ShopNav";
import ShopDetail from "./components/ShopDetail";
import { ShopReview } from "./components/ShopReview";
import { ShopBadge } from "./components/ShopBadge";
import { StickyContainer } from "./index.styles";
import { getDesignerWorkspace } from "../../apis/customer/resources/customer";
import { getDesignerReviews } from "../../apis/customer/resources/review";
import { getDesignerBadgesForCustomer } from "../../apis/customer/resources/customer";
import { useParams } from "react-router-dom";
import theme from "../../style/theme";
import { GetDesignerBadgesForCustomerResponse } from "../../types/customer/customer";

type Section = "detail" | "review" | "badge";

export default function Shop() {
  const { userId } = useParams<{ userId: string }>();
  const [workspace, setWorkspace] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState<any[]>([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<Section>("detail");
  const [badges, setBadges] =
    useState<GetDesignerBadgesForCustomerResponse | null>(null);

  const detailRef = useRef<HTMLDivElement | null>(null);
  const reviewRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleNavigate = (id: Section) => {
    const target =
      id === "detail"
        ? detailRef.current
        : id === "review"
          ? reviewRef.current
          : badgeRef.current;

    if (target) {
      const navHeight = navRef.current?.offsetHeight || 0;
      const targetPosition = target.offsetTop - navHeight - 70;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      setActiveSection(id);
    }
  };

  useEffect(() => {
    if (!userId) {
      console.error("userId가 없습니다.");
      return;
    }

    const fetchWorkspaceData = async () => {
      try {
        const response = await getDesignerWorkspace(Number(userId));
        setWorkspace(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    const fetchBadgesData = async () => {
      try {
        const response = await getDesignerBadgesForCustomer(Number(userId));
        setBadges(response);
      } catch (error) {}
    };

    fetchWorkspaceData();
    fetchBadgesData();
  }, [userId]);

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        setReviewsLoading(true);
        const response = await getDesignerReviews(Number(userId));
        console.log(response);

        if (response && Array.isArray(response.reviews)) {
          setReviews(response.reviews);
        } else {
          console.error("Invalid reviews structure:", response);
        }

        setReviewsLoading(false);
      } catch (error) {
        console.error("Reviews API 호출 실패:", error);
        setReviewsLoading(false);
      }
    };

    fetchReviewsData();
  }, [userId]);

  useEffect(() => {
    const handleScroll = () => {
      const detailTop = detailRef.current?.getBoundingClientRect().top || 0;
      const detailBottom =
        detailRef.current?.getBoundingClientRect().bottom || 0;

      const reviewTop = reviewRef.current?.getBoundingClientRect().top || 0;
      const reviewBottom =
        reviewRef.current?.getBoundingClientRect().bottom || 0;

      const badgeTop = badgeRef.current?.getBoundingClientRect().top || 0;
      const badgeBottom = badgeRef.current?.getBoundingClientRect().bottom || 0;

      const windowHeight = window.innerHeight;

      if (badgeBottom <= windowHeight && badgeBottom > 0) {
        setActiveSection("badge");
      } else if (detailTop <= 125 && detailBottom > 125) {
        setActiveSection("detail");
      } else if (reviewTop <= 125 && reviewBottom > 125) {
        setActiveSection("review");
      } else if (badgeTop <= 125) {
        setActiveSection("badge");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return <p>로딩 중...</p>;
  }

  if (!workspace) {
    return <p>데이터를 불러오지 못했습니다.</p>;
  }

  const overviewData = {
    workspaceName: workspace.workspaceName,
    reviewRating: workspace.reviewRating,
    reviewsCount: workspace.reviewsCount,
    introduceTitle: workspace.introduceTitle,
    introduce: workspace.introduce,
    noticeTitle: workspace.noticeTitle,
    notice: workspace.notice,
    address: workspace.address,
    representativeBadges: badges?.representativeBadges || [],
  };

  const detailData = {
    workspaceName: workspace.workspaceName,
    address: workspace.address,
    addressDetail: workspace.addressDetail,
    yearOfExperience: workspace.yearOfExperience,
    openHours: workspace.openHours,
    closeHours: workspace.closeHours,
    openDay: workspace.openDay,
    paymentOptions: workspace.paymentOptions,
    phoneNumber: workspace.phoneNumber,
    licenses: workspace.licenses,
  };

  return (
    <div
      style={{
        padding: `${theme.size.appBarHeight} 0  ${theme.size.gnbHeight}`,
      }}
    >
      <AppBar prefix="backButton" title={workspace.workspaceName} />
      <Carousel
        images={workspace.bannerImageUrls}
        height={300}
        autoPlay={false}
      />
      <ShopOverview {...overviewData} />
      <StickyContainer ref={navRef}>
        <ShopNav activeSection={activeSection} onNavigate={handleNavigate} />
      </StickyContainer>
      <ShopDetail ref={detailRef} id="detail" {...detailData} />
      <ShopReview
        ref={reviewRef}
        id="review"
        reviews={reviews}
        reviewsLoading={reviewsLoading}
        totalRating={overviewData.reviewRating}
        userId={userId}
      />
      <ShopBadge
        ref={badgeRef}
        id="badge"
        badges={badges?.acquiredBadges || []}
      />
      <GNB type="customer" />
    </div>
  );
}
