import { styled } from "styled-components";
import { ContainerBase } from "@/components/base/baseComponent";
import TitleList from "@/components/base/Title";
import ArticleItem from "../ArticleItem";

const Container = styled(ContainerBase)``;
const ListContainer = styled(ContainerBase)`
  margin-top: 10px;
  padding: 10px 0px; 
  border-radius: 10px;
`;

const Articles = () => {
  return (
    <Container>
      <TitleList title="Bai viet" />
      <ListContainer>
        <ArticleItem title="aosidjnaois" image="http://www.vncreatures.net/forumpic/hdh01.jpg" />
        <ArticleItem title="aosidjnaois" image="http://www.vncreatures.net/forumpic/hdh01.jpg" />
        <ArticleItem title="aosidjnaois" image="http://www.vncreatures.net/forumpic/hdh01.jpg" />
      </ListContainer>
    </Container>
  );
};

export default Articles;
