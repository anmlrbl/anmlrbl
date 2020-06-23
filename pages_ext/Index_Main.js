import { Box } from "@material-ui/core";
import Scroll from "react-scroll";
import Fade from "react-reveal/Fade";
import GridContainer from "../components/grid/GridContainer";
import GridType5t7i from "../components/grid/GridType5t7i";
import LazyImage from "../components/img/LazyImage";
import TypoTitle from "../components/typo/TypoTitle";
import TypoText from "../components/typo/TypoText";

var Element = Scroll.Element;

export default () => {
  return (
    <Element name="main">
      <Box bgcolor="primary.main" color="primary.contrastText">
        <GridContainer>
          <GridType5t7i
            text={
              <Fade bottom cascade>
                <TypoTitle component="h1">Co je Animal Rebellion?</TypoTitle>
                <TypoText>
                  Jsme hnutí všech, kterým záleží na stavu naší planety a každém
                  jedinci na ní.
                </TypoText>
                <TypoText>
                  Chceme zabránit nejhorším dopadům klimatické krize, zastavit
                  hromadné vymírání druhů a předejít rozpadu společnosti.
                </TypoText>
                <TypoText>
                  Naším cílem je přimět vládu, aby začala jednat adekvátně k
                  závažnosti problému.
                </TypoText>
              </Fade>
            }
            image={
              <LazyImage
                imgSmWebp={require("../public/img/ar1sm.jpg?webp")}
                imgSmJpeg={require("../public/img/ar1sm.jpg")}
                imgXsWebp={require("../public/img/ar1xs.jpg?webp")}
                imgXsJpeg={require("../public/img/ar1xs.jpg")}
                alt="Lidi z Animal Rebellion pri akci Occupy Arla"
              />
            }
          />
        </GridContainer>
      </Box>
    </Element>
  );
};
