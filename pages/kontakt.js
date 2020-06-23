import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
import Fade from "react-reveal/Fade";
import Layout from "../components/Layout";
import GridContainer from "../components/grid/GridContainer";
import GridType5t7i from "../components/grid/GridType5t7i";
import MainImage from "../components/img/MainImage";
import TypoText from "../components/typo/TypoText";
import TypoTitle from "../components/typo/TypoTitle";
import HeadBase from "../components/HeadBase";
import { useRouter } from "next/router";

const head = {
  title: "Kontakt | Animal Rebellion Česká republika",
  description: "Chceš se přidat, dát nám néjaký tip nebo jen zjistit co vlastně děláme a proč?",
  ogUrl: "https://animalrebellion.cz/kultura",
  ogImage: "https://animalrebellion.cz" + require("../public/head/index.jpg")
}

const useStyles = makeStyles({
  gutterTop: {
    marginTop: 8,
  },
  iconAlign: {
    marginBottom: -6,
    marginRight: 6,
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
                <TypoTitle component="h1">Kontakt</TypoTitle>
                <TypoText>
                  Chceš se přidat, dát nám néjaký tip nebo jen zjistit co
                  vlastně děláme a proč? Kontaktuj nás, neváhej ani sekundu :)
                </TypoText>
                <Box className={classes.gutterTop}>
                  <EmailOutlinedIcon className={classes.iconAlign} />
                  <Typography component="span" variant="h6" gutterBottom>
                    <strong>info@animalrebellion.cz</strong>
                  </Typography>
                </Box>
              </Fade>
            }
            image={
              <MainImage
                imgSmWebp={require("../public/img/ar6sm.jpg?webp")}
                imgSmJpeg={require("../public/img/ar6sm.jpg")}
                imgXsWebp={require("../public/img/ar6xs.jpg?webp")}
                imgXsJpeg={require("../public/img/ar6xs.jpg")}
                alt="Rebelka veverka s banerom Animal Rebellion"
              />
            }
          />
        </GridContainer>
      </Box>
    </Layout>
  );
};
