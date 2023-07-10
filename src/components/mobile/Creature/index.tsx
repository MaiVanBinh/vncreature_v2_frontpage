import { BodyText1, Title3 } from "@/components/base/baseComponent";
import Image from "next/image";
import SavedSearchSharpIcon from '@mui/icons-material/SavedSearchSharp';
import { styled } from "styled-components";

const CreatureContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: ${(props) => props.theme?.colors?.white};
`;

const ContentImageContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 10px;
  background: ${(props) => props.theme?.colors?.white};
`;

const ImageCreatureContainer = styled("div")`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 20px;
`;

const ContentContainer = styled("div")``;

const IconContentContainer = styled("div")``;

const BodyText1Custom = styled("span")`
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  color: ${props => props.theme.colors.artyClickBlue}
`;


const Creature = ({ title, image }: { title: string; image: string }) => {
  return (
    <CreatureContainer>
      <ContentImageContainer>
        <ImageCreatureContainer>
          <Image src={image} alt={title} width="100" height="100" />
        </ImageCreatureContainer>
        <ContentContainer>
          <Title3>Rắn lá khô thường</Title3>
          <BodyText1>
            Ten latin:
            <BodyText1Custom>Rắn lá khô thường</BodyText1Custom>
          </BodyText1>
          <BodyText1>
            <b>Hình ảnh</b>: Phùng Mỹ Trung
          </BodyText1>
        </ContentContainer>
      </ContentImageContainer>
      <IconContentContainer>
        <SavedSearchSharpIcon />
      </IconContentContainer>
    </CreatureContainer>
  );
};

export default Creature;
