import { styled } from "styled-components";
import { ContainerBase } from "@/components/base/baseComponent";
import TitleList from "@/components/base/Title";
import ArticleItem from "../ArticleItem";
import { TPost } from "@/api/type";

const Container = styled(ContainerBase)``;
const ListContainer = styled(ContainerBase)`
  margin-top: 10px;
  padding: 10px 0px;
  border-radius: 10px;
`;

const Articles = ({ posts }: { posts: TPost[] }) => {
  return (
    <Container>
      <TitleList title="Bai viet" />
      <ListContainer>
        {posts?.map((item) => (
          <ArticleItem post={item} key={item.id}/>
        ))}
      </ListContainer>
    </Container>
  );
};

export default Articles;
