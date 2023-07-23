import { styled } from "styled-components";

import Creature from "../Creature";
import { Divider } from "@mui/material";
import { ContainerBase } from "@/components/base/baseComponent";
import { TCreature } from "@/api/type";
import CreatureSkeleton from "../CreatureSkeleton";

const ListContainer = styled(ContainerBase)<{isDetailPage?: boolean}>`
  width: 100%;
  
  ${(props) => props.isDetailPage ? 'padding: 0px !important;' : 'margin-top: 10px;padding: 10px 20px;'}
  background: ${(props) => props.theme?.colors?.white};
  border-radius: 10px;
`;

const ListCreatures = ({
  creatures,
  loading,
  isDetailPage,
}: {
  creatures: TCreature[];
  loading: boolean;
  isDetailPage?: boolean;
}) => {
  return (
    <ListContainer isDetailPage={isDetailPage}>
      {loading ? (
        <CreatureSkeleton />
      ) : (
        creatures?.map((item, idx) => (
          <div key={item.id}>
            <Creature creature={item} />
            {idx !== creatures?.length - 1 && (
              <Divider
                sx={{ borderStyle: "dashed", borderBottomWidth: "unset" }}
              />
            )}
          </div>
        ))
      )}
    </ListContainer>
  );
};

export default ListCreatures;
