import Image from "next/image";
import React from "react";

function CustomImage({ alt, ...props }: any) {
  const [src, setSrc] = React.useState(props.src);

  return (
    <Image
      {...props}
      src={src}
      alt={alt} // To fix lint warning
      onError={() => setSrc("http://www.vncreatures.net/images/img_blank.gif")}
    />
  );
}

export default CustomImage;
