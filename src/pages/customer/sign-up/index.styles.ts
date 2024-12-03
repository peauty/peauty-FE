import { styled } from "styled-components";
import { typography } from "../../../style/typography";
import { colors } from "../../../style/color";
import AppBarBack from "../../../assets/svg/AppBarBack";

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh; // 전체 높이 사용
`;

export const ContentWrapper = styled.div`
    flex: 1; // 남은 공간 모두 사용
    display: flex;
    flex-direction: column;
    padding: 0 24px; // 좌우 패딩
`;

export const Title = styled.div`
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 24px;
    margin: 40px 0 8px 0;
    color: ${colors.black100};
`;

export const SubTitle = styled.div`
    ${typography.body300}
    color: ${colors.gray200};
    margin-bottom: 24px;

    svg {
        vertical-align: middle; /* SVG와 텍스트를 동일선상에 맞춤 */
        height: 12px;
        margin-bottom: 2px;
    }
`;

export const InputSection = styled.div`
    flex: 1; // 남은 공간 차지
`;

export const ButtonWrapper = styled.div`
    padding: 24px;
    background: white;
`;

export const StyledAppBarBack = styled(AppBarBack)`
    height: 20px;
    cursor: pointer;
`;

export const modalStyles = {
    overlay: {
      zIndex: 999,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "500px",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    },
  };
