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

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const ButtonGroupContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type TProps = {
  showFilter?: boolean;
};

const CreaturesTab = (props: TProps) => {
  const { showFilter } = props;
  const [value, setValue] = React.useState(0);
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChangeInput = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeCheck = () => {};

  return (
    <Container isBorder={true}>
      <TabsCustom
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
        centered
        isBorder={!showFilter}
      >
        <Tab icon={<PetsIcon />} label="Dong vat" />
        <Tab icon={<ParkIcon />} label="Thuc vat" />
        <Tab icon={<EmojiNatureIcon />} label="Con trung" />
      </TabsCustom>
      {showFilter && (
        <FilterContentContainer>
          <TextField
            id="standard-basic"
            label="Nhap tu khoa"
            variant="outlined"
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
            <InputLabel id="demo-multiple-checkbox-label">
              Lop (class)
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChangeInput}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            sx={{
              width: "100%",
              marginTop: "20px",
            }}
          >
            <InputLabel id="demo-multiple-checkbox-label">
              Lop (class)
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChangeInput}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            sx={{
              width: "100%",
              marginTop: "20px",
            }}
          >
            <InputLabel id="demo-multiple-checkbox-label">
              Lop (class)
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChangeInput}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <CheckBoxContainer>
            <Checkbox
              checked={true}
              onChange={handleChangeCheck}
              inputProps={{ "aria-label": "controlled" }}
            />
            <BodyText1>Loai thuoc sach do</BodyText1>
          </CheckBoxContainer>
          <ButtonGroupContainer>
            <ButtonContainer variant="contained" className="btn-search">
              Tim Kiem
            </ButtonContainer>
            <ButtonContainer variant="outlined" className="btn-search">
              Xoa Loc
            </ButtonContainer>
          </ButtonGroupContainer>
        </FilterContentContainer>
      )}
    </Container>
  );
};

export default CreaturesTab;
