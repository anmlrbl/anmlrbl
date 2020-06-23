import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinkOut from "../link/LinkOut";

const useStyles = makeStyles({
  typoLinkout: {
    textDecoration: "underline",
  },
});

export default (props) => {
  const classes = useStyles();
  const { href, ...other } = props;

  return (
    <Typography component="p" {...other} className={classes.typoLinkout}>
      <LinkOut href={href}>{props.children}</LinkOut>
    </Typography>
  );
};
