import { makeStyles } from "@material-ui/core/styles";
import BannerPicture from "./BannerPicture";
import Delayed from "../util/Delayed";

const useStyles = makeStyles({
  "@keyframes scale": {
    "0%": {
      transform: "scale(1.0)",
    },
    "50%": {
      transform: "scale(1.06)",
    },
    "100%": {
      transform: "scale(1.0)",
    },
  },
  banner: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  },
  background: {
    height: "100vh",
    animation: "6000ms $scale infinite",
  },
});

export default function Banner(props) {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <div className={classes.background}>
        <BannerPicture
          in={props.count == 0}
          duration={props.duration}
          alt="Britští rebelové při akci Occupy Arla"
          imgLgWebp={require("../../public/img/background/bg0lg.jpg?webp")}
          imgLgJpeg={require("../../public/img/background/bg0lg.jpg?size=1920")}
          imgSmJpeg={require("../../public/img/background/bg0lg.jpg?size=1280")}
          imgXsWebp={require("../../public/img/background/bg0xs.jpg?webp")}
          imgXsJpeg={require("../../public/img/background/bg0xs.jpg")}
        />
        <Delayed waitBeforeShow={props.duration - 500}>
          <BannerPicture
            in={props.count == 1}
            duration={props.duration}
            alt="Socha lva s banerem Animal Rebellion"
            imgLgWebp={require("../../public/img/background/bg1lg.jpg?webp")}
            imgLgJpeg={require("../../public/img/background/bg1lg.jpg?size=1920")}
            imgSmJpeg={require("../../public/img/background/bg1lg.jpg?size=1280")}
            imgXsWebp={require("../../public/img/background/bg1xs.jpg?webp")}
            imgXsJpeg={require("../../public/img/background/bg1xs.jpg")}
          />
        </Delayed>
        <Delayed waitBeforeShow={props.duration * 2 - 500}>
          <BannerPicture
            in={props.count == 2}
            duration={props.duration}
            alt="Čeští rebelové držící baner Animal Rebellion"
            imgLgWebp={require("../../public/img/background/bg2lg.jpg?webp")}
            imgLgJpeg={require("../../public/img/background/bg2lg.jpg?size=1920")}
            imgSmJpeg={require("../../public/img/background/bg2lg.jpg?size=1280")}
            imgXsWebp={require("../../public/img/background/bg2xs.jpg?webp")}
            imgXsJpeg={require("../../public/img/background/bg2xs.jpg")}
          />
        </Delayed>
      </div>
    </div>
  );
}
