import Layout from "../components/Layout";
import GridContainer from "../components/grid/GridContainer";
import { Typography, Box } from "@material-ui/core";

function Error({ statusCode }) {
  return (
    <Layout>
      <GridContainer>
        <Box display="flex" justifyContent="center">
          <Typography variant="h3" component="p">
            {statusCode
              ? `Stránka nenalezena [chyba ${statusCode}] :)`
              : "Stránka nenalezena"}
          </Typography>
        </Box>
      </GridContainer>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
