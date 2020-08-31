import { Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import Fade from "react-reveal/Fade";
import Layout from "../components/Layout";
import GridContainer from "../components/grid/GridContainer";
import GridType5t7i from "../components/grid/GridType5t7i";
import MainImage from "../components/img/MainImage";
import TypoText from "../components/typo/TypoText";
import TypoTitle from "../components/typo/TypoTitle";
import HeadBase from "../components/HeadBase";
import NextLink from "../components/link/NextLink";
import { useRouter } from "next/router";

const head = {
  title: "Média | Animal Rebellion Česká republika",
  description: "Tiskové zprávy Animal Rebellion, informace pro média.",
  ogUrl: "https://animalrebellion.cz/media",
  ogImage: "https://animalrebellion.cz" + require("../public/head/index.jpg"),
};

const useStyles = makeStyles({
  gutterTop: {
    marginTop: 16,
  },
  iconAlign: {
    marginBottom: -6,
    marginRight: 6,
  },
  link: {
    textColor: "#121212",
  },
});

const MyFile = (props) => {
  return (
    <Button
      component={NextLink}
      variant="contained"
      href={props.href}
      color="secondary"
      startIcon={<DescriptionOutlinedIcon />}
    >
      {props.text}
    </Button>
  );
};

export default () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Layout>
      <HeadBase head={head} path={router.pathname} />
      <Box bgcolor="primary.main" color="primary.contrastText">
        <GridContainer paddingTop={200}>
          <GridType5t7i
            text={
              <Fade bottom cascade>
                <TypoTitle component="h1">Tiskové zprávy</TypoTitle>
                <MyFile href="/pdf/TZ1.pdf" text="Spolu za život 1-5.9.2020 pdf" />
                <TypoText variant="h5" className={classes.gutterTop}>
                  Vice informací na:
                </TypoText>
                <Box>
                  <EmailOutlinedIcon className={classes.iconAlign} />
                  <Typography component="span" variant="h6" gutterBottom>
                    <strong>info@animalrebellion.cz</strong>
                  </Typography>
                </Box>
              </Fade>
            }
            image={
              <MainImage
                imgSmWebp={require("../public/img/ar7sm.jpg?webp")}
                imgSmJpeg={require("../public/img/ar7sm.jpg")}
                imgXsWebp={require("../public/img/ar7xs.jpg?webp")}
                imgXsJpeg={require("../public/img/ar7xs.jpg")}
                alt="Red brigade - rudá brigáda"
              />
            }
          />
        </GridContainer>
      </Box>
    </Layout>
  );
};
