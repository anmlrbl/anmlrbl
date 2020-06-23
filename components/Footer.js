import {
  Typography,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Hidden,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LazyLoad from "react-lazyload";
import GridCol from "./grid/GridCol";
import GridContainerXL from "./grid/GridContainerXL";

const useStyles = makeStyles({
  button: {
    textTransform: "none",
  },
  gutterBottom: {
    marginBottom: 8,
  },
  iconAlign: {
    verticalAlign: "text-bottom",
    marginRight: 4,
  },
});

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <Box bgcolor="background.paper">
      <GridContainerXL paddingTop={24} paddingBottom={16}>
        <Hidden smDown>
          <GridCol md={4} alignItems="flex-start">
            <LazyLoad once height={180}>
              <picture>
                <source
                  type="image/webp"
                  srcSet={require("../public/img/footer.png?webp")}
                />
                <img
                  alt="Logo animal rebellion prase"
                  src={require("../public/img/footer.png")}
                />
              </picture>
            </LazyLoad>
          </GridCol>
        </Hidden>
        <GridCol md={4} sm={6} justify="center" alignItems="center">
          <Typography variant="h4" component="h5" color="primary" gutterBottom>
            Jak se zapojit?
          </Typography>
          <Box m={1}>
            <ButtonGroup
              orientation="vertical"
              variant="contained"
              color="secondary"
              aria-label="tlačítka pro lidi se zájmem o zapojení do hnutí"
            >
              <Button
                startIcon={<FacebookIcon />}
                className={classes.button}
                target="_blank"
                href="https://www.facebook.com/groups/ar.czechia/"
              >
                Otevřená skupina hnutí
              </Button>
              <Button
                startIcon={<FacebookIcon />}
                className={classes.button}
                target="_blank"
                href="https://m.me/AnimalRebellionCzechia?ref=w11101452"
              >
                ChatBot s malými úkoly
              </Button>
            </ButtonGroup>
          </Box>
        </GridCol>
        <GridCol
          md={4}
          sm={6}
          alignItems={isXs ? "center" : "flex-end"}
          justify="space-between"
        >
          <Box aria-label="social media">
            <IconButton
              href="https://www.instagram.com/animalrebellion_czechia/"
              target="_blank"
              aria-label="instagram"
            >
              <InstagramIcon color="secondary" fontSize="large" />
            </IconButton>
            <IconButton
              href="https://www.facebook.com/AnimalRebellionCzechia/"
              target="_blank"
              aria-label="facebook"
              edge="end"
            >
              <FacebookIcon color="secondary" fontSize="large" />
            </IconButton>
          </Box>
          <Box textAlign={isXs ? "center" : "right"}>
            <Box className={classes.gutterBottom}>
              <EmailOutlinedIcon
                fontSize="small"
                className={classes.iconAlign}
              />
              <Typography component="span" variant="body1">
                info@animalrebellion.cz
              </Typography>
            </Box>
            <Typography>© Animal Rebellion Česká Republika</Typography>
          </Box>
        </GridCol>
      </GridContainerXL>
    </Box>
  );
};
