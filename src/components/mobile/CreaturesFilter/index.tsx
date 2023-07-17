import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import CreaturesTab from "../CreaturesTab";
import styled from "styled-components";
import AppHeader from "../AppHeader";
import CloseIcon from "@mui/icons-material/Close";
import { BodyText1 } from "@/components/base/baseComponent";
import { useAppSelector } from "@/container/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleFilter } from "@/container/classify/actions";

const CreaturesFilterContainer = styled("div")`
  padding: 1em 4vh;
`;

const CustomDraw = styled(Drawer)`
  .MuiPaper-root.MuiPaper-elevation {
    background: ${(props) => props.theme?.colors.bg};
  }
`;

type TProps = {
  closeFilter: any;
};

const CreaturesFilter = (props: TProps) => {
  const dispatch = useDispatch();
  const { closeFilter } = props;
  const isShowFilter = useAppSelector(state => state.classifyReducer.isShowFilter);

  return (
    <>
      <CustomDraw anchor="top" open={isShowFilter} sx={{}} onClose={() => dispatch(toggleFilter())}>
        <AppHeader title="Thay doi tim kiem">
          <Button variant="outlined" onClick={closeFilter}>
            <BodyText1 className="under-line">Dong</BodyText1>
          </Button>
        </AppHeader>
        <CreaturesFilterContainer>
          <CreaturesTab showFilter={isShowFilter} />
        </CreaturesFilterContainer>
      </CustomDraw>
    </>
  );
};

export default CreaturesFilter;
