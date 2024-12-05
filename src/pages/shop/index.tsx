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

export default function Shop() {
  const images = [Temp, Temp, Temp];
  const [currentView, setCurrentView] = useState<"main" | "badge">("main");
  const [activeSection, setActiveSection] = useState<Section>("detail");

  const detailRef = useRef<HTMLDivElement | null>(null);
  const reviewRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleNavigate = (id: Section) => {
    if (id === "badge") {
      setCurrentView("badge");
      setActiveSection("badge");
    } else {
      setCurrentView("main");
      // 네비게이션을 클릭했을 때 즉시 상태 업데이트
      setActiveSection(id);

      const target =
        id === "detail"
          ? detailRef.current
          : id === "review"
            ? reviewRef.current
            : badgeRef.current;

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });

        // 스크롤이 완료된 후 다시 한 번 상태를 확인하여 보정
        setTimeout(() => {
          setActiveSection(id);
        }, 0); // 스크롤 애니메이션이 끝날 때쯤으로 예상 시간 설정
      }
    }
  };

  useEffect(() => {
    if (currentView !== "main") return;

    // 이전 observer 해제
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // 새로운 observer 생성 및 등록
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Section);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -30% 0px" }, // threshold 및 rootMargin 조정
    );

    const sections = [detailRef.current, reviewRef.current].filter(
      Boolean,
    ) as HTMLDivElement[];

    sections.forEach((section) => {
      if (section && observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    // 컴포넌트 언마운트 또는 currentView 변경 시 observer 해제
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [currentView]);

  // 스크롤 이벤트로 추가 업데이트
  useEffect(() => {
    const handleScroll = () => {
      if (currentView !== "main") return;

      const detailOffset = detailRef.current?.getBoundingClientRect().top || 0;
      const reviewOffset = reviewRef.current?.getBoundingClientRect().top || 0;

      if (detailOffset <= 70 && reviewOffset > 70) {
        setActiveSection("detail");
      } else if (reviewOffset <= 70) {
        setActiveSection("review");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentView]);

  return (
    <>
      <AppBar prefix="backButton" />
      <Carousel images={images} height={300} rounded={false} autoPlay={false}/>
      <ShopOverview />
      <StickyContainer ref={navRef}>
        <ShopNav activeSection={activeSection} onNavigate={handleNavigate} />
      </StickyContainer>
      {currentView === "main" ? (
        <>

          <ShopDetail ref={detailRef} id="detail" />
          <ShopReview ref={reviewRef} id="review" />
        </>
      ) : (
        <ShopBadge id="badge" ref={badgeRef} />
      )}
      <GNB type="customer" />
    </>
  );
}
