import React, { useState, useRef, useEffect } from "react";
import { AppBar, GNB } from "../../components";
import Carousel from "../../components/carousel/Carousel";
import ShopOverview from "./components/ShopOverview";
import ShopNav from "./components/ShopNav";
import ShopDetail from "./components/ShopDetail";
import ShopReview from "./components/ShopReview";
import ShopBadge from "./components/ShopBadge";
import { StickyContainer } from "./index.styles";
import { getDesignerWorkspace } from "../../apis/resources/designer";
import { useParams } from "react-router-dom";

type Section = "detail" | "review" | "badge";

export default function Shop() {
  const { userId } = useParams<{ userId: string }>();
  const [workspace, setWorkspace] = useState<any>(null); // API 데이터를 저장
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [activeSection, setActiveSection] = useState<Section>("detail");

  const detailRef = useRef<HTMLDivElement | null>(null);
  const reviewRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

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
      console.error("userId가 없습니다."); // 디버깅용
      return;
    }

    const fetchWorkspaceData = async () => {
      try {
        const response = await getDesignerWorkspace(Number(userId));
        console.log("API 호출 성공:", response);
        setWorkspace(response);
        setLoading(false);
      } catch (error) {
        console.error("API 호출 실패:", error);
        setLoading(false);
      }
    };

    fetchWorkspaceData();
  }, [userId]);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Section);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -30% 0px" }, // 감지 민감도 증가
    );

    const sections = [
      detailRef.current,
      reviewRef.current,
      badgeRef.current,
    ].filter(Boolean) as HTMLDivElement[];

    sections.forEach((section) => {
      if (section && observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "detail", ref: detailRef },
        { id: "review", ref: reviewRef },
        { id: "badge", ref: badgeRef },
      ];

      for (const section of sections) {
        const top = section.ref.current?.getBoundingClientRect().top || 0;
        const bottom = section.ref.current?.getBoundingClientRect().bottom || 0;

        if (top <= 125 && bottom > 125) {
          setActiveSection(section.id as Section);
          break;
        }
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
    representativeBadges: workspace.representativeBadges,
  };
  console.log(workspace.representativeBadges);
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
  };

  const badgeData = {
    representativeBadgeNames: workspace.representativeBadgeNames,
  };

  return (
    <>
      <AppBar prefix="backButton" />
      <Carousel
        images={[workspace.bannerImageUrl]}
        height={300}
        autoPlay={false}
      />
      <ShopOverview {...overviewData} />
      <StickyContainer ref={navRef}>
        <ShopNav activeSection={activeSection} onNavigate={handleNavigate} />
      </StickyContainer>
      <ShopDetail ref={detailRef} id="detail" {...detailData} />
      <ShopReview ref={reviewRef} id="review" />
      <ShopBadge ref={badgeRef} id="badge" {...badgeData} />
      <GNB type="customer" />
    </>
  );
}
