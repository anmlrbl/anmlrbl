import { useState } from "react";
import {
  Typography,
  Grid,
  IconButton,
  Paper,
  Hidden,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Fade from "react-reveal/Fade";
import Scroll from "react-scroll";
import Banner from "../components/banner/Banner";
import GridContainerXL from "../components/grid/GridContainerXL";
import useInterval from "../components/util/useInterval";

var scroller = Scroll.scroller;

const duration = 3000;

const useStyles = makeStyles((theme) => ({
  "@keyframes bounce": {
    "from, 20%, 53%, 80%, to": {
      animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      transform: "translate3d(0, 0, 0)",
    },
    "40%, 43%": {
      animationTimingFunction: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
      transform: "translate3d(0, -30px, 0)",
    },
    "70%": {
      animationTimingFunction: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
      transform: "translate3d(0, -15px, 0)",
    },
    "90%": {
      transform: "translate3d(0, -4px, 0)",
    },
  },
  "@keyframes fadeInUp": {
    "0%": {
      opacity: 0,
      transform: "translateY(-100px)",
    },
    "100%": {
      opacity: 0.8,
      transform: "translateY(0)",
    },
  },
  bannerGrid: {
    height: "100vh",
  },
  bannerGridItem: {
    [theme.breakpoints.only("xs")]: {
      paddingBottom: "14vw",
    },
    [theme.breakpoints.only("sm")]: {
      paddingRight: "5vw",
    },
    [theme.breakpoints.up("md")]: {
      paddingRight: "10vw",
    },
  },
  bannerMore: {
    animation: "2s $bounce 2s infinite",
    position: "absolute",
    bottom: "5vh",
    left: "calc(50% - 24px)",
  },
  bannerMoreIcon: {
    width: 48,
    height: 48,
  },
  bannerPaper: {
    animation: "300ms $fadeInUp",
    opacity: 0.8,
    [theme.breakpoints.only("xs")]: {
      padding: `${theme.spacing(3)}px ${theme.spacing(2)}px`,
    },
    [theme.breakpoints.only("sm")]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.only("md")]: {
      padding: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(6),
    },
  },
  text: {
    textTransform: "uppercase",
  },
  textParent: {
    position: "relative",
  },
  textOverlap: {
    position: "absolute",
    top: 0,
  },
}));

const TextSmall = (props) => {
  const classes = useStyles();

  return (
    <Typography
      component="p"
      variant="h5"
      color="secondary"
      className={classes.text}
    >
      {props.children}
    </Typography>
  );
};

const TextBix = (props) => {
  const classes = useStyles();

  return (
    <Typography component="p" variant="h3" className={classes.text}>
      {props.children}
    </Typography>
  );
};

export default function IndexBanner() {
  let [count, setCount] = useState(0);
  const classes = useStyles();
  const theme = useTheme();
  const isXsOnly = useMediaQuery(theme.breakpoints.only("xs"));

  useInterval(() => {
    setCount((count + 1) % 3);
  }, duration);

  return (
    <GridContainerXL
      className={classes.bannerGrid}
      alignItems={isXsOnly ? "flex-end" : "center"}
      justify={isXsOnly ? "center" : "flex-end"}
    >
      <Banner count={count} duration={duration} />
      <Grid item className={classes.bannerGridItem}>
        <Paper
          elevation={4}
          color="primary"
          classes={{ root: classes.bannerPaper }}
        >
          <TextSmall>Pokud věříš v</TextSmall>
          <div className={classes.textParent}>
            <div>
              <Fade left opposite when={count == 0}>
                <TextBix>klimatickou</TextBix>
              </Fade>
            </div>
            <div className={classes.textOverlap}>
              <Fade left opposite when={count == 1}>
                <TextBix>mezidruhovou</TextBix>
              </Fade>
            </div>
            <div className={classes.textOverlap}>
              <Fade left opposite when={count == 2}>
                <TextBix>sociální</TextBix>
              </Fade>
            </div>
          </div>
          <TextBix>spravedlnost</TextBix>
          <TextSmall>pak už jsi součástí</TextSmall>
          <TextBix>Animal</TextBix>
          <TextBix>Rebellion</TextBix>
        </Paper>
      </Grid>

      <Hidden smDown>
        <IconButton
          className={classes.bannerMore}
          onClick={() => {
            scroller.scrollTo("main", {
              duration: 400,
              delay: 100,
              smooth: true,
            });
          }}
        >
          <ExpandMoreIcon
            color="secondary"
            className={classes.bannerMoreIcon}
          />
        </IconButton>
      </Hidden>
    </GridContainerXL>
  );
}
