import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Zoom from "react-reveal/Zoom";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  image: {
    width: "100%",
    display: "block",
    borderRadius: 8,
  },
  box: {
    marginTop: 8,
    marginBottom: 24,
  },
});

export default function MainImage(props) {
  const classes = useStyles();

  return (
    <Zoom bottom>
      <Box boxShadow={2} className={classes.box} borderRadius={8}>
        <picture>
          <source
            media="(min-width: 381px)"
            type="image/webp"
            srcSet={props.imgSmWebp}
          />
          <source media="(min-width: 381px)" srcSet={props.imgSmJpeg} />
          <source type="image/webp" srcSet={props.imgXsWebp} />
          <img
            className={classes.image}
            srcSet={props.imgXsJpeg}
            alt={props.alt}
          />
        </picture>
      </Box>
    </Zoom>
  );
}

MainImage.propTypes = {
  imgSmWebp: PropTypes.string.isRequired,
  imgSmJpeg: PropTypes.string.isRequired,
  imgXsWebp: PropTypes.string.isRequired,
  imgXsJpeg: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
