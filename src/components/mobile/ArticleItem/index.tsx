import { TPost } from "@/api/type";
import { BodyText1, Title3 } from "@/components/base/baseComponent";
import Image from "next/image";
import { styled } from "styled-components";
import Chip from '@mui/material/Chip';

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
const ChipCustom = styled(Chip)`
  border-radius: unset;
`

const Title3Custom = styled(Title3)`
  color: ${props => props.theme.colors.dark}
`

const ArticleItem = ({ post }: { post: TPost; }) => {
  const image = post.assets?.[0].url?.replace('https', 'http');

  return (
    <ContentImageContainer>
      <ContentContainer>
        <ChipCustom label={post?.categoryBelong?.name_vn} variant="outlined" />
        <Title3Custom>{post.title}</Title3Custom>
        <BodyText1Custom>
            {post.description}
        </BodyText1Custom>
        <>Xem Them</>
      </ContentContainer>

      <ImageArticleItemContainer>
        <Image src={image} alt={post.title} width="100" height="100" />
      </ImageArticleItemContainer>
      
    </ContentImageContainer>
  );
};

export default ArticleItem;
