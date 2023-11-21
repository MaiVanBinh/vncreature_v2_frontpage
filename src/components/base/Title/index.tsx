import KeyboardArrowRightSharpIcon from "@mui/icons-material/KeyboardArrowRightSharp";
import { BodyText1, Title2 } from "@/components/base/baseComponent";
import styled from "styled-components";
import useTrans from "@/hooks/useTrans";

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const SeeAll = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: 700;
  }

  svg {
    path {
      fill: ${props => props.theme.colors.iconBg};
    } 
  }
`

const BodyText1Custom = styled(BodyText1)`
  color: ${props => props.theme.colors.iconBg};
`

const TitleList = ({ title }: { title: string }) => {
  const { t } = useTrans();
  return (
      <Container>
        <Title2>{title}</Title2>
        <SeeAll>
          <BodyText1Custom>{t.homepage.all}</BodyText1Custom>
          <KeyboardArrowRightSharpIcon />
        </SeeAll>
      </Container>
  );
};

export default TitleList;
