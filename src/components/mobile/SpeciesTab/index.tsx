import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "styled-components";
import PetsIcon from '@mui/icons-material/Pets';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import ParkIcon from '@mui/icons-material/Park';

const Container = styled("div")`
  padding: 0 4vw;
  background: linear-gradient(${({ theme }) => theme?.colors.primary} 50%, rgb(255, 255, 255) 50%);
`;

const TabsCustom = styled(Tabs)`
  background: ${({ theme }) => theme?.colors.white};
  border: 2px solid rgb(232, 237, 241);
  border-radius: 1.14286rem;

  button {
    width: 30%;
  }
`

export default function SpeciesTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <div>
      <TabsCustom
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
        centered
      >
        <Tab icon={<PetsIcon />} label="Dong vat" />
        <Tab icon={<ParkIcon />} label="Thuc vat" />
        <Tab icon={<EmojiNatureIcon />} label="Con trung" />
      </TabsCustom>
      </div>
      
    </Container>
  );
}
