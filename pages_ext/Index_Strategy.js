import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import GridContainer from "../components/grid/GridContainer";
import GridType5t7i from "../components/grid/GridType5t7i";
import LazyImage from "../components/img/LazyImage";
import TypoTitle from "../components/typo/TypoTitle";
import TypoText from "../components/typo/TypoText";

const useStyles = makeStyles({
  gutterTop: {
    marginTop: 16,
    fontWeight: 600,
  },
});

export default () => {
  const classes = useStyles();

  return (
    <Box bgcolor="primary.main" color="primary.contrastText">
      <GridContainer>
        <GridType5t7i
          text={
            <Fade bottom cascade>
              <TypoTitle>Naše Strategie</TypoTitle>
              <TypoText>
                V jádře filozofie hnutí Animal Rebellion je "above the ground"
                nenásilná občanská neposlušnost. Podporujeme a propagujeme
                občanskou neposlušnost, protože víme, že je efektivní a
                nevyhnutelná v časech nouze.
              </TypoText>
              <TypoText>
                Jako hnutí se distancujeme od trestných činů, každý aktivní
                občan jedná na svou vlastní odpovědnost.
              </TypoText>
              <TypoText variant="h5" className={classes.gutterTop}>
                Zaměřujeme se na systémovou změnu
              </TypoText>
              <TypoText>
                I individuální změna je vítána, ale není podmínkou k přidání se
                do hnutí Animal Rebellion.
              </TypoText>
              <TypoText>
                Vážíme si všech organizací usilujících o osobní změny
                jednotlivců. Naši roli však vidíme v dosažení systémové změny.
              </TypoText>
            </Fade>
          }
          image={
            <LazyImage
              imgSmWebp={require("../public/img/ar2sm.jpg?webp")}
              imgSmJpeg={require("../public/img/ar2sm.jpg")}
              imgXsWebp={require("../public/img/ar2xs.jpg?webp")}
              imgXsJpeg={require("../public/img/ar2xs.jpg")}
              alt="Země s nápisem Animal Rebellion a šablonou"
            />
          }
        />
      </GridContainer>
    </Box>
  );
};
