/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import styled from "styled-components";
import AppHeader from "@/components/mobile/AppHeader";
import SpeciesTab from "@/components/mobile/SpeciesTab";
import { BodyText1 } from "@/components/base/baseComponent";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/container/store";
import { changePage, getCreature } from "@/container/creatures/actions";
import Pagination from '@mui/material/Pagination';
import ListCreatures from "@/components/mobile/ListCreatures";
import { useRouter } from "next/router";
import CreaturesFilter from "@/components/mobile/CreaturesFilter";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Button } from "@mui/material";
import { getClassify, syncToEditFilter, toggleFilter } from "@/container/classify/actions";

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

  const { listCreatures, totalPage, currentPage } = useAppSelector(
    (state) => state.creaturesReducer
  );

  const tab = useAppSelector(
    (state) => state.classifyReducer.filterMain.tab
  );

  useEffect(() => {
    dispatch(getCreature({ specie: tab, page: currentPage }));
  }, [currentPage]);

  useEffect(() => {
    dispatch(getClassify(tab));
    dispatch(getCreature({ specie: tab, page: 1 }));
  }, [tab])

  const toggleFilterHandler = () => {
    dispatch(toggleFilter())
    dispatch(syncToEditFilter())
  }

  const changePageHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(changePage(value))
    // changePage
  }
  return (
    <>
      <AppHeader isIcon backClick={() => router.push("/tracuu")}>
        <Button
          variant="outlined"
          startIcon={<FilterListIcon />}
          onClick={() => toggleFilterHandler()}
        >
          Bo Loc
        </Button>
      </AppHeader>
      <CreaturesFilter
        closeFilter={() => toggleFilterHandler()}
      />
      <SpeciesTab openFilter={false} />
      <IntroductionInfo>
        <BodyText1>(Hơn 2000 loài thuộc các họ, bộ, nhóm khác nhau)</BodyText1>
        <BodyText1>Cập nhật 08/03/2022</BodyText1>
      </IntroductionInfo>
      <SearchResultContainer>
        {listCreatures && (
          <ListCreatures creatures={listCreatures} />
        )}
        <Pagination count={totalPage} page={currentPage} onChange={changePageHandler} />
      </SearchResultContainer>
    </>
  );
};

export default SearchResult;
