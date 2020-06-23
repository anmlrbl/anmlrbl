import Head from "next/head";

const hostname = 'https://animalrebellion.cz'

const HeadBase = (props) => {
  const head = process(props.head, props.path);

  return (
    <Head>
      <title>{head.title}</title>
      <meta name="description" content={head.description} />
      <meta property="og:title" content={head.title} />
      <meta property="og:description" content={head.description} />
      <meta property="og:url" content={head.ogUrl} />
      <meta property="og:image" content={head.ogImage} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={head.title} />
      <meta name="twitter:description" content={head.description} />
      <meta name="twitter:image" content={head.ogImage} />
      {props.children}
    </Head>
  );
};

function process(head, path) {
  return {
    title: subText(60, head.title),
    description: subText(155, head.description),
    ogUrl: hostname + path,
    ogImage: hostname + head.image,
  };
}

function subText(maxLength, text) {
  if (text.length <= maxLength) {
    return text;
  }
  var idx = text.lastIndexOf(" ", maxLength);
  if (idx == -1) {
    idx = maxLength
  }
  return text.substr(0, idx);
}

export default HeadBase;
