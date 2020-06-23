import PropTypes from "prop-types";
import Link from "@material-ui/core/Link";

export default function LinkOut(props) {
  return (
    <Link
      href={props.href}
      target="_blank"
      color="inherit"
      rel="noreferrer noopener"
      {...props}
    >
      {props.children}
    </Link>
  );
}

LinkOut.propTypes = {
  href: PropTypes.string.isRequired,
};
