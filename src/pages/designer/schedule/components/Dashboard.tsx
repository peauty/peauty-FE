import React from "react";
import styled from "styled-components";
import { colors } from "../../../../style/color";

interface DashboardItem {
  label: string;
  value: number;
}

const items: DashboardItem[] = [
  { label: "오늘일정", value: 2 },
  { label: "요청현황", value: 2 },
  { label: "요청수락", value: 2 },
];

const Dashboard = () => {
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
