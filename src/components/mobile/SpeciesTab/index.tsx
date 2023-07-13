import { styled } from "styled-components";
import CreaturesTab from "../CreaturesTab";

const Container = styled("div")`
  padding: 0 4vw;
  background: linear-gradient(
    ${({ theme }) => theme?.colors.primary} 50%,
    rgb(255, 255, 255) 50%
  );
`;

export default function SpeciesTab(props: any) {
  return (
    <Container>
      <div>
        <CreaturesTab showFilter={props.openFilter} />
      </div>
    </Container>
  );
}
