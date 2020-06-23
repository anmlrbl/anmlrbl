import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Fade } from "@material-ui/core";

const useStyles = makeStyles({
  item: {
    position: "absolute",
    height: "100vh",
    minWidth: "100%",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  image: {
    minHeight: "100vh",
    minWidth: "100%",
  },
});

export default function BannerPicture(props) {
  const classes = useStyles();

  return (
      <Fade in={props.in} timeout={1000}>
        <picture className={classes.item}>
          <source
            media="(min-width: 1281px)"
            type="image/webp"
            srcSet={props.imgLgWebp}
          />
          <source
            media="(min-width: 1281px)"
            srcSet={props.imgLgJpeg}
          />
          <source
            media="(min-width: 601px)"
            srcSet={props.imgSmJpeg}
          />
          <source
            type="image/webp"
            srcSet={props.imgXsWebp}
          />
          <img className={classes.image} src={props.imgXsJpeg} alt={props.alt} />
        </picture>
      </Fade>
  );
}

BannerPicture.propTypes = {
  in: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  imgLgWebp: PropTypes.string.isRequired,
  imgLgJpeg: PropTypes.object .isRequired,
  imgSmJpeg: PropTypes.object.isRequired,
  imgXsWebp: PropTypes.string.isRequired,
  imgXsJpeg: PropTypes.string.isRequired,
};
