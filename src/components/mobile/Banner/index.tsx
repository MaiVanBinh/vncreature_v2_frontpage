/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import useTrans from "@/hooks/useTrans";
import { Title1 } from "@/components/base/baseComponent";
import styled from 'styled-components'

const HomeBannerContainer = styled('div')`
background: ${props => props.theme?.colors.bg};
`

const HomeBanner = () => {
  const trans = useTrans()

  return (
    <HomeBannerContainer>
      <Box
        sx={{
          position: "relative",
          height: "250px",
        }}
      >
        <Image
          src="https://butterfly-conservation.org/sites/default/files/styles/masthead/public/2023-05/wild-spaces_0.jpg?itok=HgxXNtZN"
          alt="HomeBannerImage"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        sx={{
          padding: "1em 4vw",
        }}
      >
        <Title1>
          {trans.solgan1}
          <br />
          {trans.home.solgan2}
        </Title1>
      </Box>
    </HomeBannerContainer>
  );
};

export default HomeBanner;
