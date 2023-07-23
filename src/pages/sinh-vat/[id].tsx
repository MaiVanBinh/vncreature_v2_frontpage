import {
  BaseComponent,
  BodyText1,
  LightText,
  Title1,
  Title3,
} from "@/components/base/baseComponent";
import CarouselCustom from "@/components/mobile/CarouselCustom";
import { useAppSelector } from "@/container/store";
import { GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import { wrapper } from "./../../container/store";
import ComponentTitle from "@/components/base/ComponentTitle";
import SchoolIcon from "@mui/icons-material/School";
import ClassificationItem from "@/components/mobile/ClassificationItem";
import {
  ClassifyLabelEnum,
  getCreatures,
  getCreaturesById,
} from "@/api/creatures";
import { isEmpty } from "lodash";
import { Divider } from "@mui/material";
import FeedIcon from "@mui/icons-material/Feed";
import Footer from "@/components/mobile/Footer";
import Button from "@mui/material/Button";
import AppHeader from "@/components/mobile/AppHeader";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import { TCreature } from "@/api/type";
import ListCreatures from "@/components/mobile/ListCreatures";
import Typography from "@mui/material/Typography";

const CreatureDetailContainer = styled("div")`
  background: ${(props) => props.theme?.colors.bg};
`;

const Creature: NextPage = (props: any) => {
  const { creature: creatureProp, listCreature } = props;
  const router = useRouter();

  const creatureState = useAppSelector(
    (state) => state.creaturesReducer?.currentCreature
  );
  const creature = isEmpty(creatureProp) ? creatureState : creatureProp;

  return (
    <CreatureDetailContainer>
      <AppHeader isIcon backClick={() => router.push("/kqtracuu")}>
        <Typography
          variant="h5"
          noWrap
          component="p"
          sx={{
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Thong tin Chi Tiet
        </Typography>
      </AppHeader>
      <CarouselCustom listImage={creature?.assets} />
      <BaseComponent>
        <Title3>Ten viet nam: {creature?.name_vn}</Title3>
        <BodyText1>Ten latin: {creature?.name_latin}</BodyText1>
        <BodyText1>Cap do sach do: {creature?.redbook_level}</BodyText1>
      </BaseComponent>
      <BaseComponent>
        <ComponentTitle title="Phân loại học">
          <SchoolIcon />
        </ComponentTitle>
        <ClassificationItem
          title="Loai"
          value={creature?.speciesBelong?.name_vn}
        />
        <Divider sx={{ borderStyle: "solid", borderBottomWidth: "1px" }} />

        <ClassificationItem
          title="Lop"
          value={creature?.groupBelong?.name_vn}
        />
        <Divider sx={{ borderStyle: "solid", borderBottomWidth: "1px" }} />

        <ClassificationItem title="Bo" value={creature?.setBelong?.name_vn} />
        <Divider sx={{ borderStyle: "solid", borderBottomWidth: "1px" }} />

        <ClassificationItem
          title="Ho"
          value={creature?.familyBelong?.name_vn}
        />
      </BaseComponent>
      <BaseComponent>
        <ComponentTitle title="Thong tin">
          <FeedIcon />
        </ComponentTitle>

        {(creature?.description || "").trim() ? (
          <div
            dangerouslySetInnerHTML={{
              __html: creature.description?.replaceAll("<br />", ""),
            }}
          ></div>
        ) : (
          <LightText>* Hien dang cap nhap</LightText>
        )}
      </BaseComponent>

      <BaseComponent>
        <ComponentTitle title="Sinh vat lien quan">
          <Diversity2Icon />
        </ComponentTitle>
        <div>
          <ListCreatures
            creatures={listCreature}
            isDetailPage
            loading={false}
          />
        </div>
      </BaseComponent>
      <Footer />
    </CreatureDetailContainer>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context: GetServerSidePropsContext) => {
    const id = context.query.id;
    let creature = {} as TCreature;
    let listCreature = [];
    try {
      if (id && typeof id === "string" && !Number.isNaN(parseInt(id, 10))) {
        creature = (await getCreaturesById(parseInt(id, 10))) as TCreature;

        const res = await getCreatures({
          page: 1,
          specie: creature["species"],
          classify: {
            name: ClassifyLabelEnum.family,
            value: creature.familyBelong ? [creature.familyBelong] : [],
          },
          limit: 3,
        });
        listCreature = res?.data?.filter(
          (item: any) => item.id !== creature.id
        );
      }
    } catch (err) {
      console.log("getCreaturesById err", err);
    }
    return {
      props: {
        creature,
        listCreature,
      },
    };
  }
);

export default Creature;
