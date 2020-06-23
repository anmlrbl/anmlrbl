import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import Fade from "react-reveal/Fade";
import Layout from "../components/Layout";
import GridContainer from "../components/grid/GridContainer";
import GridType5t7i from "../components/grid/GridType5t7i";
import TypoText from "../components/typo/TypoText";
import TypoTitle from "../components/typo/TypoTitle";
import MainImage from "../components/img/MainImage";
import TypoTextIn from "../components/typo/TypoTextIn";
import HeadBase from "../components/HeadBase";
import { useRouter } from "next/router";

const head = {
  title: "Přidej se | Animal Rebellion Česká republika",
  description: "Možností jak se zapojit je mnoho, ale nejlepší je se přidat do Otevřené skupiny Animal Rebellion.",
  ogUrl: "https://animalrebellion.cz/kultura",
  ogImage: "https://animalrebellion.cz" + require("../public/head/index.jpg"),
}

const useStyles = makeStyles({
  typoMain: {
    marginBottom: 40,
  },
  button: {
    marginTop: 8,
  },
});

export default () => {
  const classes = useStyles();
  const router = useRouter()

  return (
    <Layout>
      <HeadBase head={head} path={router.pathname} />
      <Box bgcolor="primary.main" color="primary.contrastText">
        <GridContainer paddingTop={200}>
          <GridType5t7i
            text={
              <Fade bottom cascade>
                <TypoTitle component="h1">Přidej se</TypoTitle>
                <TypoTextIn gutterBottom>
                  Možností jak se zapojit je mnoho, ale nejlepší je se přidat do{" "}
                  <strong>Otevřené skupiny Animal Rebellion</strong>.
                </TypoTextIn>
                <TypoText>
                  Také skus našeho ChatBota, ten má připravených pár supr úkolů
                  na začátek.
                </TypoText>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  className={classes.button}
                  startIcon={<FacebookIcon />}
                  target="_blank"
                  href="https://www.facebook.com/groups/ar.czechia/"
                >
                  Otevřená skupina hnutí
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  className={classes.button}
                  startIcon={<FacebookIcon />}
                  target="_blank"
                  href="https://m.me/AnimalRebellionCzechia?ref=w11101452"
                >
                  ChatBot s malými úkoly
                </Button>
              </Fade>
            }
            image={
              <MainImage
                imgSmWebp={require("../public/img/ar5sm.jpg?webp")}
                imgSmJpeg={require("../public/img/ar5sm.jpg")}
                imgXsWebp={require("../public/img/ar5xs.jpg?webp")}
                imgXsJpeg={require("../public/img/ar5xs.jpg")}
                alt="Rebelka veverka s banerom Animal Rebellion"
              />
            }
          />
        </GridContainer>
      </Box>
    </Layout>
  );
};
