import React from "react";
import styled from "styled-components";
import { colors } from "../../../../style/color";

interface DashboardItem {
  label: string;
  value: number;
}

interface DashboardProps {
  total: number;
  today: number;
  upcomming: number;
}

const Dashboard = ({ total, today, upcomming }: DashboardProps) => {
  const items: DashboardItem[] = [
    { label: "누적 완료 미용", value: total },
    { label: "오늘 남은 미용", value: today },
    { label: "해야될 미용", value: upcomming },
  ];
  return (
    <Container>
      {items.map((item, index) => (
        <Item key={index}>
          <Label>{item.label}</Label>
          <Value>{item.value}</Value>
        </Item>
      ))}
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  padding: 10px 40px;
  background-color: ${colors.white};
  margin-top: 15px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Label = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
  font-weight: 500;
`;

const Value = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
