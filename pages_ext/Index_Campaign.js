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
import ListAltIcon from '@material-ui/icons/ListAlt';

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
              <TypoTitle component="h1">Spolu za život!</TypoTitle>
              <TypoText>
                V pátek 4. září se můžeš těšit na spousty různých workshopů,
                živou i neživou muziku, výborné jídlo, překvapení, a hlavně dobrou
                atmosféru!
              </TypoText>
              <TypoText>
                V sobotu 5. září bude probíhat globální akce Web of Lies a i my
                jako Animal Rebellion Česká Republika budeme její součástí.
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
                Událost: Rebelujme Spolu za život
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
                Google Form: Chci být v AKCI!
              </Button>
            </Fade>
          }
          image={
            <LazyImage
              imgSmWebp={require("../public/img/ar8sm.jpg?webp")}
              imgSmJpeg={require("../public/img/ar8sm.jpg")}
              imgXsWebp={require("../public/img/ar8xs.jpg?webp")}
              imgXsJpeg={require("../public/img/ar8xs.jpg")}
              alt="Spolu za Život! Rebeluj! 4-5.9.2020"
            />
          }
        />
      </GridContainer>
    </Box>
  );
};
