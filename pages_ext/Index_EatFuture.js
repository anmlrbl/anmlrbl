import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import LinkOut from "../components/link/LinkOut";
import GridContainer from "../components/grid/GridContainer";
import GridCol from "../components/grid/GridCol";
import TypoText from "../components/typo/TypoText";

const useStyles = makeStyles({
  typoTitle: {
    marginBottom: 40,
  },
});

export default () => {
  const classes = useStyles();

  return (
    <Box>
      <GridContainer>
        <GridCol md={8} justify="center">
          <Fade bottom cascade>
            <Typography
              variant="h2"
              component="h2"
              color="secondary"
              className={classes.typoTitle}
            >
              Sníme dětem budoucnost?
            </Typography>
            <TypoText>
              Živočišný průmysl patří mezi stěžejní příčiny klimatické krize,
              způsobuje více emisí než všechny přímé emise dopravy včetně
              letecké a lodní.
            </TypoText>
            <TypoText>
              Je hlavní příčinou odlesňování deštných pralesů a eutrofizace
              vody. Zároveň je však extrémně neefektivní. Zabírá{" "}
              <strong>
                <LinkOut href="https://www.ncbi.nlm.nih.gov/pubmed/29853680">
                  83% zemědělské půdy
                </LinkOut>
              </strong>{" "}
              ale poskytuje nám jen{" "}
              <strong>
                <LinkOut href="https://www.ncbi.nlm.nih.gov/pubmed/29853680">
                  13% energie
                </LinkOut>
              </strong>{" "}
              a pouhých{" "}
              <strong>
                <LinkOut href="https://www.ncbi.nlm.nih.gov/pubmed/29853680">
                  37% bílkovin.
                </LinkOut>
              </strong>
            </TypoText>
          </Fade>
        </GridCol>
      </GridContainer>
    </Box>
  );
};
