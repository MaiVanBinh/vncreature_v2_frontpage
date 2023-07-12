import { styled } from "styled-components";
import { ContainerBase } from "@/components/base/baseComponent";

import TitleList from "@/components/base/Title";
import { TCreature } from "@/api/type";
import ListCreatures from "../ListCreatures";

const Container = styled(ContainerBase)``;

const RedBookList = ({ redbookData }: { redbookData: TCreature[] }) => {
  return (
    <Container>
      <TitleList title="Dong vat sach do" />
      <ListCreatures creatures={redbookData} />
    </Container>
  );
};

export default RedBookList;
