import PetsIcon from "@mui/icons-material/Pets";
import styled from "styled-components";
import ArticleSharpIcon from "@mui/icons-material/ArticleSharp";
import { Title3 } from "@/components/base/baseComponent";
import Grid from "@mui/material/Grid";
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import ParkIcon from '@mui/icons-material/Park';
import CycloneIcon from '@mui/icons-material/Cyclone';
import { useRouter } from "next/router";
import useTrans from "@/hooks/useTrans";

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
  text-align: center;

  p {
    margin-top: 4px;
  }
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
  click?: any
};

const ServiceItem = (props: Props) => (
  <ServicesItem onClick={() => props.click()}>
    <IconItem>{props.children}</IconItem>

    <Title3>
      {props.title}
    </Title3>
  </ServicesItem>
);

const HomePageServices = () => {
  const router = useRouter()
  const { t } = useTrans();

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
          <ServiceItem title={t.homepage.creature} click={() => router.push('/kqtracuu')}>
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
          <ServiceItem title={t.homepage.news} click={() => router.push('/bai-viet')}>
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
          <ServiceItem title={t.homepage.dictionary}>
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
          <ServiceItem title={t.homepage.woodForm}>
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
          <ServiceItem title={t.homepage.nationalPark}>
            <ParkIcon />
          </ServiceItem>
        </Grid>
      </Grid>
    </ServicesContainer>
  );
};

export default HomePageServices;
