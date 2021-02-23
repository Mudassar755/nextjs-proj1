import PageHeader from "./header/Header";
import PageFooter from "./footer/Footer";
import Head from "next/head";

export const baseURL = "https://designstudio.smallseotools.com";

const Layout = ({
  children,
  OG_TITLE,
  OG_DESCRIPTION,
  OG_URL,
  CANONICAL,
  TWITTER_TITLE,
  TWITTER_DESCRIPTION,
}) => {
  return (
    <>
      <Head>
        <link rel="canonical" href={`${baseURL}${CANONICAL}`} />
        <meta name="description" content={OG_DESCRIPTION} />
        <meta property="og:title" content={OG_TITLE} key="ogtitle" />
        <meta property="og:description" content={OG_DESCRIPTION} key="ogdesc" />
        <meta property="og:image" content={`/static/icons/og/og-image.png`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseURL}${OG_URL}`} />
        {/* <meta property="og:site_name" content="Design Studio - Artistry & Vision | SmallSeoTools.com" /> */}

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:site"
          content="@designstudio.smallseotools.com"
        />
        <meta
          name="twitter:title"
          content={TWITTER_TITLE}
        />
        <meta
          name="twitter:description"
          content={TWITTER_DESCRIPTION}
        />
        <meta name="twitter:image" content={`/static/icons/og/og-image.png`} />

        <title>{OG_TITLE}</title>
      </Head>
      <PageHeader />
      {children}
      <PageFooter />
    </>
  );
};

export default Layout;
