import { Button, IconButton } from "@mui/material";
import { styled } from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FilterListIcon from '@mui/icons-material/FilterList';

const Container = styled("div")`
  width: 100%;
  height: 70px;
  background: ${({ theme }) => theme?.colors.primary};
  padding: 10px 10px;
  border: none;
  svg {
    fill: #fff;
  }
  display: flex;
  justify-content: space-between;
  button {
    color:  ${({ theme }) => theme?.colors.white};
    border: none;
    &:hover {
      border: none;
    }
  }
  color:  ${({ theme }) => theme?.colors.white};
`;

const AppHeader = () => {
  return (
    <Container>
      <IconButton>
        <ArrowBackIcon />
      </IconButton>
      <Button variant="outlined" startIcon={<FilterListIcon />}>
        Bo Loc
      </Button>
    </Container>
  );
};

export default AppHeader;
