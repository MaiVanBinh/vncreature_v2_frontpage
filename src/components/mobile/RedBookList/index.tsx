import { styled } from "styled-components";
import { ContainerBase } from "@/components/base/baseComponent";

import TitleList from "@/components/base/Title";
import { TCreature } from "@/api/type";
import ListCreatures from "../ListCreatures";

const Container = styled(ContainerBase)`
  // margin: 10px 0;
`;

const RedBookList = ({ redbookData, title }: { redbookData: TCreature[], title: string }) => {
  return (
    <Container>
      <TitleList title={title} />
      <ListCreatures creatures={redbookData} />
    </Container>
  );
};

export default RedBookList;
