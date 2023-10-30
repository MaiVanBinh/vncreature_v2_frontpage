/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import useTrans from "@/hooks/useTrans";
import { Title1 } from "@/components/base/baseComponent";
import styled from "styled-components";
import ReactPlayer from "react-player";

const HomeBannerContainer = styled("div")`
  background: ${(props) => props.theme?.colors.bg};
`;

const HomeBanner = () => {
  const { t } = useTrans();

  return (
    <HomeBannerContainer>
      <Box
        sx={{
          position: "relative",
          // height: "250px",
          width: '100%'
        }}
      >
        <ReactPlayer
          style={{
            width: "100vh",
          }}
          url="./videos/banner_video.mp4"
          loop={true}
          playing={true}
          playsinline={true}
          volume={0.5}
          width={'100%'}
          height={'auto'}
          // muted={true}
        />

        {/* <Image
          src="https://butterfly-conservation.org/sites/default/files/styles/masthead/public/2023-05/wild-spaces_0.jpg?itok=HgxXNtZN"
          alt="HomeBannerImage"
          fill
          style={{
            objectFit: "cover",
          }}
        /> */}
      </Box>
      <Box
        sx={{
          padding: "1em 4vw",
        }}
      >
        <Title1>
          {t.solgan1}
        </Title1>
      </Box>
    </HomeBannerContainer>
  );
};

export default HomeBanner;
