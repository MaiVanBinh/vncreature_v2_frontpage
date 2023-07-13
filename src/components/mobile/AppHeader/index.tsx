import { Button, IconButton } from "@mui/material";
import { styled } from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FilterListIcon from "@mui/icons-material/FilterList";
import { BodyText1 } from "@/components/base/baseComponent";

const Container = styled("div")`
  width: 100%;
  height: 70px;
  background: ${({ theme }) => theme?.colors.primary};
  padding: 10px 20px;
  border: none;
  svg {
    fill: #fff;
  }
  display: flex;
  justify-content: space-between;
  button {
    width: unset !important;
    color: ${({ theme }) => theme?.colors.white};
    border: none;
    &:hover {
      border: none;
    }
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    &.under-line {
      text-decoration: underline;
    }
  }
  color: ${({ theme }) => theme?.colors.white};
`;

type TProps = {
  backClick?: any;
  isIcon?: boolean;
  title?: string;
  rightTitle?: string;
  children?: any;
};

const AppHeader = (props: TProps) => {
  return (
    <Container>
      {props.isIcon ? (
        <IconButton onClick={props.backClick}>
          <ArrowBackIcon />
        </IconButton>
      ) : (
        <BodyText1>{props.title}</BodyText1>
      )}
      {props.children}
    </Container>
  );
};

export default AppHeader;
