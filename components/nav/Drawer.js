import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NextLink from "../link/NextLink";

const useStyles = makeStyles((theme) => ({
  root: {},
  nested: {
    paddingLeft: theme.spacing(4),
  },
  horizontalSplitIcon: {
    transform: "rotate(270deg)",
  },
  secondary: {
    color: theme.palette.secondary.main,
  },
}));

const MyListItem = (props) => (
  <ListItem
    button
    component={NextLink}
    href={props.href}
    className={props.className}
  >
    <ListItemText primary={props.text} />
  </ListItem>
);

MyListItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const MySubListItem = (props) => {
  const classes = useStyles();

  return (
    <ListItem
      button
      component={NextLink}
      className={classes.nested}
      href={props.href}
    >
      <ListItemText primary={props.text} />
    </ListItem>
  );
};

MySubListItem.propTypes = {
  href: PropTypes.string.isRequired,
};

const MySubList = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = (e) => {
    setOpen(!open);
    e.stopPropagation();
  };

  return (
    <div>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={props.text} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.children}
        </List>
      </Collapse>
    </div>
  );
};

export default function DrawerLeft(props) {
  const classes = useStyles();

  const SideList = () => (
    <List
      component="nav"
      role="presentation"
      onClick={props.toggleDrawer(false)}
      onKeyDown={props.toggleDrawer(false)}
    >
      <MyListItem text="Animal Rebellion" href="/" />
      <Divider />
      <MyListItem text="Média" href="/media" />
      <MyListItem text="Kontakt" href="/kontakt" />
      <Divider />
      <MyListItem
        text="Přidej se"
        href="/pridej-se"
        className={classes.secondary}
      />
      <Divider />
      <Divider />
      <MySubList text="Informace">
        <MySubListItem
          text="Rostlinná revoluce začíná"
          href="/informace/rostlinna-revoluce-zacina"
        />
        <MySubListItem
          text="Pandemie ze zvířat"
          href="/informace/pandemie-ze-zvirat"
        />
        <MySubListItem
          text="Kácéní deštného pralesa"
          href="/informace/kaceni-destneho-pralesa"
        />
      </MySubList>
    </List>
  );

  return (
    <Drawer
      anchor="left"
      open={props.open}
      onClose={props.toggleDrawer(false)}
      classes={{ paper: classes.root }}
    >
      <SideList />
    </Drawer>
  );
}

DrawerLeft.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func,
};
