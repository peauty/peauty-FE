import { AppBar } from "../../components";
import Carousel from "../../components/carousel/Carousel";
import Temp from "../../assets/images/temp.png";
import ShopOverview from "./components/ShopOverview";
import ShopNav from "./components/ShopNav";
import ShopDetail from "./components/ShopDetail";
import ShopReview from "./components/ShopReview";
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import theme from "../../style/theme";

export const StickyContainer = styled.div`
  position: sticky;
  top: ${theme.size.appBarHeight}; /* 화면 상단에 고정 */
  z-index: 10; /* 다른 요소 위에 표시 */
  background: white; /* 스크롤 시 배경색 유지 */
`;

export default function Shop() {
  const images = [Temp, Temp, Temp];
  const [activeSection, setActiveSection] = useState("detail");

  // 각 섹션의 ref 설정
  const detailRef = useRef<HTMLDivElement | null>(null);
  const reviewRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
          }
        });
      },
      {
        threshold: 0.5, // 50% 이상 보이면 활성화
        rootMargin: "-70px 0px 0px 0px", // AppBar 높이를 고려하여 조정
      },
    );

    const sections = [detailRef.current, reviewRef.current];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    const target =
      id === "detail"
        ? detailRef.current
        : id === "review"
          ? reviewRef.current
          : null;

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start", // 맨 위로 스크롤
      });
    }
  };

  return (
    <>
      <AppBar prefix="backButton" />
      <Carousel images={images} height={300} rounded={false} />
      <ShopOverview />
      <StickyContainer>
        <ShopNav
          activeSection={activeSection}
          onNavigate={handleScrollToSection}
        />
      </StickyContainer>
      <ShopDetail ref={detailRef} id="detail" />
      <ShopReview ref={reviewRef} id="review" />
    </>
  );
}
