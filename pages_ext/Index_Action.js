import { Box, Typography, Card, CardContent, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import OfflineBoltOutlinedIcon from "@material-ui/icons/OfflineBoltOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import GridContainer from "../components/grid/GridContainer";
import GridCol from "../components/grid/GridCol";
import GridRow from "../components/grid/GridRow";

const useStyles = makeStyles({
  typoTitle: {
    marginBottom: 60,
  },
  cardTitle: {
    padding: 8,
    textTransform: "uppercase",
    fontWeight: 600,
  },
  gutterBottom: {
    marginBottom: 16,
  },
  iconAlign: {
    verticalAlign: "text-bottom",
  },
});

const CardTitle = (props) => {
  const classes = useStyles();

  return (
    <Typography
      variant="h5"
      component="span"
      color="secondary"
      className={classes.cardTitle}
    >
      {props.children}
    </Typography>
  );
};

const CardCol = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isXsOnly = useMediaQuery(theme.breakpoints.only("xs"));
  const index = props.index
  const delay = isXsOnly ? index % 1 : index % 3

  return (
    <GridCol xs={12} sm={6} md={4}>
      <Flip bottom delay={delay * 400}>
        <Card className={classes.root}>
          <CardContent>{props.children}</CardContent>
        </Card>
      </Flip>
    </GridCol>
  );
};

export default () => {
  const classes = useStyles();

  return (
    <Box bgcolor="primary.light" color="background.default">
      <GridContainer>
        <GridCol sm={12} alignItems="center">
          <Fade bottom cascade>
            <Typography
              variant="h2"
              component="h5"
              className={classes.typoTitle}
            >
              Akce
            </Typography>
          </Fade>
        </GridCol>
        <GridRow sm={12} justify="center" spacing={2}>
          <CardCol index={0}>
            <Box className={classes.gutterBottom}>
              <OfflineBoltOutlinedIcon
                fontSize="large"
                color="secondary"
                className={classes.iconAlign}
              />
              <CardTitle>Přímé</CardTitle>
            </Box>
            <Typography paragraph>
              Akce s největším dopadem a často i rizikem, které jsme ochotni
              podstoupit právě pro jejich účinnost.
            </Typography>
            <Typography paragraph>
              Nechceme a nežádáme, aby se každý jednotlivec nechal zadržet, ale žádáme,
              aby každý podporoval občanskou neposlušnot jako nástroj k dosažení
              změn.
            </Typography>
          </CardCol>
          <CardCol index={1}>
            <Box className={classes.gutterBottom}>
              <HelpOutlineOutlinedIcon
                fontSize="large"
                color="secondary"
                className={classes.iconAlign}
              />
              <CardTitle>Informační</CardTitle>
            </Box>
            <Typography paragraph>
              Akce rozšiřující povědomí o propojení živočišného průmyslu a jeho
              dopadech na planetu, lidi a zvířata.
            </Typography>
            <Typography paragraph>
              Víme, že systémový přechod k rostlinnému stravovacímu systému je
              nejefektivnejší cestou k přímé a rychlé redukci metanu a je
              nezbytný pro zabránění dopadů klimatické krize.
            </Typography>
          </CardCol>
          <CardCol index={2}>
            <Box className={classes.gutterBottom}>
              <SentimentSatisfiedAltOutlinedIcon
                fontSize="large"
                color="secondary"
                className={classes.iconAlign}
              />
              <CardTitle>Regenerativní</CardTitle>
            </Box>
            <Typography paragraph>
              Akce s cílem regenerace a utužení vztahů v hnutí, ztělesňující
              představu světa, ve kterém chceme žít.
            </Typography>
            <Typography paragraph>
              Vnímáme náročnost přímých akcí, klimatickou depresi a vyhoření
              jako důležité problémy, se kterými se chceme kolektivně vypořádat
              a budovat tak regenerativní a přijímající kulturu.
            </Typography>
          </CardCol>
        </GridRow>
      </GridContainer>
    </Box>
  );
};
