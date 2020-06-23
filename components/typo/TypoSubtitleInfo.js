import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  typoSubtitle: {
    fontWeight: 600,
  },
});

export default (props) => {
  const classes = useStyles();

  return (
    <Typography
      variant="h5"
      component="h2"
      className={classes.typoSubtitle}
      paragraph
      {...props}
    >
      {props.children}
    </Typography>
  );
};
