import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { BodyText1, LightText, Title3 } from "@/components/base/baseComponent";
import CustomImage from "@/components/base/CustomImage";
import EditIcon from "@mui/icons-material/Edit";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import { TPost } from "@/api/type";
import { timeSince } from "@/utils/timeSince";

const PostItemContainer = styled("div")`
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: flex-start;
  margin-bottom: 10px;
  background: ${props => props.theme?.colors.white};

  .like-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    button {
      background: ${({ theme }) => theme?.NEUTRAL?.LIGHT_DISABLE};
    }
  }

  .content {
    width: 100%;
    .image {
      position: relative;
      width: 100%;
      height: 280px;
      img {
        object-fit: cover;
      }
    }

    .action {
      margin-top: 5px;
      display: flex;
      flex-direction: row;
      gap: 5px;
    }

    .time-line {
      display: flex;
      flex-direction: row;
      align-items: center;

      .dot {
        height: 5px;
        width: 5px;
        margin: 0 5px;
        background-color: ${({ theme }) => theme?.NEUTRAL?.DARK};
        border-radius: 50%;
        display: inline-block;
      }
    }
  }
`;

const Title3Custom = styled(Title3)`
  color: ${(props) => props.theme.colors.dark};
`;

const PostItem = ({ post }: {post: TPost }) => {
  const asset = post?.assets?.find(item => item.url?.includes('https'));

  return (
    <PostItemContainer>
      <div className="like-box">
        <IconButton
          size="medium"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={() => {}}
          color="inherit"
        >
          <FavoriteIcon />
        </IconButton>
        <BodyText1>100</BodyText1>
      </div>
      <div className="content">
        <div className="image">
          <CustomImage
            src={asset?.url?.replace('https', 'http')}
            alt="300"
            layout="fill"
          />
        </div>
        <div className="action">
          <ShareOutlinedIcon sx={{ width: "15px" }} />{" "}
          <LightText> chia se</LightText>
          <ModeCommentOutlinedIcon sx={{ width: "15px" }} />{" "}
          <LightText> 12</LightText>
        </div>
        <Title3Custom>{post?.title}</Title3Custom>
        <div className="time-line">
          <EditIcon sx={{ marginRight: "5px", width: "15px" }} />{" "}
          <LightText>viet boi Vncreatures</LightText>
          <span className="dot"></span>
          <LightText>{timeSince(post.updated_at)}</LightText>
        </div>
      </div>
    </PostItemContainer>
  );
};

export default PostItem;
