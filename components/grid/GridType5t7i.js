import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import GridRow from "./GridRow";
import GridCol from "./GridCol";

export default (props) => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  const {text, image, ...other} = props;

  return (
    <GridRow spacing={2} {...other}>
      <GridCol lg={5} md={6} sm={10} xs={12} justify="center">
        {props.text}
      </GridCol>
      <GridCol
        lg={7}
        md={6}
        sm={12}
        alignItems={isSmDown ? "center" : "flex-end"}
        justify="center"
      >
        {props.image}
      </GridCol>
    </GridRow>
  );
};
