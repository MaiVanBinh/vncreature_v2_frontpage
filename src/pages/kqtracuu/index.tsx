import { useState } from "react";
import styled from "styled-components";
import AppHeader from "@/components/mobile/AppHeader";
import SpeciesTab from "@/components/mobile/SpeciesTab";
import { BodyText1 } from "@/components/base/baseComponent";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/container/store";
import { useLayoutEffect } from "react";
import { getCreaturesRedbook } from "@/container/creatures/actions";
import BasicPagination from "@/components/mobile/BasicPagination";
import ListCreatures from "@/components/mobile/ListCreatures";
import { useRouter } from "next/router";
import CreaturesFilter from "@/components/mobile/CreaturesFilter";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Button } from "@mui/material";
import { getClassify } from "@/container/classify/actions";

const SearchResultContainer = styled("div")`
  padding: 1em 4vw;
  background: ${(props) => props.theme?.colors.bg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IntroductionInfo = styled("div")`
  text-align: center;
  padding: 10px 0;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 12px;
`;

const SearchResult = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [openFilter, setOpenFilter] = useState(false);

  const redbookData = useAppSelector(
    (state) => state.creaturesReducer.redbookData
  );

  const tab = useAppSelector(
    (state) => state.classifyReducer.tab
  );

  useLayoutEffect(() => {
    dispatch(getCreaturesRedbook({}));
    dispatch(getClassify(tab));
  }, []);
  const closeFilterHandler = () => {
    setOpenFilter(false);
  };
  return (
    <>
      <AppHeader isIcon backClick={() => router.push("/tracuu")}>
        <Button
          variant="outlined"
          startIcon={<FilterListIcon />}
          onClick={() => setOpenFilter(true)}
        >
          Bo Loc
        </Button>
      </AppHeader>
      <CreaturesFilter
        openFilter={openFilter}
        closeFilter={() => closeFilterHandler()}
      />
      <SpeciesTab openFilter={false} />
      <IntroductionInfo>
        <BodyText1>(Hơn 2000 loài thuộc các họ, bộ, nhóm khác nhau)</BodyText1>
        <BodyText1>Cập nhật 08/03/2022</BodyText1>
      </IntroductionInfo>
      <SearchResultContainer>
        {redbookData.animals && (
          <ListCreatures creatures={redbookData.animals} />
        )}
        <BasicPagination />
      </SearchResultContainer>
    </>
  );
};

export default SearchResult;
