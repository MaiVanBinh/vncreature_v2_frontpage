import { BodyText1, Title3 } from "@/components/base/baseComponent";
import Image from "next/image";
import { styled } from "styled-components";

const ContentImageContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding: 20px 15px;
  background: ${(props) => props.theme?.colors?.white};  
  // max-height: 150PX;
  OVERFLOW: hidden;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const ImageArticleItemContainer = styled("div")`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
`;

const ContentContainer = styled("div")`
  max-width: 70%;
  a
`;

const BodyText1Custom = styled(BodyText1)`
  white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 5px;
    color: ${props => props.theme.colors.darkLight};

    @supports (-webkit-line-clamp: 2) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
`

const Title3Custom = styled(Title3)`
  color: ${props => props.theme.colors.dark}
`

const ArticleItem = ({ title, image }: { title: string; image: string }) => {
  return (
    <ContentImageContainer>
      <ContentContainer>
        <Title3Custom>NGẨN NGƠ HƯƠNG SẮC MUỒNG HOA ĐÀO</Title3Custom>
        <BodyText1Custom>
            Khi con chim Chơ rao - Pycnonotus jocosus thức dậy sớm hơn thường ngày
            để cất lên bài ca vang vọng, gọi tình. Cũng là lúc những cánh rừng ở
            miền Đông nam bộ chuẩn bị khoác lên mình một chiếc áo mới. Trên cây
            Muồng hoa đào Cassia javanica khẳng khiu, trơ trọi, những chiếc mầm
            sống khẽ vươn mình cùng đất trời trong thời khắc giao mùa. Từng đàn
            chim Phí Gracul
        </BodyText1Custom>
      </ContentContainer>

      <ImageArticleItemContainer>
        <Image src={image} alt={title} width="100" height="100" />
      </ImageArticleItemContainer>
    </ContentImageContainer>
  );
};

export default ArticleItem;
