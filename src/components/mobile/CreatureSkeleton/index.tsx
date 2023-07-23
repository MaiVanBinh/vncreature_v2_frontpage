import { styled } from "styled-components";
import Skeleton from "@mui/material/Skeleton";

const SkeletonContainer = styled("div")`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  margin-bottom: 20px;
`;
const SkeletonContentContainer = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 20px;
`;

const CreatureSkeleton = () => {
  return (
    <>
      <SkeletonContainer>
        {/* For variant="text", adjust the height via font-size */}
        <div>
          <Skeleton variant="rounded" width={210} height={100} />
        </div>
        <SkeletonContentContainer>
          <Skeleton variant="text" sx={{ fontSize: "20px" }} />
          <Skeleton variant="text" sx={{ fontSize: "20px" }} />
          <Skeleton variant="text" sx={{ fontSize: "20px" }} />
        </SkeletonContentContainer>
      </SkeletonContainer>
      <SkeletonContainer>
        {/* For variant="text", adjust the height via font-size */}
        <div>
          <Skeleton variant="rounded" width={210} height={100} />
        </div>
        <SkeletonContentContainer>
          <Skeleton variant="text" sx={{ fontSize: "20px" }} />
          <Skeleton variant="text" sx={{ fontSize: "20px" }} />
          <Skeleton variant="text" sx={{ fontSize: "20px" }} />
        </SkeletonContentContainer>
      </SkeletonContainer>
      <SkeletonContainer>
        {/* For variant="text", adjust the height via font-size */}
        <div>
          <Skeleton variant="rounded" width={210} height={100} />
        </div>
        <SkeletonContentContainer>
          <Skeleton variant="text" sx={{ fontSize: "20px" }} />
          <Skeleton variant="text" sx={{ fontSize: "20px" }} />
          <Skeleton variant="text" sx={{ fontSize: "20px" }} />
        </SkeletonContentContainer>
      </SkeletonContainer>
      <SkeletonContainer>
        {/* For variant="text", adjust the height via font-size */}
        <div>
          <Skeleton variant="rounded" width={210} height={100} />
        </div>
        <SkeletonContentContainer>
          <Skeleton variant="text" sx={{ fontSize: "20px" }} />
          <Skeleton variant="text" sx={{ fontSize: "20px" }} />
          <Skeleton variant="text" sx={{ fontSize: "20px" }} />
        </SkeletonContentContainer>
      </SkeletonContainer>
      <SkeletonContainer>
        {/* For variant="text", adjust the height via font-size */}
        <div>
          <Skeleton variant="rounded" width={210} height={100} />
        </div>
        <SkeletonContentContainer>
          <Skeleton variant="text" sx={{ fontSize: "20px" }} />
          <Skeleton variant="text" sx={{ fontSize: "20px" }} />
          <Skeleton variant="text" sx={{ fontSize: "20px" }} />
        </SkeletonContentContainer>
      </SkeletonContainer>
    </>
  );
};

export default CreatureSkeleton;
