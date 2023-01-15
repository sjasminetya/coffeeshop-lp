import Head from 'next/head';

const Title = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      <link href="/favicon.ico" rel="icon" />
    </Head>
  );
};

export default Title;
