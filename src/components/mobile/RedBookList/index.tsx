import { styled } from "styled-components";
import { ContainerBase } from "@/components/base/baseComponent";
import Creature from "../Creature";
import { Divider } from "@mui/material";
import TitleList from "@/components/base/Title";

const Container = styled(ContainerBase)``;
const ListContainer = styled(ContainerBase)`
  margin-top: 10px;
  padding: 10px 20px; 
  background: ${props => props.theme?.colors?.white};
  border-radius: 10px;
`;

const RedBookList = () => {
  return (
    <Container>
      <TitleList title="Dong vat sach do"/>
      <ListContainer>
        <Creature title="aosidjnaois" image="http://www.vncreatures.net/forumpic/hdh01.jpg" />
        <Divider sx={{borderStyle:'dashed', borderBottomWidth: "unset"}} />
        <Creature title="aosidjnaois" image="http://www.vncreatures.net/forumpic/hdh01.jpg" />
        <Divider sx={{borderStyle:'dashed', borderBottomWidth: "unset"}} />
        <Creature title="aosidjnaois" image="http://www.vncreatures.net/forumpic/hdh01.jpg" />
      </ListContainer>
    </Container>
  );
};

export default RedBookList;
