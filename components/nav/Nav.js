import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Hidden,
  useScrollTrigger,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import MenuIcon from "@material-ui/icons/Menu";
import NextLink from "../link/NextLink";

const useStyles = makeStyles((theme) => ({
  "@keyframes slideInDown": {
    "0%": {
      transform: "translateY(-80px)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
  appBar: {
    opacity: (props) => (props.changeopacity ? 0.65 : 0.9),
    animation: "300ms $slideInDown",
    transitionProperty: "opacity",
    transitionDuration: "1s",
  },
  title: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  titleText: {
    textTransform: "capitalize",
  },
  grow: {
    flexGrow: 1,
  },
  item: {
    marginLeft: 2,
    marginRight: 2,
    paddingLeft: 16,
    paddingRight: 16,
  },
  iconIg: {
    marginLeft: 14,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 2,
    },
    padding: 8,
  },
  iconFb: {
    marginLeft: 2,
    padding: 8,
  },
}));

function ElevationScroll(props) {
  const trigger = useScrollTrigger();

  return React.cloneElement(props.children, {
    style: { opacity: props.navchange && !trigger ? 0.65 : 0.9 },
    elevation: props.navchange && !trigger ? 0 : 8,
  });
}

ElevationScroll.propTypes = {
  navchange: PropTypes.bool,
};

export default function Nav(props) {
  const classes = useStyles();

  return (
    <ElevationScroll {...props}>
      <AppBar className={classes.appBar} color="inherit">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            aria-label="menu"
            onClick={props.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Button component={NextLink} className={classes.title} href="/">
            <Typography
              variant="h6"
              color="inherit"
              className={classes.titleText}
            >
              Animal Rebellion
            </Typography>
          </Button>
          <div className={classes.grow} />
          <div>
            <Hidden xsDown>
              <Button
                component={NextLink}
                href="/media"
                color="inherit"
                className={classes.item}
              >
                Média
              </Button>
              <Hidden smDown>
                <Button
                  component={NextLink}
                  href="/informace"
                  color="inherit"
                  className={classes.item}
                >
                  informace
                </Button>
                <Button
                  component={NextLink}
                  href="/kontakt"
                  color="inherit"
                  className={classes.item}
                >
                  Kontakt
                </Button>
              </Hidden>
              <Button
                component={NextLink}
                href="/pridej-se"
                variant="outlined"
                color="secondary"
                className={classes.item}
              >
                Přidej se
              </Button>
            </Hidden>
            <IconButton
              href="https://www.instagram.com/animalrebellion_czechia/"
              target="_blank"
              aria-label="instagram"
              className={classes.iconIg}
            >
              <InstagramIcon color="primary" />
            </IconButton>
            <IconButton
              href="https://www.facebook.com/AnimalRebellionCzechia/"
              target="_blank"
              aria-label="facebook"
              edge="end"
              className={classes.iconFb}
            >
              <FacebookIcon color="primary" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

Nav.propTypes = {
  navchange: PropTypes.bool,
  toggleDrawer: PropTypes.func.isRequired,
};
