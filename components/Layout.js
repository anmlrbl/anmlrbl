import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Nav from "./nav/Nav";
import Drawer from "./nav/Drawer";
import Footer from "./Footer";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

export default function Layout(props) {
  const [state, setState] = React.useState({
    open: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, open: open });
  };

  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      justifyContent="space-between"
      display="flex"
      flexDirection="column"
    >
      <div>
        <Nav toggleDrawer={toggleDrawer} navchange={props.navchange} />
        <Drawer open={state.open} toggleDrawer={toggleDrawer} />
      </div>
      {props.children}
      <Footer />
    </Box>
  );
}

Layout.propTypes = {
  navchange: PropTypes.bool,
};
