import Pagination from "@mui/material/Pagination";
import styled from "styled-components";

type TProps = {
  totalPage: number;
  currentPage: number;
  changePageHandler: any;
};
const PaginationContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const CustomPagination = (props: TProps) => {
  const { totalPage, currentPage, changePageHandler } = props;
  console.log('totalPage', totalPage)
  return totalPage > 1 ? (
    <PaginationContainer>
      <Pagination
        count={totalPage}
        page={currentPage}
        onChange={changePageHandler}
      />
    </PaginationContainer>
  ) : null;
};

export default CustomPagination;
