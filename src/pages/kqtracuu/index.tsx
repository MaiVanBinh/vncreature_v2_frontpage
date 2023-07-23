/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from "react";
import styled from "styled-components";
import AppHeader from "@/components/mobile/AppHeader";
import SpeciesTab from "@/components/mobile/SpeciesTab";
import { BodyText1, Title3 } from "@/components/base/baseComponent";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/container/store";
import { changePage, getCreature, setLoading } from "@/container/creatures/actions";
import Pagination from "@mui/material/Pagination";
import ListCreatures from "@/components/mobile/ListCreatures";
import { useRouter } from "next/router";
import CreaturesFilter from "@/components/mobile/CreaturesFilter";
import FilterListIcon from "@mui/icons-material/FilterList";
import Button from "@mui/material/Button";
import {
  getClassify,
  syncToEditFilter,
  toggleFilter,
} from "@/container/classify/actions";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckIcon from "@mui/icons-material/Check";
import { FILTER_BY } from "@/utils/constants";

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

const FilterByContainer = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
`;

const SearchResult = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { listCreatures, totalPage, currentPage, loading } = useAppSelector(
    (state) => state.creaturesReducer
  );

  const tab = useAppSelector((state) => state.classifyReducer.filterMain.tab);

  const { filter } = useAppSelector(
    (state) => state.classifyReducer.filterMain
  );

  useEffect(() => {
    dispatch(setLoading(true))
    dispatch(getCreature({ ...filter, specie: tab, page: currentPage }));
  }, [currentPage]);

  useEffect(() => {
    dispatch(getClassify(tab));
    dispatch(setLoading(true))
    dispatch(getCreature({ specie: tab, page: 1 }));
  }, [tab]);

  const toggleFilterHandler = () => {
    dispatch(toggleFilter());
    dispatch(syncToEditFilter());
  };

  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  const changePageHandler = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(changePage(value));
    // changePage
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const checkFilterNotEmpty = useCallback(() => {
    if (
      (filter.classify?.name && filter.classify.value?.length > 0) ||
      filter.isRedbook ||
      filter.keyword
    ) {
      return true;
    }
    return false;
  }, [filter]);

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
      <CreaturesFilter closeFilter={() => toggleFilterHandler()} />
      <SpeciesTab openFilter={false} />
      <IntroductionInfo>
        <BodyText1>(Hơn 2000 loài thuộc các họ, bộ, nhóm khác nhau)</BodyText1>
        <BodyText1>Cập nhật 08/03/2022</BodyText1>
      </IntroductionInfo>

      <SearchResultContainer>
        {checkFilterNotEmpty() && (
          <FilterByContainer>
            <List>
              <Title3>Loc theo:</Title3>
              {filter?.keyword && (
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <BodyText1>
                        Tu khoa:{" "}
                        <span className="text-bold">{filter?.keyword}</span>
                      </BodyText1>
                    }
                  />
                </ListItem>
              )}
              {filter?.classify?.name && filter?.classify?.value?.length > 0 && (
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <BodyText1>
                        {FILTER_BY[filter?.classify?.name].label}:{" "}
                        <span className="text-bold">{filter?.classify?.value?.map(item => item.name_vn)?.join(', ')}</span>
                      </BodyText1>
                    }
                  />
                </ListItem>
              )}
              {filter?.isRedbook && (
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <BodyText1>
                        Chi thuoc sach do
                      </BodyText1>
                    }
                  />
                </ListItem>
              )}
            </List>
          </FilterByContainer>
        )}

        {listCreatures && <ListCreatures creatures={listCreatures} loading={loading} />}
        <Pagination
          count={totalPage}
          page={currentPage}
          onChange={changePageHandler}
        />
      </SearchResultContainer>
    </>
  );
};

export default SearchResult;
