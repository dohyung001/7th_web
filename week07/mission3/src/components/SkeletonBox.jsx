import styled, { keyframes } from "styled-components";

const SkeletonBox = () => {
  return (<MainBox >
    <SkeletonImage />
    <SkeletonDescription>
      <SkeletonTitle />
      <SkeletonDate />
    </SkeletonDescription>
  </MainBox>)
}

export default SkeletonBox;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SkeletonImage = styled.div`
  width: 100%;
  aspect-ratio: 22 / 32;
  background: linear-gradient(
    90deg,
    rgba(200, 200, 200, 0.1) 25%,
    rgba(200, 200, 200, 0.3) 50%,
    rgba(200, 200, 200, 0.1) 75%
  );
  background-size: 200% 100%;
  border-radius: 15px;
  animation: ${shimmer} 1.5s infinite ease-in-out;
`;

const SkeletonDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SkeletonTitle = styled.div`
  width: 70%;
  height: 16px;
  background: #444;
  border-radius: 4px;
  animation: ${shimmer} 1.5s infinite ease-in-out;
`;

const SkeletonDate = styled.div`
  width: 50%;
  height: 12px;
  background: #444;
  border-radius: 4px;
  animation: ${shimmer} 1.5s infinite ease-in-out;
`;

