import { styled } from "styled-components";
import { ContainerBase } from "@/components/base/baseComponent";
import Creature from "../Creature";
import { Divider } from "@mui/material";
import TitleList from "@/components/base/Title";
import { TCreature } from "@/api/type";

const Container = styled(ContainerBase)``;
const ListContainer = styled(ContainerBase)`
  margin-top: 10px;
  padding: 10px 20px;
  background: ${(props) => props.theme?.colors?.white};
  border-radius: 10px;
`;

const RedBookList = ({ redbookData }: { redbookData: TCreature[] }) => {
  return (
    <Container>
      <TitleList title="Dong vat sach do" />
      <ListContainer>
        {redbookData?.map((item) => (
          <div key={item.id}>
            <Creature
              creature={item}
            />
            <Divider
              sx={{ borderStyle: "dashed", borderBottomWidth: "unset" }}
            />
          </div>
        ))}
      </ListContainer>
    </Container>
  );
};

export default RedBookList;
