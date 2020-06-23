import { Box, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import GridContainer from "../components/grid/GridContainer";
import GridCol from "../components/grid/GridCol";
import GridRow from "../components/grid/GridRow";
import GridType5t7i from "../components/grid/GridType5t7i";
import LazyImage from "../components/img/LazyImage";
import TypoTitle from "../components/typo/TypoTitle";
import TypoText from "../components/typo/TypoText";

const useStyles = makeStyles({
  rowSpaceBottom: {
    marginBottom: 64,
  },
  cardTitle: {
    textTransform: "uppercase",
    fontWeight: 600,
    marginBottom: 40,
    paddingRight: 24,
  },
  cardNumber: {
    position: "absolute",
    right: 8,
    top: 0,
  },
});

const CardNumber = (props) => {
  const classes = useStyles();

  return (
    <Typography variant="h1" component="div" className={classes.cardNumber}>
      {props.children}
    </Typography>
  );
};

const CardTitle = (props) => {
  const classes = useStyles();

  return (
    <Typography component="h5" variant="h5" className={classes.cardTitle}>
      {props.children}
    </Typography>
  );
};

const CardCol = (props) => {
  const theme = useTheme();
  const isXsOnly = useMediaQuery(theme.breakpoints.only("xs"));
  const index = props.number + 2
  const delay = isXsOnly ? index % 1 : index % 3

  return (
    <GridCol md={4} sm={6} xs={12} >
      <Flip bottom delay={delay * 400}>
        <Box bgcolor="primary.main" boxShadow={2} p={2} borderRadius={4}>
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
    <Box bgcolor="primary.light" color="background.default">
      <GridContainer>
        <GridType5t7i
          className={classes.rowSpaceBottom}
          text={
            <Fade bottom cascade>
              <TypoTitle>Naše Požadavky</TypoTitle>
              <TypoText>
                Na základě vědeckých studií a nedostatečných klimatických
                opatření víme, že je nutné <strong>jednat teď</strong>.
              </TypoText>
              <TypoText>
                Svět se řítí k bodu zlomu a politická vůle něco dělat je mizivá.
              </TypoText>
              <TypoText>
                Naše požadavky jsou logické a nevyhnutelné k dosažení uhlíkové
                neutrality.
              </TypoText>
            </Fade>
          }
          image={
            <LazyImage
              imgSmWebp={require("../public/img/ar3sm.jpg?webp")}
              imgSmJpeg={require("../public/img/ar3sm.jpg")}
              imgXsWebp={require("../public/img/ar3xs.jpg?webp")}
              imgXsJpeg={require("../public/img/ar3xs.jpg")}
              alt="Lidi z hnutí Animal Rebellion s vlajkami"
            />
          }
        />
        <GridRow spacing={2}>
          <CardCol number={1}>
            <CardTitle>Říkejte nám pravdu</CardTitle>
            <Typography paragraph>
              Vláda musí říct pravdu a vyhlásit klimatickou a ekologickou krizi,
              spolupracovat s institucemi a veřejnosti komunikovat urgentnost
              změny.
            </Typography>
            <Typography paragraph>
              Vláda musí zahrnout v komunikaci potřebu přechodu k rostlinnému
              stravovacímu systému.
            </Typography>
            <Typography paragraph>
              Animal Rebellion ví, že se o klimatické krizi nedá mluvit bez
              zarhnutí dopadů živočišného průmyslu na planetu, zejména v oblasti
              deforestace, acidifikace oceánů, ztrátě biodiverzity a zněčištění
              vzduchu.
            </Typography>
          </CardCol>
          <CardCol number={2}>
            <CardTitle>Jednejte okamžitě</CardTitle>
            <Typography paragraph>
              Vláda musí jednat okamžitě, zastavit ztrátu biodiverzity a
              redukovat emise skleníkových plynů na nulu do roku 2025.
            </Typography>
            <Typography paragraph>
              Aktuálně se řítíme ke klimatické katastrofě se sociálním kolapsem,
              masovým hladověním a smrtí miliard živočichů i lidí.
            </Typography>
            <Typography paragraph>
              Soustředíme se na to, co je nevyhnutelné, a to je uhlíková
              neutralita. Víme, že ji nelze dosáhnout bez přechodu na
              spravedlivý a udržitelný rostlinný stravovací systém.
            </Typography>
          </CardCol>
          <CardCol number={3}>
            <CardTitle>Rozšiřte demokracii</CardTitle>
            <Typography paragraph>
              Vláda musí vytvořit a respektovat rozhodnutí Citizens Assembly ve
              věci klimatické a ekologické spravedlnosti.
            </Typography>
            <Typography paragraph>
              Politická moc je v rukou pár zvolených politiků, tento systém se
              ukazuje jako neschopný v řešení velkých problémů typu klimatické
              krize. Lobbing korporátů předčil potřeby veřejnosti a chrání
              fosilní a živočišný průmysl.
            </Typography>
            <Typography>
              Potřebujeme, aby byli občané edukováni v oblasti klimatické krize
              a živočišné výroby a rozhodli o potřebných opatřeních, které vláda
              přijme.
            </Typography>
          </CardCol>
        </GridRow>
      </GridContainer>
    </Box>
  );
};
