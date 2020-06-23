import {
  Box,
  Typography,
  Card,
  Button,
  CardActionArea,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Layout from "../components/Layout";
import GridContainer from "../components/grid/GridContainer";
import GridCol from "../components/grid/GridCol";
import all from "../pages_text/all";
import HeadBase from "../components/HeadBase";
import { useRouter } from "next/router";
import Zoom from "react-reveal/Zoom";

const head = {
  title: "Informace | Animal Rebellion Česká republika",
  description:
    "Chceš se dozvědet víc o klimatické krizi a živočišném průmyslu, o globálním oteplování a hromadním vymírání druhů?",
  image: require("../public/head/index.jpg"),
};

const useStyles = makeStyles({
  image: {
    width: "100%",
    transition: "transform .4s",
    '&:hover': {
      transform: "scale(1.04)",
    }
  },
});

const CardTitle = (props) => {
  return (
    <Typography variant="h5" component="p" color="secondary" paragraph>
      {props.children}
    </Typography>
  );
};

const CardCol = (props) => {
  const classes = useStyles();

  return (
    <GridCol sm={6} md={4}>
      <Zoom bottom delay={props.delay}>
        <Card>
          <CardActionArea href={props.item.path}>
            <picture>
              <source
                media="(min-width: 381px)"
                type="image/webp"
                srcSet={props.item.imgSmWebp}
              />
              <source
                media="(min-width: 381px)"
                srcSet={props.item.imgSmJpeg}
              />
              <source type="image/webp" srcSet={props.item.imgXsWebp} />
              <img
                className={classes.image}
                srcSet={props.item.imgXsJpeg}
                alt={props.item.alt}
              />
            </picture>
            <Box p={2}>{props.children}</Box>
            <Box paddingLeft={2} paddingBottom={2}>
              <Button
                color="secondary"
                variant="contained"
                href={props.item.path}
              >
                Více
              </Button>
            </Box>
          </CardActionArea>
        </Card>
      </Zoom>
    </GridCol>
  );
};

export default () => {
  const router = useRouter();
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Layout>
      <HeadBase head={head} path={router.pathname} />
      <Box bgcolor="primary.main" color="primary.contrastText">
        <GridContainer paddingTop={200} spacing={4}>
          {all.map((item, index) => (
            <CardCol
              key={index}
              item={item}
              delay={isSmDown ? (index % 2) * 400 : (index % 3) * 400}
            >
              <CardTitle>{item.title}</CardTitle>
              <Typography>{item.subTitle}</Typography>
            </CardCol>
          ))}
        </GridContainer>
      </Box>
    </Layout>
  );
};
