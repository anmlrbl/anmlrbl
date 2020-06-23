import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: (props) => ({
    overflow: "hidden",
    position: "relative",
    paddingTop: props.paddingTop ? props.paddingTop : 0,
    paddingBottom: props.paddingBottom ? props.paddingBottom : 0,
  }),
});

export default (props) => {
  const classes = useStyles(props);

  const {paddingTop, paddingBottom, ...other} = props;

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Grid container justify="center" {...other}>
        {props.children}
      </Grid>
    </Container>
  );
};
