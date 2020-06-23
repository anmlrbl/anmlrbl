import Grid from "@material-ui/core/Grid";

export default (props) => (
  <Grid container item direction="row" justify="center" {...props}>
    {props.children}
  </Grid>
);
