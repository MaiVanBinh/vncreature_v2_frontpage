import { BodyText1, Title3 } from "@/components/base/baseComponent";
import { styled } from "styled-components";
import { TCreature } from "@/api/type";
import CustomImage from "@/components/base/CustomImage";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setCurrentCreature } from "@/container/creatures/actions";
import useTrans from "@/hooks/useTrans";

const CreatureContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme?.colors?.white};
`;

const ContentImageContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 10px;
  background: ${(props) => props.theme?.colors?.white};
`;

const ImageCreatureContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
`;

const ContentContainer = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconContentContainer = styled("div")``;

const BodyText1Custom = styled("span")`
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  color: ${(props) => props.theme.colors.artyClickBlue};
`;

const Creature = ({ creature }: { creature: TCreature }) => {
  const { t } = useTrans();
  const image = creature?.assets?.find((item) => item.url === creature.avatar);
  const router = useRouter();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    router.push(`/sinh-vat/${creature.id}`);
    dispatch(setCurrentCreature(creature));
  };

  return (
    <CreatureContainer onClick={onClickHandler}>
      <ContentImageContainer>
        <ImageCreatureContainer>
          <CustomImage
            src={creature.avatar?.replace("https", "http")}
            alt={creature.name_vn}
            width="300"
            height="250"
          />
        </ImageCreatureContainer>
        <ContentContainer>
          <Title3>{creature.name_vn}</Title3>
          <BodyText1>
            {t._title.latinName}:
            <BodyText1Custom>{creature.name_latin}</BodyText1Custom>
          </BodyText1>
          <BodyText1>
            <b>{t._title.imageSource}</b>: {image?.author_name}
          </BodyText1>
        </ContentContainer>
      </ContentImageContainer>
    </CreatureContainer>
  );
};

export default Creature;
