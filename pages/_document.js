import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const tjPublisherId = process.env.NEXT_PUBLIC_TJ_PUBLISHER_ID;
  const useExoClick = process.env.NEXT_PUBLIC_USE_EXOCLICK === 'true';

  return (
    <Html lang="en">
      <Head>
        {/* TrafficJunky — global ad loader (required once per page) */}
        {tjPublisherId && (
          <script
            async
            src={`https://ads.trafficjunky.net/ads/agent/${tjPublisherId}/show_ads_mq.js`}
          />
        )}
        {/* ExoClick — ad provider (required once per page) */}
        {useExoClick && (
          <script
            async
            data-cfasync="false"
            src="https://a.magsrv.com/ad-provider.js"
          />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
