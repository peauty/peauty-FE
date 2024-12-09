import React, { useState, useRef, useEffect } from "react";
import { AppBar, GNB } from "../../components";
import Carousel from "../../components/carousel/Carousel";
import Temp from "../../assets/images/temp.png";
import ShopOverview from "./components/ShopOverview";
import ShopNav from "./components/ShopNav";
import ShopDetail from "./components/ShopDetail";
import ShopReview from "./components/ShopReview";
import ShopBadge from "./components/ShopBadge";
import { StickyContainer } from "./index.styles";

type Section = "detail" | "review" | "badge";

const workspace = {
  designerId: 1,
  workspaceId: 2,
  bannerImageUrl: "이미지 url",
  workspaceName: "호키포키",
  reviewRating: 4.5,
  reviewsCount: 5,
  scissors: "GOLD",
  introduceTitle: "호키포키에 오신 여러분들 환영합니다!",
  introduce: "안녕하세요. 말티즈 및 푸들 모발 케어 호키포키입니다.",
  noticeTitle: "5주년 특별 공지 사항",
  notice: `저희 호키포키에서 5주년 이벤트로 예약 자에 한해서 반려견 피부 보습 케어를 하고 있어요\n 히히`,
  address: "성남시 위례구 사미동",
  addressDetail: "대성 베르힐 1401호",
  yearOfExperience: 5,
  openHours: "10:00",
  closeHours: "20:00",
  openDay: "주말휴무",
  paymentOption: ["ACCOUNT", "CASH", "CARD"],
  phoneNumber: "01012345678",
};

const overviewData = {
  workspaceName: workspace.workspaceName,
  reviewRating: workspace.reviewRating,
  reviewsCount: workspace.reviewsCount,
  introduceTitle: workspace.introduceTitle,
  introduce: workspace.introduce,
  noticeTitle: workspace.noticeTitle,
  notice: workspace.notice,
  address: workspace.address,
};

const detailData = {
  workspaceName: workspace.workspaceName,
  address: workspace.address,
  addressDetail: workspace.addressDetail,
  yearOfExperience: workspace.yearOfExperience,
  openHours: workspace.openHours,
  closeHours: workspace.closeHours,
  openDay: workspace.openDay,
  paymentOption: workspace.paymentOption,
  phoneNumber: workspace.phoneNumber,
};

export default function Shop() {
  const images = [Temp, Temp, Temp];
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
      const detailTop = detailRef.current?.getBoundingClientRect().top || 0;
      const detailBottom =
        detailRef.current?.getBoundingClientRect().bottom || 0;

      const reviewTop = reviewRef.current?.getBoundingClientRect().top || 0;
      const reviewBottom =
        reviewRef.current?.getBoundingClientRect().bottom || 0;

      const badgeTop = badgeRef.current?.getBoundingClientRect().top || 0;
      const badgeBottom = badgeRef.current?.getBoundingClientRect().bottom || 0;

      // 조건 수정
      if (detailTop <= 125 && detailBottom > 125) {
        setActiveSection("detail");
      } else if (reviewTop <= 125 && reviewBottom > 125) {
        setActiveSection("review");
      } else if (badgeTop <= 125 && badgeBottom > 125) {
        setActiveSection("badge");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar prefix="backButton" />
      <Carousel images={images} height={300} rounded={false} autoPlay={false} />
      <ShopOverview {...overviewData} />
      <StickyContainer ref={navRef}>
        <ShopNav activeSection={activeSection} onNavigate={handleNavigate} />
      </StickyContainer>

      <>
        <ShopDetail ref={detailRef} id="detail" {...detailData} />
        <ShopReview ref={reviewRef} id="review" />
        <ShopBadge ref={badgeRef} id="badge" />
      </>

      <GNB type="customer" />
    </>
  );
}
