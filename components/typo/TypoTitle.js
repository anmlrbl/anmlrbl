import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  typoTitle: {
    marginBottom: 40,
  },
});

export default (props) => {
  const classes = useStyles();

  return (
    <Typography
      variant="h3"
      component="h3"
      className={classes.typoTitle}
      {...props}
    >
      {props.children}
    </Typography>
  );
};
