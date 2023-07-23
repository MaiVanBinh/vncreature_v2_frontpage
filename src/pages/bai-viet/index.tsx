import AppHeader from "@/components/mobile/AppHeader";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";

import { useRouter } from "next/router";

import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import PostCategoryTab from "@/components/mobile/PostCategoryTab";
import PostItem from "@/components/mobile/PostItem";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPostCategories } from "@/container/postCategory/actions";
import { useAppSelector } from "@/container/store";
import { changePostPage, getPosts } from "@/container/posts/actions";
import Footer from "@/components/mobile/Footer";
import { isBrowser } from "@/utils/isBrowser";
import CustomPagination from "@/components/base/CustomPagination";

const PostsContainer = styled("div")`
  background: ${(props) => props.theme?.colors.bg};
`;
const ListPost = styled("div")`
  background: ${(props) => props.theme?.colors.bg};
  margin-top: 15px;
  min-height: 400px;
`;

const Posts = () => {
  const router = useRouter();
  const currentCategory = useAppSelector(
    (state) => state.pCategoryReducer.currentCategory
  );
  const { data, totalPage, currentPage } = useAppSelector((state) => state.postsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostCategories());
  }, []);

  useEffect(() => {
    dispatch(getPosts({ category: currentCategory, page: currentPage }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory, currentPage]);

  const changePageHandler = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(changePostPage(value));
    // changePage
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PostsContainer>
      <AppHeader
        isIcon
        backClick={() => router.push("/tracuu")}
        title="Bai viet"
      >
        <Typography
          variant="h5"
          noWrap
          component="p"
          sx={{
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Bai Viet
        </Typography>
        <IconButton size="large" aria-label="search" color="inherit">
          <SearchIcon />
        </IconButton>
      </AppHeader>
      <PostCategoryTab />
      <ListPost>
        {data?.map((item: any) => (
          <PostItem key={item.id} post={item} />
        ))}
      </ListPost>
      {totalPage > 1 && <CustomPagination totalPage={totalPage} currentPage={currentPage} changePageHandler={changePageHandler} />}
      <Footer />
    </PostsContainer>
  );
};
export default Posts;
