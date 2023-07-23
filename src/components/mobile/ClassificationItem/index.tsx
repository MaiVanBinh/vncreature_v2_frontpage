import { BodyText1, LightText } from "@/components/base/baseComponent";
import Grid from "@mui/material/Unstable_Grid2";

const ClassificationItem = ({ title, value}: { title: string, value?: string}) => {
  return (
    <Grid container sx={{
      padding: '10px 0'
    }}>
      <Grid xs={4}>
        <LightText>
          {title}
        </LightText>
      </Grid>
      <Grid xs={8}>
        <BodyText1>{value}</BodyText1>
      </Grid>
    </Grid>
  );
};

export default ClassificationItem;
