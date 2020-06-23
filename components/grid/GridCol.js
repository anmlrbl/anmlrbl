import Grid from "@material-ui/core/Grid";

export default (props) => (
  <Grid container item direction="column" {...props}>
    {props.children}
  </Grid>
);
