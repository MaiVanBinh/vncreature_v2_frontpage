import { TAsset } from "@/api/type";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

import { useRouter } from "next/router";

const CarouselContainer = styled("div")`
  background: ${(props) => props.theme?.OTHER.WHITE};

  .carousel .thumbs-wrapper {
    margin: 10px !important;
  }
  .slide {
    background: ${(props) => props.theme?.NEUTRAL.DARKNESS};
    img {
      height: 300px;
      object-fit: contain;
    }
  }
  .carousel .thumb img {
    vertical-align: top;
    width: 80px;
    height: 40px;
}
`;

type TAssetProp = {
  listImage: TAsset[];
};
const CarouselCustom = (props: TAssetProp) => {
  const { listImage } = props;

  return (
    <CarouselContainer>
      <Carousel showArrows={true} autoPlay infiniteLoop>
        {listImage?.map((item) => (
          <div key={item.id}>
            <img alt={item.url} src={item.url?.replace('https', 'http')} />
          </div>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default CarouselCustom;
