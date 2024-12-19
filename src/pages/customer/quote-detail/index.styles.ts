import styled from "styled-components";
import { colors } from "../../../style/color";

// Container for the main background of the page
export const PageContainer = styled.div`
  background-color: ${colors.gray400};
`;

// Container for Profile Info Section
export const InfoContainer = styled.div`
  padding: 5px 0;
`;

// Card Layout for Profile Information
export const InfoCard = styled.div`
  padding: 20px 40px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  gap: 30px;
`;

/// ProfileImage 컴포넌트를 img로 변경할 수 있습니다.
export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  background-color: ${colors.gray300};
`;

// Profile Text and Info Layout
export const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
`;

// Row layout for Rating, Location, Career
export const ProfileRow = styled.div`
  display: flex;
  gap: 5px;
`;

// Dashed Divider Style for separating sections
export const DashedDivider = styled.div`
  flex: 1;
  border: 1px dashed ${colors.gray200};
  margin: 25px 0;
`;

// Quote Detail Card Layout
export const QuoteDetailsCard = styled.div`
  padding: 30px 35px;
  background-color: ${colors.white};
  border-radius: 15px;
`;

// Text Style for Each Detail Section
export const DetailRow = styled.div`
  display: flex;
  white-space: break-spaces;
`;

// Text Layout for Reservation, Service, etc.
export const DetailLabel = styled.div`
  flex: 1;
`;

// Text Layout for Description, Attachments
export const DetailText = styled.div`
  flex: 2;
  white-space: pre-line;
  line-height: 1.1;
  text-align: end;
`;

// Section for Agreement Items (checkboxes for terms)
export const AgreementContainer = styled.div`
  margin-bottom: 15px;
`;

export const AgreementItem = styled.div`
  display: flex;
  gap: 5px;
  align-items: flex-start;
`;

export const TextSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Reservation = styled.div`
  display: flex;

  gap: 5px;
`;
