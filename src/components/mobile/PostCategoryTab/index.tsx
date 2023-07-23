import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styled from "styled-components";
import { useAppSelector } from "@/container/store";
import { useDispatch } from "react-redux";
import { setPostCategory } from "@/container/postCategory/actions";
import { changePostPage } from "@/container/posts/actions";

const PostCategoryTabContainer = styled("div")`
  border: 2px solid rgb(232, 237, 241);
  background: ${(props) => props.theme?.colors?.white};
`;

export default function PostCategoryTab() {
  const { postCategory, currentCategory } = useAppSelector(
    (state) => state.pCategoryReducer
  );
  const dispatch = useDispatch();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(changePostPage(1));
    dispatch(setPostCategory(newValue));
  };

  return (
    <PostCategoryTabContainer>
      <Tabs
        value={currentCategory}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="scrollable auto tabs example"
      >
        {postCategory?.map((item: any) => (
          <Tab label={item.name_vn} value={item.id} key={item.id} />
        ))}
      </Tabs>
    </PostCategoryTabContainer>
  );
}
