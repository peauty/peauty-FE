import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const LoadingImage = styled.img`
  width: 300px;
  height: 300px;
  animation: ${rotate} 1s linear infinite;
`;

interface LoaderProps {
  imageUrl?: string;
  size?: number;
}

const LOADINGIMAGE = "/svg/loading.svg"; // TODO 퓨티 이미지로 변경

export default function Loading({
  imageUrl = LOADINGIMAGE,
  size = 40,
}: LoaderProps) {
  return (
    <LoaderContainer>
      <LoadingImage
        src={imageUrl}
        alt="loading"
        style={{ width: size, height: size }}
      />
    </LoaderContainer>
  );
}
