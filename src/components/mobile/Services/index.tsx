import PetsIcon from "@mui/icons-material/Pets";
import styled from "styled-components";
import ArticleSharpIcon from "@mui/icons-material/ArticleSharp";
import { Title3 } from "@/components/base/baseComponent";
import Grid from "@mui/material/Grid";
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import ParkIcon from '@mui/icons-material/Park';
import CycloneIcon from '@mui/icons-material/Cyclone';

const ServicesContainer = styled("div")`
  display: flex;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.white};
  padding: 10px 0;
`;

const ServicesRowContainer = styled("div")`
  display: flex;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
  background: ${(props) => props.theme.colors.white};
  width: 100%;
`;

const ServicesItem = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
`;

const IconItem = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.iconBg};
  border-radius: 10px;
  padding: 10px;
  svg {
    fill: ${(props) => props.theme.colors.white};
    path {
      fill: ${(props) => props.theme.colors.white};
    }
  }
`;

type Props = {
  children: string | JSX.Element | JSX.Element[];
  title: string;
};

const ServiceItem = (props: Props) => (
  <ServicesItem>
    <IconItem>{props.children}</IconItem>

    <Title3
      sx={{
        marginTop: "4px",
        textAlign: "center",
      }}
    >
      {props.title}
    </Title3>
  </ServicesItem>
);

const HomePageServices = () => {
  return (
    <ServicesContainer>
      <Grid container>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ServiceItem title="Sinh vat">
            <PetsIcon />
          </ServiceItem>
        </Grid>

        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ServiceItem title="Bai viet">
            <ArticleSharpIcon />
          </ServiceItem>
        </Grid>

        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ServiceItem title="Tu Dien">
            <MultipleStopIcon />
          </ServiceItem>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ServiceItem title="Mau Go">
            <CycloneIcon />
          </ServiceItem>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ServiceItem title="Vuon quoc gia">
            <ParkIcon />
          </ServiceItem>
        </Grid>
      </Grid>
    </ServicesContainer>
  );
};

export default HomePageServices;
