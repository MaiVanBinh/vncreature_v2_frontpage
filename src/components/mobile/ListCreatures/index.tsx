import { styled } from "styled-components";

import Creature from "../Creature";
import { Divider } from "@mui/material";
import { ContainerBase } from "@/components/base/baseComponent";
import { TCreature } from "@/api/type";

const ListContainer = styled(ContainerBase)`
  margin-top: 10px;
  padding: 10px 20px;
  background: ${(props) => props.theme?.colors?.white};
  border-radius: 10px;
`;

const ListCreatures = ({ creatures }: { creatures: TCreature[] }) => {
  return (
    <ListContainer>
      {creatures?.map((item) => (
        <div key={item.id}>
          <Creature creature={item} />
          <Divider sx={{ borderStyle: "dashed", borderBottomWidth: "unset" }} />
        </div>
      ))}
    </ListContainer>
  );
};

export default ListCreatures;
