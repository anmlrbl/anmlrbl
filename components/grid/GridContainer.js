import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: (props) => ({
    paddingTop: props.paddingTop ? props.paddingTop : 120,
    paddingBottom: props.paddingBottom ? props.paddingBottom : 120,
    overflow: "hidden",
    position: "relative",
  }),
});

export default (props) => {
  const classes = useStyles(props);

  const {paddingTop, paddingBottom, ...other} = props;

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container justify="center" {...other}>
        {props.children}
      </Grid>
    </Container>
  );
};
