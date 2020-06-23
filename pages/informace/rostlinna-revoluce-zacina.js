import Informace_Main from "../../pages_ext/Informace_Main";
import MainImage from "../../components/img/MainImage";
import content from "../../pages_text/rostlinna-revoluce-zacina";
import HeadBase from "../../components/HeadBase";

export default () => {

  return (
    <Informace_Main
      head={<HeadBase head={head(content)} path={content.path} />}
      text={content}
      image={
        <MainImage
          imgSmWebp={content.imgSmWebp}
          imgSmJpeg={content.imgSmJpeg}
          imgXsWebp={content.imgXsWebp}
          imgXsJpeg={content.imgXsJpeg}
          alt={content.imgAlt}
        />
      }
    />
  );
};

function head(content, pathname) {
  return {
    title: content.title,
    description: content.subTitle + " " + content.paragraphs[0],
    path: pathname,
    image: content.imgSmJpeg,
  };
}
