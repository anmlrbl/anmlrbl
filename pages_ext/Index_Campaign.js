import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import GridContainer from "../components/grid/GridContainer";
import GridType5t7i from "../components/grid/GridType5t7i";
import LazyImage from "../components/img/LazyImage";
import TypoTitle from "../components/typo/TypoTitle";
import TypoText from "../components/typo/TypoText";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import ListAltIcon from "@material-ui/icons/ListAlt";

const useStyles = makeStyles({
  button: {
    marginTop: 8,
  },
});

export default () => {
  const classes = useStyles();

  return (
    <Box bgcolor="primary.light" color="background.default">
      <GridContainer>
        <GridType5t7i
          text={
            <Fade bottom cascade>
              <TypoTitle component="h1">Spolu za život</TypoTitle>
              <TypoText>
                Ocitáme se v globální krizi. Nespočet lidí a zvířat umírá,
                ekonomika se hroutí.
              </TypoText>
              <TypoText>
                Chov zvířat a rybolov nadále vede k ekologickému kolapsu,
                přináší další pandemie a nadále zabíjí biliony zvířat.
              </TypoText>
              <TypoText>
                Klimatická krize přinese ještě více devastace, sucha, požáry,
                extrémní počasí a nedostatek potravin, což dopadne zejména na
                rasově marginalizované komunity.
              </TypoText>
              <TypoText>
                Vláda selhává v tom, co je potřeba udělat, aby nás chránila.
                Ignorují varování odborníků o oteplení planety o 4˚C. Varování,
                které bude vést k miliardám úmrtí.
              </TypoText>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                className={classes.button}
                startIcon={<LanguageOutlinedIcon />}
                target="_blank"
                href="https://www.spoluzazivot.cz/"
              >
                Web: Spolu za život
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                className={classes.button}
                startIcon={<FacebookIcon />}
                target="_blank"
                href="https://www.facebook.com/events/624443378484742/"
              >
                Událost: Spolu za život
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                className={classes.button}
                startIcon={<ListAltIcon />}
                target="_blank"
                href="https://forms.gle/mq9cYgBHNofwrfDT7/"
              >
                Formulář: Chci se zapojit!
              </Button>
            </Fade>
          }
          image={
            <LazyImage
              imgSmWebp={require("../public/img/ar9sm.jpg?webp")}
              imgSmJpeg={require("../public/img/ar9sm.jpg")}
              imgXsWebp={require("../public/img/ar9xs.jpg?webp")}
              imgXsJpeg={require("../public/img/ar9xs.jpg")}
              alt="Spolu za Život! Rebeluj! 4-5.9.2020"
            />
          }
        />
      </GridContainer>
    </Box>
  );
};
