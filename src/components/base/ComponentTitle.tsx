import { Divider } from "@mui/material";
import { Title3 } from "./baseComponent";
import { styled } from "styled-components";

type TProps = {
  title: string;
  children?: any;
};

const ComponentTitleContainer = styled("div")`
  display: flex;
  justify-content: stretch;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const ComponentTitle = (props: TProps) => {
  const { title, children } = props;
  return (
    <ComponentTitleContainer>
      {children}
      <Title3>{title}</Title3>
    </ComponentTitleContainer>
  );
};

export default ComponentTitle;
