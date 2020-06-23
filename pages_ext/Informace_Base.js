import { Box } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import GridContainer from "../components/grid/GridContainer";
import GridCol from "../components/grid/GridCol";
import Layout from "../components/Layout";

export default (props) => {

  return (
    <Layout>
      {props.head}
      <Box bgcolor="primary.main" color="primary.contrastText">
        <GridContainer paddingTop={160}>
          <GridCol sm={10} md={6} justify="center">
            <Fade bottom cascade>
              {props.children}
            </Fade>
          </GridCol>
        </GridContainer>
      </Box>
    </Layout>
  );
};
