import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const tjPublisherId = process.env.NEXT_PUBLIC_TJ_PUBLISHER_ID;
  const useExoClick = process.env.NEXT_PUBLIC_USE_EXOCLICK === 'true';

  return (
    <Html lang="en">
      <Head>
        <title>XCamModels — Earn Daily as a Cam Model</title>
        <meta name="description" content="Join XCamModels and keep 85% of everything you earn. Daily payouts, 8 top platforms, full privacy. Free to join." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {tjPublisherId && (
          <script async src={`https://ads.trafficjunky.net/ads/agent/${tjPublisherId}/show_ads_mq.js`} />
        )}
        {useExoClick && (
          <script async data-cfasync="false" src="https://a.magsrv.com/ad-provider.js" />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
