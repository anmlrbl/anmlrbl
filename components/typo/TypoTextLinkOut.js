import { Typography } from "@material-ui/core";
import { LinkOut } from "../link/LinkOut"

export default (props) => (
  <Typography component={LinkOut} variant="h6" {...props}>
    {props.children}
  </Typography>
);
