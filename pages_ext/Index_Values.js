import { Box, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import GridContainer from "../components/grid/GridContainer";
import GridType5t7i from "../components/grid/GridType5t7i";
import GridCol from "../components/grid/GridCol";
import GridRow from "../components/grid/GridRow";
import LazyImage from "../components/img/LazyImage";
import TypoTitle from "../components/typo/TypoTitle";
import TypoText from "../components/typo/TypoText";

const useStyles = makeStyles({
  gutterTop: {
    marginTop: 16,
  },
  rowSpaceBottom: {
    marginBottom: 64,
  },
  cardNumber: {
    position: "absolute",
    right: 16,
    top: 0,
    opacity: 0.4,
  },
  cardTitle: {
    paddingRight: 24,
  },
});

const CardTitle = (props) => {
  const classes = useStyles();

  return (
    <Typography
      variant="h6"
      component="div"
      paragraph
      color="secondary"
      className={classes.cardTitle}
    >
      {props.children}
    </Typography>
  );
};

const CardText = (props) => (
  <Typography gutterBottom>{props.children}</Typography>
);

const CardNumber = (props) => {
  const classes = useStyles();

  return (
    <Typography variant="h2" component="div" className={classes.cardNumber}>
      {props.children}
    </Typography>
  );
};

const CardCol = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmOnly = useMediaQuery(theme.breakpoints.only("sm"));
  const isXsOnly = useMediaQuery(theme.breakpoints.only("xs"));
  const index = props.number + 2;
  const delay = isXsOnly ? index % 1 : isSmOnly ? index % 2 : index % 3;

  return (
    <GridCol md={4} sm={6} xs={12}>
      <Flip bottom delay={delay * 400}>
        <Box
          bgcolor="background.paper"
          boxShadow={2}
          p={2}
          className={classes.box}
          borderRadius={4}
        >
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.text}</CardText>
          {props.children}
          <CardNumber>{props.number}</CardNumber>
        </Box>
      </Flip>
    </GridCol>
  );
};

export default () => {
  const classes = useStyles();

  return (
    <Box>
      <GridContainer>
        <GridType5t7i
          text={
            <Fade bottom cascade>
              <TypoTitle color="secondary">Naše Hodnoty</TypoTitle>
              <TypoText>
                Každý, kdo jedná v zásadě s našimi hodnotami, cíli a strategii,
                může jednat ve jménu Animal Rebellion.
              </TypoText>
              <TypoText
                variant="h5"
                color="secondary"
                className={classes.gutterTop}
              >
                Větší dosah máme spolu
              </TypoText>
              <TypoText>
                Je důležité si uvědomit, že <strong>spolu máme sílu</strong> a
                proto žádáme každého, kdo souzní s hotnotami a požadavky Animal
                Rebellion, aby přiložil ruku k dílu a zapojil se do hnutí.
              </TypoText>
            </Fade>
          }
          image={
            <LazyImage
              imgSmWebp={require("../public/img/ar4sm.jpg?webp")}
              imgSmJpeg={require("../public/img/ar4sm.jpg")}
              imgXsWebp={require("../public/img/ar4xs.jpg?webp")}
              imgXsJpeg={require("../public/img/ar4xs.jpg")}
              alt="Vlajka chraňme a milujme naši zemi"
            />
          }
          className={classes.rowSpaceBottom}
        />
        <GridRow spacing={2} justify="flex-start">
          <CardCol
            number={1}
            title="Jsme anti-speciesistické hnutí se společnou vizi změny"
            text="Vytváříme svět, který ochraňuje všechny druhy."
          />
          <CardCol
            number={2}
            title="Naše poslání vychází z toho, co je nezbytné"
            text="Nikoli z toho, co je možné. Mobilizací 3,5 % populace (pomocí dynamických metod organizace) se budeme snažit prosadit změnu systému."
          />
          <CardCol
            number={3}
            title="Vyzdvihujeme potřebu regenerativní kultury"
            text="Vytváříme životaschopnou, odolnou kulturu, která pohotově reaguje na změny."
          />
          <CardCol
            number={4}
            title="Překonáváme se, abychom překonali i současný toxický systém"
            text="O systémové změny usilujeme tak, že vystupujeme z vlastních komfortních zón."
          />
          <CardCol
            number={5}
            title="Vážíme si reflexe a učení"
            text="Postupujeme v cyklu: akce, reflexe, poučení, plánování další akce. Učíme se od jiných hnutí i ze svých vlastních zkušeností."
          />
          <CardCol
            number={6}
            title="Všechny přijímáme takové, jací jsou"
            text="Aktivně pracujeme na vytváření bezpečnějšího a vstřícnějšího prostředí."
          />
          <CardCol
            number={7}
            title="Aktivně redukujeme moc"
            text="Rozbíjíme mocenské hierarchie, abychom tak zajistili spravedlivější zapojení do činnosti."
          />
          <CardCol
            number={8}
            title="Nikoho neobviňujeme ani nezostuzujeme"
            text="Žijeme v toxickém systému, avšak neviníme z toho žádného jednotlivce."
          />
          <CardCol
            number={9}
            title="Jsme nenásilné hnutí"
            text="Používáme nenásilnou strategii jakožto nejefektivnější cestu ke změně."
          />
          <CardCol
            number={10}
            title="Fungujeme autonomně a decentralizovaně"
            text="Fungujeme jako samostatné celky bez řízení centrální skupinou."
          />
        </GridRow>
      </GridContainer>
    </Box>
  );
};
