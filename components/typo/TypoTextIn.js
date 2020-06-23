import { Typography } from "@material-ui/core";

export default (props) => (
  <Typography component="p" variant="h6" {...props}>
    {props.children}
  </Typography>
);
