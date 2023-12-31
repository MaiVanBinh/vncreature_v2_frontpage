import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "styled-components";
import PetsIcon from "@mui/icons-material/Pets";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import ParkIcon from "@mui/icons-material/Park";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import ModeIcon from "@mui/icons-material/Mode";
import { BodyText1 } from "@/components/base/baseComponent";
import AppHeader from "../AppHeader";
import { TFilterData } from "@/container/classify/reducer";
import { useAppSelector } from "@/container/store";
import { TGroup } from "@/api/type";
import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { FILTER_BY } from "@/utils/constants";
import { useDispatch } from "react-redux";
import { changeClassifyType, changeKeywordFilter, changeTab, handlerCheckRedbook, removeFilter, syncFromEditFilter, toggleFilter } from "@/container/classify/actions";
import { changePage, getCreature, setLoading } from "@/container/creatures/actions";
import { get } from "lodash";

interface Props {
  isBorder: boolean;
}

const Container = styled("div")<Props>`
  background: ${({ theme }) => theme?.colors.white};
  border: ${(props) =>
    props?.isBorder ? "2px solid rgb(232, 237, 241)" : "none"};
  border-radius: 1.14286rem;

  button {
    width: 30%;
  }

  input {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.25px;
    color: rgb(20, 20, 20) !important;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  label {
    font-size: 18px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.1px;
    color: rgb(133, 133, 133) !important;
  }
`;

const TabsCustom = styled(Tabs)<Props>`
  background: ${({ theme }) => theme?.colors.white};
  border: ${(props) =>
    props?.isBorder ? "2px solid rgb(232, 237, 241)" : "none"};
  ${(props) =>
    !props?.isBorder ? "border-bottom: 2px solid rgb(232, 237, 241);" : "none"};
  ${(props) => (!props?.isBorder ? "none" : "border-radius: 1.14286rem;")};

  button {
    width: 30%;
  }
`;

const FilterContentContainer = styled("div")`
  padding: 20px 20px;
`;

const CheckBoxContainer = styled("div")`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;

  span {
    padding: 0;
    margin-right: 10px;
  }
`;

const ButtonContainer = styled(Button)`
  &.btn-search {
    width: 45% !important;
    margin-top: 20px;
    height: 50px;
  }
`;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const ButtonGroupContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type TProps = {
  showFilter?: boolean;
};

const CreaturesTab = (props: TProps) => {
  const dispatch = useDispatch();
  const { showFilter } = props;
  const [filterBy, setFilterBy] = React.useState(FILTER_BY.groups)
  const [filterDataId, setListFilterDataId] = React.useState<any>([])

  const classifyReducerTemp = useAppSelector(
    (state) => state.classifyReducer.tempFilter
  );

  const classifyReducer = useAppSelector(
    (state) => state.classifyReducer.filterMain
  );

  const  { tab, filterDataByAnimal: filterData } = showFilter ? classifyReducerTemp : classifyReducer;

  const mainFilter = showFilter ? classifyReducerTemp.filter : classifyReducer.filter;

  React.useEffect(() => {
    if(filterData && filterData?.groups) {
      setFilterBy(FILTER_BY.groups);
    }
  }, [filterData])

  const handleChangeFilterBy = (event: any) => {
    if (filterData) {
      switch(event.target.value) {
        case FILTER_BY.groups.value: {
          dispatch(changeClassifyType([], FILTER_BY.groups.value, showFilter))
          setFilterBy(FILTER_BY.groups);
          break;
        }
        case FILTER_BY.sets.value: {
          dispatch(changeClassifyType([], FILTER_BY.sets.value, showFilter))
          setFilterBy(FILTER_BY.sets);
          break;
        }
        case FILTER_BY.family.value: {
          dispatch(changeClassifyType([], FILTER_BY.family.value, showFilter))
          setFilterBy(FILTER_BY.family);
          break;
        }
        default: {
          dispatch(changeClassifyType([], FILTER_BY.groups.value, showFilter))
          setFilterBy(FILTER_BY.groups);
          break;
        }
      }
    }
    
    setListFilterDataId([]);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(removeFilter())
    dispatch(changePage(1));
    dispatch(changeTab(newValue, showFilter));
  };

  const handleChangeSelect = (event: SelectChangeEvent<typeof filterDataId>) => {
    const {
      target: { value },
    } = event;
    dispatch(changeClassifyType(value, filterBy.value, showFilter))
    setListFilterDataId(
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  const changeKeywordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newKeyword = event.target.value || '';
    dispatch(changeKeywordFilter(newKeyword, showFilter))
  }

  const handlerSearchClick = () => {
    dispatch(setLoading(true))
    dispatch(getCreature({ ...mainFilter, specie: tab, page: 1 }))
    dispatch(syncFromEditFilter())
    dispatch(toggleFilter())
    dispatch(changePage(1))
  }

  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(handlerCheckRedbook(event.target.checked, showFilter))
  };

  const removeFilterHandler = () => {
    dispatch(removeFilter(showFilter))
  }

  return (
    <Container isBorder={true}>
      <TabsCustom
        value={tab}
        onChange={handleChange}
        aria-label="icon label tabs example"
        centered
        isBorder={!showFilter}
      >
        <Tab icon={<PetsIcon />} label="Dong vat" value={1} />
        <Tab icon={<ParkIcon />} label="Thuc vat" value={2}  />
        <Tab icon={<EmojiNatureIcon />} label="Con trung" value={3} />
      </TabsCustom>
      {showFilter && (
        <FilterContentContainer>
          <TextField
            id="standard-basic"
            label="Nhap tu khoa"
            variant="outlined"
            value={mainFilter?.keyword}
            onChange={changeKeywordHandler}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ModeIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              width: "100%",
            }}
          />
          <FormControl
          sx={{
            width: "100%",
            marginTop: "20px",
          }}
          >
            <FormLabel id="demo-radio-buttons-group-label">Tim kiem theo</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={mainFilter.classify.value}
              name="radio-buttons-group"
              onChange={handleChangeFilterBy}
              value={mainFilter.classify.name}
            >
              <FormControlLabel value={FILTER_BY.groups.value} control={<Radio />} label="Lop" />
              <FormControlLabel value={FILTER_BY.sets.value} control={<Radio />} label="Bo" />
              <FormControlLabel value={FILTER_BY.family.value} control={<Radio />} label="Ho" />
            </RadioGroup>
          </FormControl>
          <FormControl
            sx={{
              width: "100%",
              marginTop: "20px",
            }}
          >
            <InputLabel id="demo-multiple-checkbox-label">
              {FILTER_BY[mainFilter.classify.name].label}
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={mainFilter.classify.value}
              onChange={handleChangeSelect}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.map((item: { name_vn: any; }) => item.name_vn).join(", ")}
              MenuProps={MenuProps}
            >
              {get(filterData, filterBy.value)?.map((item: any) => (
                <MenuItem key={item.id} value={item}>
                  <Checkbox checked={mainFilter.classify.value.findIndex((f: { id: any; }) => f.id === item.id) > -1} />
                  <ListItemText primary={item.name_vn} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          <CheckBoxContainer>
            <Checkbox
              checked={get(mainFilter, 'isRedbook')}
              onChange={handleChangeCheckBox}
              inputProps={{ "aria-label": "controlled" }}
            />
            <BodyText1>Loai thuoc sach do</BodyText1>
          </CheckBoxContainer>
          <ButtonGroupContainer>
            <ButtonContainer variant="outlined" className="btn-search" onClick={removeFilterHandler}>
              Xoa Loc
            </ButtonContainer>
            <ButtonContainer variant="contained" className="btn-search" onClick={handlerSearchClick}>
              Xac nhan
            </ButtonContainer>
          </ButtonGroupContainer>
        </FilterContentContainer>
      )}
    </Container>
  );
};

export default CreaturesTab;
