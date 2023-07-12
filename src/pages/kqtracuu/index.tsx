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
  const redbookData = useAppSelector(
    (state) => state.creaturesReducer.redbookData
  );
  useLayoutEffect(() => {
    dispatch(getCreaturesRedbook({}));
  }, []);

  return (
    <>
      <AppHeader />
      <SpeciesTab />
      <IntroductionInfo>
        <BodyText1>(Hơn 2000 loài thuộc các họ, bộ, nhóm khác nhau)</BodyText1>
        <BodyText1>Cập nhật 08/03/2022</BodyText1>
      </IntroductionInfo>
      <SearchResultContainer>
        {redbookData.animals && <ListCreatures creatures={redbookData.animals} />}
        <BasicPagination />
      </SearchResultContainer>
    </>
  );
};

export default SearchResult;
