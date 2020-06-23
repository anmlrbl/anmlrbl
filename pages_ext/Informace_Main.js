import Informace_Base from "./Informace_Base";
import TypoText from "../components/typo/TypoText";
import TypoTitleInfo from "../components/typo/TypoTitleInfo";
import TypoSubtitleInfo from "../components/typo/TypoSubtitleInfo";
import TypoLinkInfo from "../components/typo/TypoLinkInfo";

export default (props) => {
  
  return (
    <Informace_Base head={props.head} image={props.image}>
      <TypoTitleInfo>{props.text.title}</TypoTitleInfo>
      <TypoSubtitleInfo>{props.text.subTitle}</TypoSubtitleInfo>
      {props.text.paragraphs.map((paragraph, index) => (
        <TypoText key={index}>{paragraph}</TypoText>
      ))}
      <TypoSubtitleInfo>Zdroje</TypoSubtitleInfo>
      {props.text.sources.map((source, index) => (
        <TypoLinkInfo href={source[1]} key={index}>{source[0]}</TypoLinkInfo>
      ))}
    </Informace_Base>
  );
};
